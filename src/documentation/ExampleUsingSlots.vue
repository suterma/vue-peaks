<script setup lang="ts">
import AudioPeaks from './../components/AudioPeaks.vue';
</script>

<template>
  <h1>Using slots for custom panes</h1>
  <p>
    To provide your own layout, you can also use the
    <a href="https://vuejs.org/guide/components/slots.html#named-slots">named slots</a>
    for the overview, zoomview, audio (default) and controls pane.
  </p>
  <p>This allows you for example to
  <ul>
    <li>layout elements differently</li>
    <li>not render (instead of just not show) elements</li>
    <li>have a completely custom media element</li>
  </ul>
  You can use any of the media element modes with named slots.</p>
  <pre>//TODO</pre>

  <div class="example-display">
    <div id="overviewCustomSlotPane" class="background-hover" style="width: 100%; height: 50px;">
    </div>
    <div><span><small>A small description for the custom overview pane above. Below, the default zoom pane will be
          rendered.</small></span></div>
    <AudioPeaks src="https://suterma.github.io/vue-peaks/lidija_roos-decisions.ogg"
      overviewElementId="overviewCustomSlotPane">
      <template #default>
        <span>In this example, the audio control is not shown, but some custom buttons instead:</span>&nbsp;
        <audio ref="customSlotPaneAudio">
          <source src="https://suterma.github.io/vue-peaks/lidija_roos-not_for_sale.mp3" />
        </audio>
        <button @click="($refs.customSlotPaneAudio as HTMLAudioElement).play()">
          Play
        </button>&nbsp;
        <button @click="($refs.customSlotPaneAudio as HTMLAudioElement).pause()">
          Pause
        </button>
      </template>
      <template #controls>
        <template />
      </template>
    </AudioPeaks>
    <span>No controls are shown, by providing an empty template to the named controls slot.</span>
  </div>
</template>
