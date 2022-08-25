<script setup lang="ts">
import AudioPeaks from './../components/AudioPeaks.vue';
</script>

<template>
  <h1>A basic example</h1>
  <pre>
&lt;AudioPeaks src="lidija_roos-not_for_sale.mp3" /&gt;
      </pre>
  <p>
    By default, the
    <a href="https://github.com/suterma/vue-peaks/blob/main/src/components/AudioPeaks.vue">AudioPeaks Vue component</a>
    template has a new audio element, with the given source URL, both panes
    (overview and zoom) are rendered, and their size is 100% width and 250px
    height. A new audio context is created and used.
  </p>
  <div class="example-display">
    <AudioPeaks src="lidija_roos-not_for_sale.mp3" />
  </div>
</template>
