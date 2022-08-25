<script setup lang="ts">
import type { PeaksOptions } from 'peaks.js';
import { onMounted, shallowRef } from 'vue';
import AudioPeaks from './../components/AudioPeaks.vue';


const overviewCustomConfig = shallowRef(null);
const zoomviewCustomConfig = shallowRef(null);
const audioCustomConfig = shallowRef(null);




onMounted(() => {
  const customOptions: PeaksOptions = {
    containers: {
      overview: document.getElementById('overview-customConfig'),
      zoomview: document.getElementById('zoomview-customConfig'),
    },
    mediaElement: (document.getElementById('audio-customConfig') as HTMLAudioElement) ??
      null,
    webAudio: {
      audioContext: new AudioContext(),
    },
    zoomLevels: [256, 512],
  };

  console.debug("customOptions:", customOptions);

});
</script>

<template>
  <h1>Using a Peaks.js configuration</h1>
  <pre>
        ...
      </pre>
  <p>
    To fully customize the appearance and behaviour, the Peaks.js <a
      href="https://github.com/bbc/peaks.js#Configuration">configuration options</a> can be provided, alongside the
    matching HTML elements.
  </p>
  <p>This allows you for example to
  <ul>
    <li>customize the waveform styles</li>
    <li>define scrolling behaviour</li>
  </ul>
  </p>

  <div id="overview-customConfig" style="width: 100%; height: 50px" ref="overviewCustomConfig"></div>
  <div id="zoomview-customConfig" style="width: 100%; height: 50px" ref="zoomviewCustomConfig"></div>
  <audio id="audio-customConfig" style="width: 100%" controls>
    <source src="lidija_roos-decisions.ogg" />
  </audio>
  <AudioPeaks src="lidija_roos-decisions.ogg" id="customConfig">
  </AudioPeaks>
</template>
