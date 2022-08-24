<script setup lang="ts">
import { shallowRef, onMounted } from 'vue'
import Peaks from "peaks.js";

const props = defineProps<{
  /** The audio source URL */
  src: string,
}>()

const peakInstance = shallowRef<Peaks.PeaksInstance | undefined>(undefined)
const zoomInButton = shallowRef(null);
const zoomOutButton = shallowRef(null);

onMounted(() => {
  createPeakInstance();
})

function createPeakInstance() {
  const options: Peaks.PeaksOptions = {
    containers: {
      overview: document.getElementById("overview-container"),
      zoomview: document.getElementById("zoomview-container"),
    },
    mediaElement:
      (document.querySelector("audio") as HTMLAudioElement) ?? null,
    webAudio: {
      audioContext: new AudioContext(),
    },
    zoomLevels: [8, 16, 32, 64, 128, 256, 512, 1024, 2048],
  };

  Peaks.init(options, function (err, peaks) {
    console.log(err, peaks);
    peakInstance.value = peaks;

    console.log(zoomInButton.value);
    console.log(zoomOutButton.value);

    zoomInButton.value.addEventListener("click", () => {
      peakInstance.value.zoom.zoomIn();
    });
    zoomOutButton.value.addEventListener("click", () => {
      peakInstance.value.zoom.zoomOut();
    });
  });
} 
</script>

<template>
  <div id="overview-container" style="width: 100%; height: 250px" ref="overview"></div>
  <div id="zoomview-container" style="width: 100%; height: 250px" ref="zoomview"></div>
  <audio style="width: 100%" controls>
    <source :src="src" />
  </audio>
  <div>
    <button ref="zoomInButton">Zoom in</button>
    <button ref="zoomOutButton">Zoom out</button>
    <!-- <button ref="zoomInButton" @click="peakInstance.zoom.zoomIn()">Zoom in</button>
    <button ref="zoomOutButton" @click="peakInstance.zoom.zoomOut()">Zoom out</button> -->
    <!-- {{ peakInstance?.value?.zoom.getZoom() }} -->
  </div>
</template>
