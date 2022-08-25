<script setup lang="ts">
import AudioPeaks from './../components/AudioPeaks.vue';
</script>

<template>
  <h1>A second instance with class styles</h1>
  <pre>
&lt;AudioPeaks src="lidija_roos-decisions.ogg" id="someUniqueIdentifier" /&gt;
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
&lt;/style&gt;
  </pre>
  <p>
    When using more than one component (more than one Peaks.js) instance in the
    same HTML document, a <b>unique id</b> must be set on each instance. This id is
    applied to the panes and the the audio element, respectively, with a prefix.
  </p>
  <p>
    Each pane (overview, zoomview, audio, controls) has <b>dedicated CSS classes</b> which you can use to customize the
    look
    and feel. Note however, that you can not style the waveforms themselves this way.
  </p>
  <div class="example-display">
    <div id="audiopeaks-css">
      <AudioPeaks src="lidija_roos-decisions.ogg" id="someUniqueIdentifier" />
    </div>
  </div>
</template>

<style>
#audiopeaks-css .peaks-overview:hover,
#audiopeaks-css .peaks-zoomview:hover {
  background-color: hsla(160, 100%, 37%, 0.2);
}

#audiopeaks-css .peaks-overview,
#audiopeaks-css .peaks-zoomview {
  height: 50px;
}
</style>
