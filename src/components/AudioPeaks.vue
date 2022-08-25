<script setup lang="ts">
import { ref, shallowRef, onMounted } from 'vue';
import Peaks from 'peaks.js';

const props = defineProps<{
  /** The audio source URL */
  src: string;
  /** The unique identifier of this component
   * @remarks Required, if you have more than one instance of an
   * audio.js component in the HTML document.
   */
  id?: string;

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
  createPeaksInstance();
});

/** Initializes the peaks instance
 * @remarks If no options are provided by the respective component property, some default options are used.
 * @devdoc Must be called only after mount, because the expected HTML elements must be addressable already by their id.
 */
function createPeaksInstance() {
  const defaultOptions: Peaks.PeaksOptions = {
    containers: {
      overview: document.getElementById('overview-' + props.id),
      zoomview: document.getElementById('zoomview-' + props.id),
    },
    mediaElement:
      (document.getElementById('audio-' + props.id) as HTMLAudioElement) ??
      null,
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
  <slot name="overview">
    <div class="peaks-overview" :id="'overview-' + props.id" ref="overview"></div>
  </slot>
  <slot name="zoomview">
    <div class="peaks-zoomview" :id="'zoomview-' + props.id" ref="zoomview"></div>
  </slot>
  <slot name="audio">
    <audio class="peaks-audio" :id="'audio-' + props.id" controls>
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
</template>

<style scoped>
.peaks-audio,
.peaks-overview,
.peaks-zoomview {
  width: 100%;
}

.peaks-overview,
.peaks-zoomview {
  height: 250px;
}
</style>
