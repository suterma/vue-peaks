<script setup lang="ts"></script>

<template>
  <div class="columns">
    <div class="column">
      <p>
        The <span class="code">AudioPeaks</span> component has it's own CSS
        class, plus each generated pane (overview, zoomview, audio/video
        element, controls) has a dedicated CSS class which you can select for
        your styles. Note however, that you can not style the waveforms
        themselves this way.
      </p>
      <p>The following selectors are available:</p>
    </div>
    <div class="column">
      <highlightjs
        language="css"
        code="div.peaks { 
    /* The div with the whole AudioPeaks component */ }
div.peaks-overview { 
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
