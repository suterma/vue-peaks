<script setup lang="ts">
import AudioPeaksWidget from '../components/AudioPeaksWidget.vue';

</script>
<template>
  <h1>A waveform player widget</h1>
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
    <AudioPeaksWidget style='width:50%' src="https://suterma.github.io/vue-peaks/lidija_roos-not_for_sale.mp3">
    </AudioPeaksWidget>
  </div>
</template>
 