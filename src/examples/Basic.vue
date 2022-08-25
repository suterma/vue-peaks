<script setup lang="ts">
import AudioPeaks from './../components/AudioPeaks.vue';
</script>

<template>
  <h1>A basic example</h1>
  <pre>
&lt;AudioPeaks src="lidija_roos-not_for_sale.mp3" /&gt;
      </pre>
  <p>
    By default, the
    <a href="https://github.com/suterma/vue-peaks/blob/main/src/components/AudioPeaks.vue">AudioPeaks Vue component</a>
    template has a new audio element, with the given source URL, both panes
    (overview and zoom) are rendered, and their size is 100% width and 250px
    height. A new audio context is created and used.
  </p>
  <div class="example-display">
    <AudioPeaks src="lidija_roos-not_for_sale.mp3">
    </AudioPeaks>

    <!-- <AudioPeaks>
      <audio controls>
        <source src="lidija_roos-not_for_sale.mp3" />
      </audio>
    </AudioPeaks> -->
  </div>

  <h3>Alternative with specific media element</h3>
  <pre>
//TODO
      </pre>
  <p>
    You can also provide your own media element. Make sure the id's match, since Peaks.js is using these to link the
    waveform to the media element.
  </p>
  <div class="example-display">
    <AudioPeaks id="dedicatedaudio">
      This audio element's id must match the id of the AudioPeak component.
      <audio controls id="dedicatedaudio">
        <source src="lidija_roos-not_for_sale.mp3" />
      </audio>
    </AudioPeaks>
  </div>
</template>
