<script setup lang="ts">
</script>

<template>
  <div class="columns">
    <div class="column">
      <p>
        Each pane (overview, zoomview, audio, controls) has <b> a dedicated CSS class</b> which you can use to select
        for
        your styles. Note however, that you can not style the waveforms themselves this way.
      </p>
      <p>
        The following selectors are available:
      </p>
    </div>
    <div class="column">
      <highlightjs language='css' code="div.peaks-overview { 
    /* The div with the overview waveform */ }
div.peaks-zoomview { 
    /* The div with the zoom waveform */ }
div.peaks-controls { 
    /* The div with the zoom controls */ }
audio.peaks-audio { 
    /* The audio control, when provided by vue-peaks 
       (in the 'simple' mode) */ }" />
    </div>
  </div>

</template>
 