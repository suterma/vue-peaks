<script setup lang="ts">
import { reactive } from 'vue';
import AudioPeaksWidget from '../components/AudioPeaksWidget.vue';

const state = reactive({ url: '' });

</script>
<template>
  <p>
    This is a showcase for a simple snippets player. This player is available as ready-made component, which you can use
    as-is
    or copy and adapt it to your needs.</p>
  <pre><code>
    import AudioPeaksWidget from '../components/AudioPeaksWidget.vue';
    &lt;div class="example-display"&gt;
    &lt;AudioPeaksWidget src="https://suterma.github.io/vue-peaks/lidija_roos-not_for_sale.mp3"&gt;&lt;/AudioPeaksWidget&gt;
    &lt;/div&gt;
  </code></pre>

  <div class="example-display">
    <input type="url" v-model="state.url" placeholder="Paste an URL to a media file" />
    <AudioPeaksWidget :src="state.url" :key="state.url">
    </AudioPeaksWidget>
  </div>
</template>
<style scoped>
input {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--color-border);
  background: var(--color-background);
  border-radius: 8px;
  padding-left: 1em;
  padding-right: 1em;
  text-align: center;
  line-height: 1.6;
  font-size: 15px;
}

input {
  margin-bottom: 1em;
  width: 100%;
}
</style>
