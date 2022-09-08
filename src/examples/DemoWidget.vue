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
    <AudioPeaksWidget src="https://suterma.github.io/vue-peaks/lidija_roos-not_for_sale.mp3"></AudioPeaksWidget>
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