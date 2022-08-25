<script setup lang="ts">
import AudioPeaks from './../components/AudioPeaks.vue';
</script>

<template>
  <h1>Basic examples</h1>
  <h3>Using a media source URL ("simple" mode)</h3>
  <p>
    By default, the
    <a href="https://github.com/suterma/vue-peaks/blob/main/src/components/AudioPeaks.vue">AudioPeaks Vue component</a>
    template has a new audio element, with the given source URL, both panes
    (overview and zoom) are rendered with a default size. A new audio context is created and used to compute the
    waveform.
  </p>
  <pre>
&lt;AudioPeaks src="lidija_roos-not_for_sale.mp3" /&gt;</pre>
  <div class="example-display">
    <AudioPeaks src="lidija_roos-not_for_sale.mp3" />
  </div>

  <h3>Alternative with enclosed media element ("slot" mode)</h3>
  <p>
    To provide your own media element, just place it inside the AudioPeaks element (a.k.a. the slot). Vue-peaks will use
    the first audio element in the slot. A new audio context is created and used to compute the waveform.
  </p>
  <pre>
&lt;AudioPeaks id=&quot;enclosed&quot;&gt;
  &lt;div&gt;
    &lt;span&gt;You can also add additional HTML content.&lt;/span&gt;
    &lt;audio controls style=&quot;width: 100%;&quot;&gt;
      &lt;source src=&quot;lidija_roos-not_for_sale.mp3&quot; /&gt;
    &lt;/audio&gt;
  &lt;/div&gt;
&lt;/AudioPeaks&gt;</pre>
  <div class="example-display">
    <AudioPeaks id="enclosed">
      <div>
        <span>You can also add additional HTML content.</span>
        <audio controls style="width: 100%;">
          <source src="lidija_roos-not_for_sale.mp3" />
        </audio>
      </div>
    </AudioPeaks>
  </div>
  <h3>Using a specified media element ("external" mode)</h3>
  <p>
    If you already have an existing media element, you can link it by it's (unique) id. A new audio context is created
    and used to compute the waveform.
  </p>
  <pre>//TODO</pre>

  <div class="example-display">
    <!-- External media element -->
    <div>
      <span>External media element:</span>
      <audio controls style="width: 100%;" id="mediaElement">
        <source src="lidija_roos-not_for_sale.mp3" />
      </audio>
    </div>
    <AudioPeaks id="external" mediaElementId="mediaElement">
    </AudioPeaks>
  </div>

</template>
