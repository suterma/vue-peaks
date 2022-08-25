<script setup lang="ts">
import AudioPeaks from './../components/AudioPeaks.vue';
</script>

<template>
  <h1>A second instance with class styles</h1>
  <p>
    When using more than one component (more than one Peaks.js) instance in the
    same HTML document, a <b>unique id</b> must be set on each instance. This id is
    applied to the panes and the the audio element, respectively, with a prefix.
  </p>
  <pre>
&lt;AudioPeaks id="someSecondInstanceWithAnUniqueIdentifier" /&gt;
...
&lt;style&gt;
.peaks-overview:hover,
.peaks-zoomview:hover {
  background-color: hsla(160, 100%, 37%, 0.2);
}

.peaks-overview,
.peaks-zoomview {
  height: 50px;
}
&lt;/style&gt;  </pre>
  <p>
    When using more than one component (more than one Peaks.js) instance in the
    same HTML document, a <b>unique id</b> must be set on each instance. This id is
    applied to the enclosing div, and respectively to the panes, with a prefix.
  </p>
  <p>
    Each pane (overview, zoomview, audio, controls) has <b>dedicated CSS classes</b> which you can use to customize the
    look
    and feel. Note however, that you can not style the waveforms themselves this way.
  </p>
  <div class="example-display">
    <AudioPeaks src="https://suterma.github.io/vue-peaks/lidija_roos-decisions.ogg"
      id="someSecondInstanceWithAnUniqueIdentifier" />
  </div>
</template>

<style>
#someSecondInstanceWithAnUniqueIdentifier .peaks-overview:hover,
#someSecondInstanceWithAnUniqueIdentifier .peaks-zoomview:hover {
  background-color: hsla(160, 100%, 37%, 0.2);
}

#someSecondInstanceWithAnUniqueIdentifier .peaks-overview,
#someSecondInstanceWithAnUniqueIdentifier .peaks-zoomview {
  height: 50px;
}
</style>
