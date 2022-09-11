<script setup lang="ts">
import { reactive } from 'vue';
import AudioPeaksWidget from '../components/AudioPeaksWidget.vue';
const state = reactive({ url: '' });
</script>
<template>
  <div class="columns">
    <div class="column">
      <p>
        This is a showcase for a simple snippets player. The player is available
        with vue-peaks as ready-made component, which you can use as-is or adapt it to your needs.
      </p>
    </div>
    <div class="column">
      <highlightjs language='vue-typescript' code="import AudioPeaksWidget 
from 'vue-peaks/src/components/AudioPeaksWidget.vue';
const state = reactive({ url: '' });" />
      <highlightjs language='vue-template' code="<input type='url' 
       v-model='state.url' 
       placeholder='Paste an URL to a media file' />
<!-- The :key property makes sure that the component 
     is re-rendered on every URL change, causing
     a re-render of the waveform -->       
<AudioPeaksWidget :src='state.url' 
                  :key='state.url'>
</AudioPeaksWidget>" />
    </div>
    <div class="column">
      <div class="box">
        <div class="field">
          <div class="control">
            <input class="input" type="url" v-model="state.url" placeholder="Paste an URL to a media file" />
          </div>
        </div>
        <!-- The :key property makes sure that the component 
        is re-rendered on every URL change, causing
        a re-render of the waveform -->
        <AudioPeaksWidget :src="state.url" :key="state.url">
        </AudioPeaksWidget>
      </div>
    </div>
  </div>
  <div class="columns">
    <div class="column">
      <p>For your reference, here's the complete Widget SFC (as available from <a
          href='https://github.com/suterma/vue-peaks/blob/main/src/components/AudioPeaksWidget.vue'>GitHub</a>)</p>
      <highlightjs language='vue-sfc' code="<script setup lang='ts'>
import type { PeaksOptions } from 'peaks.js';
import { reactive, shallowRef } from 'vue';
import AudioPeaks from './AudioPeaks.vue';

const props = defineProps<{
  /** The media source URL
   */
  src?: string;
}>();

/** The configuration options
 */
const options: PeaksOptions = {
  overview: {
    /* The container div is provided and handled internally by AudioPeaks */
    waveformColor: 'hsl(141, 53%, 53%)',
    playedWaveformColor: 'hsl(141, 53%, 31%)',
    showAxisLabels: false,
    axisGridlineColor: 'hsl(0, 0%, 100%)',
  },
  /* The widget does not use a zoom area */

  /* The mediaElement is provided and handled internally by AudioPeaks */
  webAudio: { audioContext: new AudioContext() },
  playheadColor: 'hsl(348, 100%, 61%)',
};

const audio = shallowRef<HTMLAudioElement | null>(null);
const state = reactive({ isPlaying: false, canPlay: false });

function togglePlayback() {
  state.isPlaying = !state.isPlaying;
  if (state.isPlaying) {
    audio.value?.play();
  } else {
    audio.value?.pause();
  }
}
</script>
<template>
  <div class='widget'>
    <button class='item' @click='togglePlayback()' :disabled='!state.canPlay'>
      <!-- pause icon -->
      <svg v-if='state.isPlaying' style='width: 24px; height: 24px' viewBox='0 0 24 24'>
        <path fill='currentColor' d='M14,19H18V5H14M6,19H10V5H6V19Z' />
      </svg>
      <!-- play icon -->
      <svg v-else style='width: 24px; height: 24px' viewBox='0 0 24 24'>
        <path fill='currentColor' d='M8,5.14V19.14L19,12.14L8,5.14Z' />
      </svg>
    </button>
    <AudioPeaks overviewElementId='widgetOverview' ref='audioPeaksWidget' :options='options'>
      <template #zoomview>
        <template />
      </template>
      <template #default>
        <audio ref='audio' @canplay='
          () => {
            state.canPlay = true;
          }
        '>
          <source :src='props.src' />
        </audio>
      </template>
      <template #controls>
        <template />
      </template>
    </AudioPeaks>
    <div class='item peaks-overview' id='widgetOverview'>
      <div v-if='props.src' :title='`Loading and rendering from ${props.src}`'>
        <!-- spinner icon -->
        <svg class='spin' style='width: 24px; height: 24px' viewBox='0 0 24 24'>
          <path fill='currentColor'
            d='M12 19C13.1 19 14 19.9 14 21S13.1 23 12 23 10 22.1 10 21 10.9 19 12 19M12 1C13.1 1 14 1.9 14 3S13.1 5 12 5 10 4.1 10 3 10.9 1 12 1M6 16C7.1 16 8 16.9 8 18S7.1 20 6 20 4 19.1 4 18 4.9 16 6 16M3 10C4.1 10 5 10.9 5 12S4.1 14 3 14 1 13.1 1 12 1.9 10 3 10M6 4C7.1 4 8 4.9 8 6S7.1 8 6 8 4 7.1 4 6 4.9 4 6 4M18 16C19.1 16 20 16.9 20 18S19.1 20 18 20 16 19.1 16 18 16.9 16 18 16M21 10C22.1 10 23 10.9 23 12S22.1 14 21 14 19 13.1 19 12 19.9 10 21 10M18 4C19.1 4 20 4.9 20 6S19.1 8 18 8 16 7.1 16 6 16.9 4 18 4Z' />
        </svg>
      </div>
      <span v-else>no media available</span>
    </div>
  </div>
</template>
<style scoped>
.widget {
  height: 48px;
  align-items: center;
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
}

.item {
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--color-border);
  background: var(--color-background);
  border-radius: 8px;
  cursor: pointer;
  padding-left: 1em;
  padding-right: 1em;
  text-align: center;
}

/** The overview item should use all available space, including in the item itself */
.item.peaks-overview {
  flex-grow: 1;
  padding-left: 0;
  padding-right: 0;
}

.widget .item:not(:last-child) {
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
  margin-right: -1px;
}

.widget .item:not(:first-child) {
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(359deg);
  }
}

.spin {
  animation: spin 6s linear infinite;
}
</style>
" />
    </div>
  </div>
</template>
