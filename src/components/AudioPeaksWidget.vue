<script setup lang='ts'>
import type { PeaksOptions } from 'peaks.js';
import { computed, reactive, shallowRef } from 'vue';
import AudioPeaks from './AudioPeaks.vue';

/** Reference to the AudioPeaks component */
const audioPeaks = shallowRef<InstanceType<typeof AudioPeaks>>()

/** Accessor to the peaks instance from the AudioPeaks component
 * @remarks Allows access to the peaks.js instance to call various functions on the API.
 */
const peaksInstance = computed(() => audioPeaks.value?.peaksInstance);
const audio = shallowRef<HTMLAudioElement | null>(null);
const state = reactive({ isPlaying: false, canPlay: false, bookmark: 0, lastErrorMessage: '' });

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
    waveformColor: '#2ecc71',
    playedWaveformColor: '#29b765',
    showAxisLabels: false,
    axisGridlineColor: 'hsl(0, 0%, 100%)',
    playheadTextColor: '#e43725',
    showPlayheadTime: true
  },
  showPlayheadTime: true,
  /* The widget does not use a zoom area */

  /* The mediaElement is provided and handled internally by AudioPeaks */
  webAudio: { audioContext: new AudioContext() },
  playheadColor: '#e43725',
};



/** Toggles playback
 * @devdoc Directly uses the audio element instead of the peaks.js player API 
 * to allow control even when the waveform is not yet ready.
 */
function togglePlayback() {
  state.isPlaying = !state.isPlaying;
  if (state.isPlaying) {
    audio.value?.play();
  } else {
    audio.value?.pause();
  }
}

/** Sets a bookmark at the current position
 */
function setBookmark() {
  const currentTime = peaksInstance.value?.player.getCurrentTime();
  if (currentTime) {
    peaksInstance.value?.points.add({
      time: currentTime,
      editable: true,
      labelText: 'Bookmark',
      color: '#000000'
    });
    state.bookmark = currentTime;
  }
}

/** Seeks to the stored bookmark
 */
function seekBookmark() {
  peaksInstance.value?.player.seek(state.bookmark);
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
    <button class='item' @click='setBookmark()' :disabled='!state.canPlay' title="set bookmark">
      <!-- bookmark icon -->
      <svg style='width: 24px; height: 24px' viewBox='0 0 24 24'>
        <path fill='currentColor'
          d='M14.55 20C15 20.76 15.5 21.44 15.91 22H6C4.89 22 4 21.11 4 20V4C4 2.9 4.89 2 6 2H18C19.11 2 20 2.9 20 4V10.22C19.5 10.08 19 10 18.5 10C18.33 10 18.17 10 18 10.03V4H13V12L10.5 9.75L8 12V4H6V20H14.55M22 15.5C22 18.1 18.5 22 18.5 22S15 18.1 15 15.5C15 13.6 16.6 12 18.5 12S22 13.6 22 15.5M19.7 15.6C19.7 15 19.1 14.4 18.5 14.4S17.3 14.9 17.3 15.6C17.3 16.2 17.8 16.8 18.5 16.8S19.8 16.2 19.7 15.6Z' />
      </svg>
    </button>
    <button class='item' @click='seekBookmark()' :disabled='!state.bookmark' title='seek bookmark'>
      <!-- bookmark seek icon -->
      <svg style='width: 24px; height: 24px' viewBox='0 0 24 24'>
        <path fill='currentColor'
          d='M13.09 20C13.21 20.72 13.46 21.39 13.81 22H6C4.89 22 4 21.11 4 20V4C4 2.9 4.89 2 6 2H18C19.11 2 20 2.9 20 4V13.09C19.67 13.04 19.34 13 19 13C18.66 13 18.33 13.04 18 13.09V4H13V12L10.5 9.75L8 12V4H6V20H13.09M17 16V22L22 19L17 16Z' />
      </svg>
    </button>
    <AudioPeaks overviewElementId='widgetOverview' ref='audioPeaks' :options='options'
      @error='(err) => state.lastErrorMessage = err.message'>
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
      <span v-if='state.lastErrorMessage' class='has-text-danger'>{{state.lastErrorMessage}}</span>
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
