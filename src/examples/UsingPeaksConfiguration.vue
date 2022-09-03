<script setup lang="ts">
import type { PeaksOptions } from 'peaks.js';
import { reactive } from 'vue';
import AudioPeaks from './../components/AudioPeaks.vue';

/** The configuration options 
 */
const options = reactive<PeaksOptions>({
  overview: {
    /* container is provided and handled internally by AudioPeaks */
    waveformColor: 'lightgreen',
    playedWaveformColor: 'darkgreen',
    highlightColor: 'lightsalmon',
    highlightOffset: 0

  },
  zoomview: {
    /* container is provided and handled internally by AudioPeaks */
    waveformColor: 'lightsalmon',
    playedWaveformColor: 'darkorange'
  },
  /* mediaElement is provided and handled internally by AudioPeaks */
  webAudio: { audioContext: new AudioContext() },
  zoomLevels: [8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096],
  playheadColor: 'red'
}
);

</script>

<template>
  <h1>[EXPERIMENTAL] Using a Peaks.js configuration</h1>
  <pre>
        //TODO
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
  <div class="example-display">
    <AudioPeaks :options="options">
      <audio controls>
        <source src="https://suterma.github.io/vue-peaks/lidija_roos-not_for_sale.mp3" />
      </audio>
    </AudioPeaks>
  </div>
</template>
