<script setup lang="ts">
import { ref, shallowRef, onMounted } from 'vue';
import Peaks from 'peaks.js';

const props = defineProps<{
  /** The audio source URL (for the "simple" mode)
   * @remarks This URL is to be used internally with the default media slot 
   * (no slot template or external media element id is expected)
   */
  src?: string;

  /** The unique identifier of this component
   * @remarks Required, if you have more than one instance of a
   * Peaks.js component in the HTML document.
   */
  id?: string;

  /** The unique identifier of an external media element to use. (for the "external" mode)
 * @remarks Allows the use of an external media element.
 * (no slot template or audio source URL is expected)
 */
  mediaElementId?: string;

  /** The peaks options MUST NOT be deeply reactive for performance reasons.
   * @devdoc See the notes aboout performance with the peaksInstance property
   */
  options?: Peaks.PeaksOptions;
}>();

/** The peaks instance MUST NOT be deeply reactive for performance reasons.
 * @devdoc See https://github.com/bbc/peaks.js/issues/406#issuecomment-1225885020 in peaks.js
 * and this documentation https://vuejs.org/api/reactivity-advanced.html#shallowref about shallow references
 */
const peaksInstance = shallowRef<Peaks.PeaksInstance | undefined>(undefined);
const zoomInButton = shallowRef(null);
const zoomOutButton = shallowRef(null);
const zoomLevel = ref<number | undefined>(undefined);

onMounted(() => {

  //TODO add a warning when not all required propreties (src, id) are set.
  createPeaksInstance();
});

/** Initializes the peaks instance
 * @remarks If no options are provided by the respective component property, some default options are used.
 * @devdoc Must be called only after mount, because the expected HTML elements must be addressable already by their id.
 * @devdoc A currently unused variant for referencing an audio element from the template via reference uses
 * // reference on the component level
 * const audio = shallowRef(null);
 * // getting the element
 * (audio.value as unknown as HTMLAudioElement)
 */
function createPeaksInstance() {
  const defaultOptions: Peaks.PeaksOptions = {
    containers: {
      overview: document.getElementById('overview-' + props.id),
      zoomview: document.getElementById('zoomview-' + props.id),
    },
    /* Either use the audio element from inside the default slot, if available; otherwise get the audio element by id */
    mediaElement:
      document.getElementById('' + props.id)?.getElementsByTagName('audio')[0] ??
      (document.getElementById('' + props.mediaElementId) ?? undefined),
    webAudio: {
      audioContext: new AudioContext(),
    },
    zoomLevels: [256, 512, 1024, 2048, 4096],
  };

  Peaks.init(
    props.options ? props.options : defaultOptions,
    function (err, peaks) {
      console.log(err, peaks);
      peaksInstance.value = peaks;
      zoomLevel.value = peaks?.zoom.getZoom();
    }
  );
}

function zoomIn() {
  peaksInstance.value?.zoom.zoomIn();
  zoomLevel.value = peaksInstance.value?.zoom.getZoom();
}
function zoomOut() {
  peaksInstance.value?.zoom.zoomOut();
  zoomLevel.value = peaksInstance.value?.zoom.getZoom();
}
</script>

<template>
  <div :id="'' + props.id">
    <slot name="overview">
      <div class="peaks-overview" :id="'overview-' + props.id" ref="overview"></div>
    </slot>
    <slot name="zoomview">
      <div class="peaks-zoomview" :id="'zoomview-' + props.id" ref="zoomview"></div>
    </slot>
    <!-- If an external media element is reference, the default slot is not used -->
    <slot name="default" v-if="!props.mediaElementId">
      <!-- The default content slot for the "slot" mode -->
      <audio class="peaks-audio" :id="props.id" ref="audio" controls>
        <source :src="src" />
      </audio>
    </slot>
    <slot name="controls">
      <div class="peaks-controls">
        <button ref="zoomInButton" @click="zoomIn()">
          Zoom in</button>&nbsp;
        <button ref="zoomOutButton" @click="zoomOut()">
          Zoom out</button>&nbsp;
        <span>Zoom level: {{ zoomLevel }}</span>
      </div>
    </slot>
  </div>
</template>

<style scoped>
.peaks-audio,
.peaks-overview,
.peaks-zoomview {
  width: 100%;
}

.peaks-overview,
.peaks-zoomview {
  height: 100px;
}
</style>
