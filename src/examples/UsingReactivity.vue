<script setup lang="ts">
import { reactive } from 'vue';
import AudioPeaks from './../components/AudioPeaks.vue';

const state = reactive({
  isRendered: true,
  mediaSource: "https://suterma.github.io/vue-peaks/lidija_roos-not_for_sale.mp3"
})

function toggleRendering() {
  const currentState = state.isRendered;
  console.log("CurrentState", currentState);
  state.isRendered = !currentState;
}
</script>
  
<template>
  <h1>Using reactivity</h1>
  <p>
    AudioPeaks currently does not support reactivity for the options. Still, you can use Vue's reactivity on the
    component
    itself. You can for example:
  </p>
  <p>
  <ul>
    <li>Conditionally render the component (by using Vue's built-in
      <span class="code">v-if</span> directive). This also releases memory used.
    </li>
    <li>Replace the media source by setting the <span class="code">src</span> attribute of the audio element. When you
      also set the <span class="code">:key</span> property to a new value, the component re-renders. This is called the
      key-changing
      technique</li>
  </ul>
  </p>
  <div class="example-display">
    <div>
      <label>Example button to create and destroy an AudioPeaks instance:
        <button @click="toggleRendering()" class="highlight">
          <span>{{ state.isRendered ? 'Destroy' : 'Render' }}</span>
        </button>
      </label>
    </div>
    <div>
      <label>Example menu to change the media URL, with automatic re-rendering of the component.
        <select v-model="state.mediaSource" class="highlight">
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
    <AudioPeaks v-if="state.isRendered" :key="state.mediaSource">
      <audio controls :src="state.mediaSource"></audio>
    </AudioPeaks>
  </div>
  <pre>
&lt;div&gt;
  &lt;label&gt;Example button to create and destroy an AudioPeaks instance:
    &lt;button @click=&quot;toggleRendering()&quot; class=&quot;highlight&quot;&gt;
      &lt;span&gt;{{ state.isRendered ? 'Destroy' : 'Render' }}&lt;/span&gt;
    &lt;/button&gt;
  &lt;/label&gt;
&lt;/div&gt;
&lt;div&gt;
  &lt;label&gt;Example menu to change the media URL, with automatic re-rendering of the component.
    &lt;select v-model=&quot;state.mediaSource&quot; class=&quot;highlight&quot;&gt;
      &lt;option value=&quot;https://suterma.github.io/vue-peaks/lidija_roos-not_for_sale.mp3&quot;&gt;An MP3 music file&lt;/option&gt;
      &lt;option value=&quot;https://suterma.github.io/vue-peaks/lidija_roos-decisions.ogg&quot;&gt;An OGG music file&lt;/option&gt;
      &lt;option value=&quot;https://media.grc.com/sn/sn-886-lq.mp3&quot;&gt;Security Now! Podcast, Episode #886: Wacky Data
        Exfiltration, 112 min, 13MB MP3 (16kbps)&lt;/option&gt;
      &lt;option value=&quot;https://pdst.fm/e/cdn.twit.tv/audio/sn/sn0886/sn0886.mp3&quot;&gt;Security Now! Podcast, Episode #886:
        Wacky Data
        Exfiltration, 112 min, 55.5MB MP3&lt;/option&gt;
      &lt;option value=&quot;&quot;&gt;none&lt;/option&gt;
    &lt;/select&gt;
  &lt;/label&gt;
&lt;/div&gt;
&lt;AudioPeaks v-if=&quot;state.isRendered&quot; :key=&quot;state.mediaSource&quot;&gt;
  &lt;audio controls :src=&quot;state.mediaSource&quot;&gt;&lt;/audio&gt;
&lt;/AudioPeaks&gt;</pre>
</template>
  