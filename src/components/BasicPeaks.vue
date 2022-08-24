<!-- <script setup lang="ts">
import Peaks from "peaks.js";

const options: Peaks.PeaksOptions = {
  zoomview: {
    container: document.getElementById("zoomview-container"),
  },
  overview: {
    container: document.getElementById("overview-container"),
  },
  mediaElement: (document.querySelector("audio") as HTMLAudioElement) ?? null,
  webAudio: {
    audioContext: new AudioContext(),
  },
};

Peaks.init(options, function (err, peaks) {
  // Do something when the waveform is displayed and ready
});
</script> -->

<script lang="ts">
import Peaks from "peaks.js";
export default {
  name: "BasicPeaks",
  data() {
    return {
      peakInstance: null,
    };
  },
  mounted() {
    this.createPeakInstance();
  },
  methods: {
    createPeakInstance() {
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
        zoomLevels: [64, 128, 256, 512],
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
    },
  },
};
</script>

<template>
  <div
    id="overview-container"
    style="width: 100%; height: 250px"
    ref="overview"
  ></div>
  <div
    id="zoomview-container"
    style="width: 100%; height: 250px"
    ref="zoomview"
  ></div>
  <audio style="width: 100%" controls>
    <source src="lidija_roos-not_for_sale.mp3" type="audio/mpeg" />
  </audio>
  <div>
    <button ref="zoomInButton">Zoom in</button>
    <button ref="zoomOutButton">Zoom out</button>
  </div>
</template>
