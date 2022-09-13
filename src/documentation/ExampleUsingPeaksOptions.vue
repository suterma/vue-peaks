<script setup lang="ts">
import type { PeaksOptions } from 'peaks.js';
import AudioPeaks from './../components/AudioPeaks.vue';

/** The configuration options 
* @remarks The colors are taken from a Bulma color scheme.
*/
const options: PeaksOptions = {
  overview: {
    /* container is handled separately by AudioPeaks */
    waveformColor: 'hsl(204, 86%, 53%)',
    playedWaveformColor: 'hsl(204, 71%, 39%)',
    highlightColor: 'hsl(206, 70%, 96%)',
    highlightOffset: 0,
    axisGridlineColor: 'hsl(0, 0%, 29%)',
    axisLabelColor: 'hsl(0, 0%, 29%)',
  },
  zoomview: {
    /* container is handled separately by AudioPeaks */
    playedWaveformColor: 'hsl(48, 53%, 31%)',
    axisGridlineColor: 'hsl(0, 0%, 29%)',
    axisLabelColor: 'hsl(0, 0%, 29%)',
  },
  /* mediaElement is handled separately by AudioPeaks */
  webAudio: { audioContext: new AudioContext() },
  zoomLevels: [256],
  playheadColor: 'hsl(348, 100%, 61%)'
}
</script>
<template>
  <div class="columns is-desktop">
    <div class="column">
      <p>
        To fully customize the appearance and behavior, the Peaks.js <a
          href="https://github.com/bbc/peaks.js#Configuration">configuration options</a> can be provided.
      </p>
      <p> Note, that you should omit the the
        <span class="code">containers.overview</span>,
        <span class="code">containers.zoomview</span> and
        <span class="code">mediaElement</span> options, since these are set internally, depending on the view mode
        (explained
        with the basic examples).
      </p>
      <p>The options allow you for example to
      <ul>
        <li>customize the waveform styles</li>
        <li>define scrolling behavior</li>
        <li>use precomputed waveform data</li>
      </ul>
      </p>
    </div>
    <div class="column">

      <highlightjs language='vue-typescript' code="/** The configuration options 
* @remarks The colors are taken from a Bulma color scheme.
*/
const options: PeaksOptions = {
  overview: {
    /* container is handled separately by AudioPeaks */
    waveformColor: 'hsl(204, 86%, 53%)',
    playedWaveformColor: 'hsl(204, 71%, 39%)',
    highlightColor: 'hsl(206, 70%, 96%)',
    highlightOffset: 0,
    axisGridlineColor: 'hsl(0, 0%, 29%)',
    axisLabelColor: 'hsl(0, 0%, 29%)',
  },
  zoomview: {
    /* container is handled separately by AudioPeaks */
    waveformColor: 'hsl(48, 71%, 48%)',
    playedWaveformColor: 'hsl(48, 53%, 31%)',
    axisGridlineColor: 'hsl(0, 0%, 29%)',
    axisLabelColor: 'hsl(0, 0%, 29%)',
  },
  /* mediaElement is handled separately by AudioPeaks */
  webAudio: { audioContext: new AudioContext() },
  zoomLevels: [256],
  playheadColor: 'hsl(348, 100%, 61%)'
}" />
      <highlightjs language='vue-template' code="<AudioPeaks :options='options'>
  <audio controls>
    <source src='https://domain/file.mp3' />
  </audio>
  <template #controls><template />
    <!-- Using an empty template on a slot 
         prevents the default content -->
  </template>
</AudioPeaks>" />
    </div>
    <div class="column">
      <div class="box">
        <AudioPeaks :options='options'>
          <audio controls>
            <source src='https://suterma.github.io/vue-peaks/lidija_roos-not_for_sale.mp3' />
          </audio>
          <template #controls><template />
            <!-- Using an empty template on a slot 
                 prevents the default content -->
          </template>
        </AudioPeaks>
      </div>
    </div>
  </div>
</template>
