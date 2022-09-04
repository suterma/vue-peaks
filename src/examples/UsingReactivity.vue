<script setup lang="ts">
import type { PeaksOptions } from 'peaks.js';
import { reactive } from 'vue';
import AudioPeaks from './../components/AudioPeaks.vue';

const state = reactive({
  isRendered: true,
  mediaSource: ""
})
 
</script>
  
  <template>
  <h1>Using reactivity</h1>
  <pre>
          //TODO
        </pre>
  <p>
    AudioPeaks supports basic reactivity. Currently the following aspects are reactive:
  </p>
  <p>
  <ul>
    <li>Conditional Rendering of the component (by using Vue's built-in
      <span class="code">v-if</span> directive. This also releases memory used.
    </li>
    <li>Replace the media source, causing a recreation of the waveform by property binding</li>
  </ul>
  </p>
  <div class="example-display">
    <button @click="state.isRendered = !state.isRendered">
      <span v-if="state.isRendered">Destroy</span>
      <span v-else>Render</span>
    </button>
    //TODO
    <select v-model="state.mediaSource">
      <option value="https://suterma.github.io/vue-peaks/lidija_roos-not_for_sale.mp3">An MP3 music file</option>
      <option value="https://suterma.github.io/vue-peaks/lidija_roos-decisions.ogg">An OGG music file</option>
      <option value="3">An PM* fle</option>
      <option value="4">A very long podcast (MP3)</option>
    </select>
    <AudioPeaks v-if="state.isRendered">
      <audio controls :src="state.mediaSource"></audio>
    </AudioPeaks>
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
  