<script setup lang="ts">
import type { PeaksOptions } from 'peaks.js';
import { nextTick, reactive, watch } from 'vue';
import AudioPeaks from './../components/AudioPeaks.vue';

const state = reactive({
  isRendered: true,
  mediaSource: "https://suterma.github.io/vue-peaks/lidija_roos-not_for_sale.mp3"
}) 

 
</script>
  
  <template>
  <h1>Using reactivity</h1>
  <pre>
          //TODO
        </pre>
  <p>
    AudioPeaks currently does not support reactivity internally. Still, you can use Vue's reactivity on the component
    itself. How to:
  </p>
  <p>
  <ul>
    <li>Conditionally render the component (by using Vue's built-in
      <span class="code">v-if</span> directive). This also releases memory used.
    </li>
    <li>Replace the media source, causing a recreation of the waveform by using the key-changing technique</li>
  </ul>
  </p>
  <div class="example-display">
    <div>
      <label> Use a button to create and destroy an AudioPeaks instance:
        <button @click="state.isRendered = !state.isRendered">
          <span v-if="state.isRendered">Destroy</span>
          <span v-else>Render</span>
        </button>
      </label>
    </div>
    <div>
      <label> Use a menu to change the media URL, with automatic re-rendering of the component.
        <select v-model="state.mediaSource">
          <option value="https://suterma.github.io/vue-peaks/lidija_roos-not_for_sale.mp3">An MP3 music file</option>
          <option value="https://suterma.github.io/vue-peaks/lidija_roos-decisions.ogg">An OGG music file</option>
          <option value="https://media.grc.com/sn/sn-886-lq.mp3">Security Now! Podcast, Episode #886: Wacky Data
            Exfiltration, 112 min, 13MB MP3 (16kbps)</option>
          <option value="https://pdst.fm/e/cdn.twit.tv/audio/sn/sn0886/sn0886.mp3">Security Now! Podcast, Episode #886:
            Wacky Data
            Exfiltration, 112 min, 55.5MB MP3</option>
          <option value="">none</option>
        </select>
      </label>
    </div>
    <AudioPeaks v-if="state.isRendered && state.mediaSource" :key="state.mediaSource">
      <audio controls :src="state.mediaSource"></audio>
    </AudioPeaks>

  </div>
</template>
  