<script setup lang="ts">
import type { PeaksOptions } from 'peaks.js';
import AudioPeaks from './../components/AudioPeaks.vue';

/** The configuration options 
* @remarks The colors are taken from a Bulma color scheme.
*/
const options: PeaksOptions = {
  overview: {
    /* container is handled separately by AudioPeaks */
    waveformColor: '#3298dc',
    playedWaveformColor: '#238cd1',
    highlightColor: 'hsl(206, 70%, 96%)',
    highlightOffset: 0,
    axisGridlineColor: 'hsl(0, 0%, 29%)',
    axisLabelColor: 'hsl(0, 0%, 29%)',
    showPlayheadTime: false
  },
  zoomview: {
    /* container is handled separately by AudioPeaks */
    waveformColor: '#f1b70e',
    playedWaveformColor: '#d9a50d',
    axisGridlineColor: 'hsl(0, 0%, 29%)',
    axisLabelColor: 'hsl(0, 0%, 29%)',
    playheadTextColor: '#e43725',
    showPlayheadTime: true
  },
  /* mediaElement is handled separately by AudioPeaks */

  /** webAudio is optional. If omitted, a new AudioContext is created */
  webAudio: { audioContext: new AudioContext() },
  
  /** zoomLevels is optional. If omitted, a default set of 4 zoom levels is used */
  zoomLevels: [256],
  
  /** playheadColor is optional. If omitted, a default black color is used */
  playheadColor: '#e43725'
}
</script>
<template>
  <div class="columns is-desktop">
    <div class="column">
      <p>
        To fully customize the appearance and behavior, the Peaks.js <a
          href="https://github.com/bbc/peaks.js/blob/master/doc/API.md#configuration">configuration options</a> can be provided.
      </p>
      <p> Note, that you should omit the the
        <span class="code">zoomview.container</span>,
        <span class="code">overview.container</span> and
        <span class="code">mediaElement</span> options, since these are already handled internally, depending on the view mode
        (see explanation with the <a href="#basic-examples">basic examples</a>).
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

      <highlightjs language='vue-typescript' code="import { PeaksOptions } from 'peaks.js';
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
    waveformColor: 'hsl(48, 71%, 48%)',
    playedWaveformColor: 'hsl(48, 53%, 31%)',
    axisGridlineColor: 'hsl(0, 0%, 29%)',
    axisLabelColor: 'hsl(0, 0%, 29%)',
  },
  /** webAudio is optional. If omitted, and neither `dataUri` nor `waveformData`
  is present, a new AudioContext is created */
  webAudio: { audioContext: new AudioContext() },
  
  /** zoomLevels is optional. If omitted, a default set of zoom levels is used */
  zoomLevels: [256],
  
  /** playheadColor is optional. If omitted, a default black color is used */
  playheadColor: '#e43725'
}" />
      <highlightjs language='vue-template' code="<AudioPeaks :options='options'>
  <audio controls>
    <source src='https://lib.replayer.app/your-light-by-lidija-roos.mp3' />
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
            <source src='https://lib.replayer.app/lidija_roos-not_for_sale.mp3' />
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
