<script setup lang="ts"></script>

<template>
  <div class="columns">
    <div class="column">
      <p>
        Each pane (overview, zoomview, audio/video element, controls) has
        <b> a dedicated CSS class</b> which you can select for your styles. Note
        however, that you can not style the waveforms themselves this way.
      </p>
      <p>The following selectors are available:</p>
    </div>
    <div class="column">
      <highlightjs
        language="css"
        code="div.peaks-overview { 
    /* The div with the overview waveform */ }
div.peaks-zoomview { 
    /* The div with the zoom waveform */ }
div.peaks-controls { 
    /* The div with the zoom controls */ }
audio.peaks { 
    /* The audio element, when provided by vue-peaks 
       (in the 'simple' mode) */ }
video.peaks { 
    /* The video element, when provided by vue-peaks 
       (in the 'simple' mode) */ }"
      />
    </div>
  </div>
</template>
