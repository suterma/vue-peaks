<script setup lang="ts">
import { ref, shallowRef, onMounted } from 'vue';
import Peaks from 'peaks.js';

const props = defineProps<{
  /** The audio source URL */
  src: string;
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

function createPeaksInstance() {
  const options: Peaks.PeaksOptions = {
    containers: {
      overview: document.getElementById('overview-container'),
      zoomview: document.getElementById('zoomview-container'),
    },
    mediaElement:
      (document.querySelector('audio') as HTMLAudioElement) ?? null,
    webAudio: {
      audioContext: new AudioContext(),
    },
    zoomLevels: [256, 512, 1024, 2048, 4096],
  };

  Peaks.init(options, function (err, peaks) {
    console.log(err, peaks);
    peaksInstance.value = peaks;
    zoomLevel.value = peaks?.zoom.getZoom();
  });
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
  <div id="overview-container" style="width: 100%; height: 250px" ref="overview"></div>
  <div id="zoomview-container" style="width: 100%; height: 250px" ref="zoomview"></div>
  <audio style="width: 100%" controls>
    <source :src="src" />
  </audio>
  <div>
    <button ref="zoomInButton" @click="zoomIn()">Zoom in</button>&nbsp;
    <button ref="zoomOutButton" @click="zoomOut()">Zoom out</button>&nbsp;
    <span>Zoom level: {{ zoomLevel }}</span>
  </div>
</template>
