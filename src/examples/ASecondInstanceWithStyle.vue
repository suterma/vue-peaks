<script setup lang="ts">
import AudioPeaks from './../components/AudioPeaks.vue';
</script>

<template>
  <h1>A second instance with class styles</h1>
  <pre>
&lt;style&gt;
.style-example .peaks-overview:hover,
.style-example .peaks-zoomview:hover {
  background-color: hsla(160, 100%, 37%, 0.2);
}

.style-example .peaks-overview,
.style-example .peaks-zoomview {
  height: 50px;
  border: 1px dotted;
  border-color: black;
}
&lt;/style&gt;
&lt;div class=&quot;style-example&quot;&gt;
  &lt;AudioPeaks src=&quot;https://suterma.github.io/vue-peaks/lidija_roos-decisions.ogg&quot; /&gt;
&lt;/div&gt;</pre>
  <p>
    Each pane (overview, zoomview, audio, controls) has <b>dedicated CSS classes</b> which you can use to customize the
    look
    and feel. Note however, that you can not style the waveforms themselves this way.
  </p>

  <div class="example-display style-example">
    <AudioPeaks src="https://suterma.github.io/vue-peaks/lidija_roos-decisions.ogg" />
  </div>
</template>

<style>
.style-example .peaks-overview:hover,
.style-example .peaks-zoomview:hover {
  background-color: hsla(160, 100%, 37%, 0.2);
}

.style-example .peaks-overview,
.style-example .peaks-zoomview {
  height: 50px;
  border: 1px dotted;
  border-color: black;
}
</style>
