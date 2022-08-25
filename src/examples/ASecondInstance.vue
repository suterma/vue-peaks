<script setup lang="ts">
import AudioPeaks from './../components/AudioPeaks.vue';
</script>

<template>
  <h1>A second instance</h1>
  <pre>
&lt;AudioPeaks src="lidija_roos-decisions.ogg" id="someUniqueIdentifier" /&gt;
      </pre
  >
  <p>
    When using more than one component (more than one Peaks.js) instance in the
    same HTML document, a unique id must be set on each instance. This id is
    applied to the panes and the the audio element, respectively, with a prefix.
  </p>
  <AudioPeaks
    src="lidija_roos-decisions.ogg"
    id="someUniqueIdentifier"
  />
</template>
