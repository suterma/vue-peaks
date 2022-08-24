<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Peaks from "peaks.js";

const props = defineProps<{
  /** The audio source URL */
  src: string,
}>()

const peakInstance = ref(null)
//     peakInstance: null,
//     src: String | null
//   };
// },
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
    zoomLevels: [64, 128, 256, 512, 1024, 2048],
  };
  const vm = this;
  Peaks.init(options, function (err, peaks) {
    console.log(err, peaks);

    vm.peakInstance = peaks;
    vm.$refs.zoomInButton.addEventListener("click", () => {
      peaks.zoom.zoomIn();
    });
    vm.$refs.zoomOutButton.addEventListener("click", () => {
      peaks.zoom.zoomOut();
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
  </div>
</template>
