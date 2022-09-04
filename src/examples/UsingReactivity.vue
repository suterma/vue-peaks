<script setup lang="ts">
import type { PeaksOptions } from 'peaks.js';
import { reactive } from 'vue';
import AudioPeaks from './../components/AudioPeaks.vue';

const state = reactive({
  isCreated: true,
})

/** The configuration options 
 * @remarks The default colors are taken from the Bulma default color scheme.
 */
const options = reactive<PeaksOptions>({
  overview: {
    /* container is provided and handled internally by AudioPeaks */
    waveformColor: 'hsl(204, 86%, 53%)',
    playedWaveformColor: 'hsl(204, 71%, 39%)',
    highlightColor: 'hsl(206, 70%, 96%)',
    highlightOffset: 0,
    axisGridlineColor: 'hsl(0, 0%, 29%)',
    axisLabelColor: 'hsl(0, 0%, 29%)',
  },
  zoomview: {
    /* container is provided and handled internally by AudioPeaks */
    waveformColor: 'hsl(48, 71%, 48%)',
    playedWaveformColor: 'hsl(48, 53%, 31%)',
    axisGridlineColor: 'hsl(0, 0%, 29%)',
    axisLabelColor: 'hsl(0, 0%, 29%)',
  },
  /* mediaElement is provided and handled internally by AudioPeaks */
  webAudio: { audioContext: new AudioContext() },
  zoomLevels: [8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096],
  playheadColor: 'hsl(348, 100%, 61%)'
}
);

</script>
  
  <template>
  <h1>Using reactivity</h1>
  <pre>
          //TODO
        </pre>
  <p>
    To fully customize the appearance and behavior, the Peaks.js <a
      href="https://github.com/bbc/peaks.js#Configuration">configuration options</a> can be provided, alongside the
    matching HTML elements.
  </p>
  <p>This allows you for example to
  <ul>
    <li>customize the waveform styles</li>
    <li>define scrolling behavior</li>
  </ul>
  </p>
  <div class="example-display">
    <AudioPeaks :options="options" v-if="state.isCreated">
      <audio controls>
        <source src="https://suterma.github.io/vue-peaks/lidija_roos-not_for_sale.mp3" />
      </audio>
    </AudioPeaks>
    <button @click="state.isCreated = !state.isCreated">
      <span v-if="state.isCreated">Destroy</span>
      <span v-else>Create</span>
    </button>
    <p>Choose overview waveform color (not yet working):</p>
    <div>
      <input type="color" id="head" value="#e66465">
      <label for="head">Played</label>
    </div>
    <div>
      <input type="color" id="body">
      <label for="body">Ahead</label>
    </div>
  </div>
</template>
  