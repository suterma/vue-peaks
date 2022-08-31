<script setup lang="ts">
import AudioPeaks from './../components/AudioPeaks.vue';
</script>

<template>
  <h1>A second instance with class styles</h1>
  <pre>
//TODO</pre>
  <p>
    Each pane (overview, zoomview, audio, controls) has <b>dedicated CSS classes</b> which you can use to customize the
    look
    and feel. Note however, that you can not style the waveforms themselves this way.
  </p>
  <div class="style-example">
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
  /* padding: 10px; */
  /* margin: 10px; */
  height: 50px;
  border: 1px dotted;
  border-color: black;
}
</style>
