<script setup lang="ts">
import {
  shallowRef,
  onMounted,
  type ShallowRef,
  onBeforeUnmount,
  computed,
  watch,
  ref,
} from 'vue';
import {
  useResizeObserver,
  useDebounceFn,
  useElementVisibility,
} from '@vueuse/core';

import Peaks, {
  type PeaksInstance,
  type PeaksOptions as PeaksOptions,
} from 'peaks.js';

const props = defineProps<{
  /** The audio source URL
   * (for the "simple" mode).
   * @remarks This URL is to be used internally with the default media slot
   * (no slot template or external media element id is expected)
   * @devdoc Note that audio elements with an empty src attribute cause a MediaError.
   * If this is a concern to you, you can use the v-if directive to conditionally only
   * render the element on non-emtpy URL values.
   */
  src?: string;

  /** Whether to render a video element instead of an audio element
   * (for the "simple" mode). */
  video?: boolean;

  /** Whether to immediately start calculating the waveform. By default, calculation only starts
   * when the component is visible. */
  eager?: boolean;

  /** The unique identifier of an external zoomview element to use
   * (for the "external" mode).
   * @remarks Allows the use of an external zoomview element by id.
   * (if set, no slot template is expected or used for the zoomview)
   */
  zoomviewElementId?: string;

  /** The zoomview element to use
   * (for the "external" mode).
   * @remarks Allows the use of an external zoomview element by object reference.
   * (if set, no slot template is expected or used for the zoomview)
   */
  zoomviewElement?: HTMLDivElement;

  /** The unique identifier of an external overview element to use
   * (for the "external" mode).
   * @remarks Allows the use of an external overview element by id.
   * (if set, no slot template is expected or used for the overview)
   */
  overviewElementId?: string;

  /** The overview element to use
   * (for the "external" mode).
   * @remarks Allows the use of an external overview element by object reference.
   * (if set, no slot template is expected or used for the overview)
   */
  overviewElement?: HTMLDivElement;

  /** The unique identifier of an external media element to use
   * (for the "external" mode).
   * @remarks Allows the use of an external media element by id.
   * (if set, no slot template or audio source URL is expected)
   */
  mediaElementId?: string;

  /** The external media element to use
   * (for the "external" mode).
   * @remarks Allows the use of an external media element by object reference.
   * (if set, no slot template or audio source URL is expected)
   */
  mediaElement?: HTMLMediaElement;

  /** The peaks options to use.
   * @remarks The element references to the overview, zoomview and media element
   * should not be provided, because these are already handled internally by AudioPeaks
   * using the other properties.
   * Doing so relieves the user from the burden of Vue's life cycle management for these elements.
   * @devdoc Note: Refs to HTML elements can only be accessed after mount.
   * See https://vuejs.org/guide/essentials/template-refs.html#accessing-the-refs
   */
  options?: PeaksOptions;
}>();

/** The peaks instance MUST NOT be deeply reactive for performance reasons.
 * @devdoc See https://github.com/bbc/peaks.js/issues/406#issuecomment-1225885020 in peaks.js
 * and this documentation https://vuejs.org/api/reactivity-advanced.html#shallowref about shallow references
 */
const peaksInstance = shallowRef<PeaksInstance | undefined>(undefined);

/** A reference to the encompassing div */
const audioPeaks = shallowRef<HTMLDivElement | null>(null);

const overview = shallowRef<HTMLDivElement | null>(null);
const overviewSlot = shallowRef(null);
const zoomview = shallowRef<HTMLDivElement | null>(null);
const zoomviewSlot = shallowRef(null);

/** A reference to the media element from the audio slot
 * (only when used in the "simple" mode) */
const media = shallowRef(null);

/** A reference to the (default) slot with the media element */
const mediaSlot = shallowRef(null);
const zoomLevel = shallowRef<number | undefined>(undefined);

defineExpose({
  /** The peaks.js instance is deliberately exposed, to allow direct use of the various APIs.
   * @remarks The instance is only available after the mounted lifecycle event and once
   * peaks.js has properly initialized.
   */
  peaksInstance,
});

onMounted(() => {
  if (props.eager) {
    createPeaksInstance();
  }
});

onBeforeUnmount(() => {
  destroyPeaksInstance();
});

const emit = defineEmits<{
  /**
   * Triggers in case the initialization fails
   *
   * @property {Error} error The error
   */
  (e: 'error', error: Error): void;
}>();

// --- lazy loading, only when visible ---

const audioPeaksIsVisible = useElementVisibility(audioPeaks);

watch(
  audioPeaksIsVisible,
  async () => {
    if (
      !props.eager &&
      audioPeaksIsVisible.value == true &&
      peaksInstance.value == null
    ) {
      createPeaksInstance();
    }
  },
  {
    immediate: true,
  }
);

// --- error handling ---

/** Handle peaks.js initialization errors
 */
function handleError(error: Error): void {
  console.error(error);
  lastError.value = error;
  emit('error', lastError.value);
}

/** Handle media-related errors
 */
function handleMediaError(mediaError: MediaError): void {
  console.error(mediaError);
  lastError.value = new Error(mediaError.message);
  emit('error', lastError.value);
}

/** A reference to the last error, if any */
const lastError = ref<Error | null>(null);

// --- setup ---

/** Initializes the peaks instance
 * @remarks If no options are provided by the respective component property, some default options are used.
 * @devdoc Must be called only after mount, because the expected HTML elements must be addressable already by their id.
 */
function createPeaksInstance(): void {
  console.debug('AudioPeaks::createPeaksInstance:options:', props.options);

  const overviewElement = get<HTMLDivElement>(
    props.overviewElement,
    props.overviewElementId,
    overview,
    overviewSlot,
    'div'
  );
  setMinimumSize(overviewElement);

  const zoomviewElement = get<HTMLDivElement>(
    props.zoomviewElement,
    props.zoomviewElementId,
    zoomview,
    zoomviewSlot,
    'div'
  );
  setMinimumSize(zoomviewElement);

  const mediaElement = get<HTMLMediaElement>(
    props.mediaElement,
    props.mediaElementId,
    media,
    mediaSlot,
    'audio,video'
  );

  // handle an already existing and future errors on the media element, e.g. a missing response
  // NOTE: this does not work in "simple mode", see https://github.com/suterma/vue-peaks/issues/18
  if (mediaElement?.error) {
    handleMediaError(mediaElement.error);
  }
  if (mediaElement) {
    mediaElement?.addEventListener('error', (error) => {
      handleError(error.error);
    });
  }

  // If the options are given, take over only the internally handled options
  if (props.options) {
    if (props.options.zoomview) {
      //if the zoomview is already specified, only take the container
      props.options.zoomview.container = zoomviewElement;
    } else {
      //create the container option
      props.options.zoomview = {
        container: zoomviewElement,
      };
    }
    if (props.options.overview) {
      //if the overview is already specified, only take the container
      props.options.overview.container = overviewElement;
    } else {
      //create the container option
      props.options.overview = {
        container: overviewElement,
      };
    }
    if (
      props.options.webAudio?.audioContext ||
      props.options.dataUri ||
      props.options.waveformData
    ) {
      //if the audioContext or waveform data is already specified, use it
    } else {
      //create the audioContext
      props.options.webAudio = {
        audioContext: new AudioContext(),
      };
    }

    props.options.mediaElement = mediaElement;
  }

  // either take the prepared options from above, or, if not available,
  // create and use the bare minimum
  const options: PeaksOptions = props.options
    ? props.options
    : {
        overview: { container: overviewElement },
        zoomview: { container: zoomviewElement },
        mediaElement: mediaElement,
        webAudio: {
          audioContext: new AudioContext(),
        },
        zoomLevels: [256, 512, 1024, 2048, 4096],
      };

  Peaks.init(
    options,
    function (error: Error, peaks: PeaksInstance | undefined): void {
      if (error) {
        handleError(error);
      }
      peaksInstance.value = peaks;
      zoomLevel.value = peaks?.zoom.getZoom();
    }
  );
}

/** Destroys the peaks instance
 */
function destroyPeaksInstance(): void {
  peaksInstance.value?.destroy();
}

/** Sets a fixed minimum size
 * @remarks This is used to avoid the error about making sure the zoomview and overview "container is visible and has non-zero width and height"
 */
function setMinimumSize(element: HTMLDivElement | undefined): void {
  if (element) {
    element.style.minHeight = 40 + 'px'; // default audio element height on FireFox
    element.style.minWidth = 100 + '%';
  }
}

/** Handles overview element resizes */
useResizeObserver(audioPeaks, () => {
  debouncedOverviewResize();
});

const resizeRateMilliseconds = 300;

const debouncedOverviewResize = useDebounceFn(() => {
  console.debug('AudioPeaks::debouncedOverviewResize');
  const overview = peaksInstance.value?.views.getView('overview');
  overview?.fitToContainer();
  const zoomview = peaksInstance.value?.views.getView('zoomview');
  zoomview?.fitToContainer();
}, resizeRateMilliseconds);

/** Gets the HTML element to act upon, using the first of the provided options
 * @remarks This is either (first in the following order)
 * - the element provided as object
 * - the element provided by id
 * - the element from the (internal) slot template
 * - the first element from a provided external slot template
 * If none is found 'undefined' is returned, which will throw an error in peaks.js
 * @param {HTMLElement} elm The element
 * @param {string | undefined} htmlElementId The HTML element id
 * @param {ShallowRef} ref The reference to the element
 * @param {ShallowRef} slotRef The reference to the slot containing the element
 * @param {string} slotRefHtmlTagName The required tag name of the element in the slot.
 * This can be a comma-separated list of multiple tags.
 * @return The found element or undefined if none is found
 */
function get<HEType extends HTMLElement>(
  elm: HEType | undefined,
  htmlElementId: string | undefined,
  ref: ShallowRef,
  slotRef: ShallowRef,
  slotRefHtmlTagName: string
): HEType | undefined {
  if (elm) {
    console.debug('AudioPeaks::Found elm: ', elm);
    return elm;
  }
  if (htmlElementId) {
    console.debug('AudioPeaks::Found element by id: ', htmlElementId);
    return document.getElementById('' + htmlElementId) as unknown as HEType;
  }

  // The reference can be used only with the default slot
  const elementByRef = ref.value as unknown as HEType;
  if (elementByRef) {
    console.debug('AudioPeaks::Found element by Ref: ', elementByRef);
    return elementByRef;
  }

  // With external slot templates, the element can not be referenced with a ref directly
  // (because external slot templates can not set refs to enclosed elements from the outside)
  // First get a reference to the slot then find the first element of the given type
  const externalSlot = slotRef.value as unknown as HTMLElement;
  if (externalSlot) {
    const elementByFirstInSlot = externalSlot.querySelector<HEType>(
      slotRefHtmlTagName
    ) as unknown as HEType;
    if (elementByFirstInSlot) {
      console.debug(
        'AudioPeaks::Found element by first in slot: ',
        elementByFirstInSlot
      );
      return elementByFirstInSlot;
    }
  }
}

function zoomIn(): void {
  peaksInstance.value?.zoom.zoomIn();
  zoomLevel.value = peaksInstance.value?.zoom.getZoom();
}
function zoomOut(): void {
  peaksInstance.value?.zoom.zoomOut();
  zoomLevel.value = peaksInstance.value?.zoom.getZoom();
}

// --- styling values ---

/** The zoomview progress color. */
const zoomviewWaveformProgressColor = computed(
  () =>
    props.options?.zoomview?.waveformColor ??
    /* the peaks.js default */ 'rgba(0, 225, 128, 1)'
);

/** The overview progress color. */
const overviewWaveformProgressColor = computed(
  () =>
    props.options?.overview?.waveformColor ??
    /* the peaks.js default */ 'rgba(0, 0, 0, 0.2)'
);
</script>
<template>
  <div
    ref="audioPeaks"
    class="peaks"
    :class="{
      hasError: lastError !== null,
    }"
    :title="lastError?.message"
  >
    <div ref="overviewSlot">
      <!-- @slot Named slot for the overview element. If an external overview element is referenced, the overview slot is not used -->
      <slot
        name="overview"
        v-if="!props.overviewElementId && !props.overviewElement"
      >
        <!-- The slot content for the "simple" mode -->
        <div
          class="peaks-overview"
          ref="overview"
        ></div>
      </slot>
    </div>

    <div ref="zoomviewSlot">
      <!-- @slot Named slot for the zoomview element. If an external zoomview element is referenced, the zoomview slot is not used -->
      <slot
        name="zoomview"
        v-if="!props.zoomviewElementId && !props.zoomviewElement"
      >
        <!-- The slot content for the "simple" mode -->
        <div
          class="peaks-zoomview"
          ref="zoomview"
        ></div>
      </slot>
    </div>

    <div ref="mediaSlot">
      <!-- @slot Default slot for the media element. If an external media element is referenced, the default slot is not used -->
      <slot
        name="default"
        v-if="!props.mediaElementId && !props.mediaElement"
      >
        <!-- The slot content for the "simple" mode -->
        <!-- The video element (if requested) -->
        <video
          v-if="video"
          class="peaks"
          ref="media"
          controls
        >
          <source :src="src" />
          Your browser does not support the video element.
        </video>
        <!-- The audio element (for backwards compatibility, the peaks-audio css class is additionally provided) -->
        <audio
          v-else
          class="peaks peaks-audio"
          ref="media"
          controls
        >
          <source :src="src" />
          Your browser does not support the audio element.
        </audio>
      </slot>
    </div>
    <!-- @slot Named slot for the zoom controls.  -->
    <slot name="controls">
      <!-- The slot content for the "simple" mode -->
      <div class="peaks-controls">
        <button @click="zoomIn()">Zoom in</button>&nbsp;
        <button @click="zoomOut()">Zoom out</button>&nbsp;
        <span>Zoom level: {{ zoomLevel }}</span>
      </div>
    </slot>
  </div>
</template>
<style>
audio.peaks,
video.peaks,
div.peaks-overview,
div.peaks-zoomview {
  width: 100%;
}

div.peaks-overview,
div.peaks-zoomview {
  height: 80px;
}

/** During loading, no waveform is displayed, but a progress indication shown */

/** progress colors */
div.peaks-overview:empty {
  background: linear-gradient(
    90deg,
    rgba(128, 128, 128, 0),
    v-bind(overviewWaveformProgressColor),
    rgba(128, 128, 128, 0)
  );
}

div.peaks-zoomview:empty {
  background: linear-gradient(
    90deg,
    v-bind(zoomviewWaveformProgressColor),
    rgba(128, 128, 128, 0),
    v-bind(zoomviewWaveformProgressColor)
  );
}

div.peaks-overview:empty,
div.peaks-zoomview:empty {
  pointer-events: none;
  background-size: 200% 200%;
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-direction: reverse;
  animation-name: viewProgress;
}

@keyframes viewProgress {
  0% {
    background-position: -200% -200%;
  }
  100% {
    background-position: 200% 200%;
  }
}

/** On error when loading, no waveform is displayed, but an error indication shown */

/** progress colors */
.peaks.hasError div.peaks-overview:empty,
.peaks.hasError div.peaks-zoomview:empty {
  background: repeating-linear-gradient(
    -45deg,
    #e10000,
    #e10000 10px,
    #e1000000 10px,
    #e1000000 20px
  );
  animation-name: none;
}
</style>
