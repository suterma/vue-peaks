<script setup lang="ts">
import type { PeaksOptions } from 'peaks.js';
import { onMounted, reactive, shallowRef, type ShallowRef } from 'vue';
import AudioPeaks from './../components/AudioPeaks.vue';

const overviewCustomConfig = shallowRef(null);
const zoomviewCustomConfig = shallowRef(null);
const audioCustomConfig = shallowRef(null);

const state = reactive({ options: {}, ready: false });

onMounted(() => {
  // state.options = getOptions();
  // console.log("UsingPeaksConfiguration::onMounted:state.options", state.options)

  //$nextTick(() => state.ready = true;)
  state.ready = true;

});

/** Gets the config for the peaks instance
 */
function getOptions(): PeaksOptions {
  const options: PeaksOptions = {
    overview: {
      container: overviewCustomConfig.value,
      waveformColor: 'lightgreen',
      playedWaveformColor: 'darkgreen',
      highlightColor: 'lightsalmon',
      highlightOffset: 0

    },
    zoomview:
    {
      container: zoomviewCustomConfig.value,
      waveformColor: 'lightsalmon',
      playedWaveformColor: 'darkorange'
    },
    // containers: {
    //   zoomview: zoomviewCustomConfig.value,
    //   overview: overviewCustomConfig.value,

    // },
    //overviewWaveformColor: 'orange',
    //zoomWaveformColor: 'orange',
    // overviewHighlightColor: 'purple',
    // zoomWaveformColor: 'green',
    // overviewWaveformColor: 'blue',
    axisLabelColor: 'black',
    mediaElement: audioCustomConfig.value as unknown as HTMLMediaElement | undefined,
    webAudio: { audioContext: new AudioContext() },
    zoomLevels: [1024, 2048, 4096],
    playheadColor: 'red'

  };
  return options;
}

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

    <div ref="overviewCustomConfig" style="width: 100%;height: 50px;"></div>
    <div ref="zoomviewCustomConfig" style="width: 100%;height: 50px;"></div>
    <audio controls ref="audioCustomConfig">
      <source src="https://suterma.github.io/vue-peaks/lidija_roos-not_for_sale.mp3" />
    </audio>
    <AudioPeaks :options="getOptions()" v-if="state.ready">
      <!-- <template #default>
        <audio ref=" customPanesAudio">
          <source controls src="https://suterma.github.io/vue-peaks/lidija_roos-not_for_sale.mp3" />
        </audio>
      </template>
      <template #controls>
        <div>No zoom controls here!</div>
      </template> -->
    </AudioPeaks>
  </div>
</template>
