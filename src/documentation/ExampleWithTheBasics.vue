<script setup lang="ts">
import AudioPeaks from './../components/AudioPeaks.vue';
</script>

<template>
  <p>vue-peaks provides two modes of operation:
  <ul>
    <li>Slot mode: the media element and additional areas are provided using named slots</li>
    <li>External mode: the media element and additional areas are referenced by id or HTML element references</li>
  </ul>
  </p>
  <h3>Just using a media source URL ("simple" mode)</h3>
  <p>
    By default, the
    <a href="https://github.com/suterma/vue-peaks/blob/main/src/components/AudioPeaks.vue">AudioPeaks Vue component</a>
    template has a new audio element, with the given source URL, and both view panes
    (overview and zoom, which are rendered with a default size) and a controls pane. A new audio context is created and
    used to compute the
    waveform.
  </p>
  <pre>
&lt;AudioPeaks src="lidija_roos-not_for_sale.mp3" /&gt;</pre>
  <div class="example-display">
    <AudioPeaks src="https://suterma.github.io/vue-peaks/lidija_roos-not_for_sale.mp3" />
  </div>

  <h3>Providing a media element ("slot" mode)</h3>
  <p>
    To provide your own media element, just place it inside the AudioPeaks element (a.k.a. the slot). Vue-peaks will use
    the first audio element in the slot. A new audio context is created and used to compute the waveform.
  </p>
  <pre>
&lt;AudioPeaks&gt;
  &lt;span&gt;You can also add additional HTML content.&lt;/span&gt;
  &lt;audio controls style=&quot;width: 100%;&quot;&gt;
    &lt;source src=&quot;https://suterma.github.io/vue-peaks/lidija_roos-not_for_sale.mp3&quot; /&gt;
  &lt;/audio&gt;
&lt;/AudioPeaks&gt;  </pre>
  <div class="example-display">
    <AudioPeaks>
      <span>You can also add additional HTML content.</span>
      <audio controls style="width: 100%;">
        <source src="https://suterma.github.io/vue-peaks/lidija_roos-not_for_sale.mp3" />
      </audio>
    </AudioPeaks>
  </div>
  <h3>Using a specified media element ("external" mode)</h3>
  <p>
    If you already have an existing media element, you can reference it by it's (unique) id, or as an HTMLMediaElement
    object. A new audio context is
    created and used to compute the waveform.
  </p>
  <pre>
&lt;audio controls id=&quot;externalMediaElement&quot;&gt;
  &lt;source src=&quot;https://suterma.github.io/vue-peaks/lidija_roos-not_for_sale.mp3&quot; /&gt;
&lt;/audio&gt;
&lt;div&gt;Using the external media element above&lt;/div&gt;
&lt;AudioPeaks mediaElementId=&quot;externalMediaElement&quot;&gt;
&lt;/AudioPeaks&gt;  </pre>
  <div class="example-display">
    <audio controls id="externalMediaElement">
      <source src="https://suterma.github.io/vue-peaks/lidija_roos-not_for_sale.mp3" />
    </audio>
    <div>Using the external media element above</div>
    <AudioPeaks mediaElementId="externalMediaElement">
    </AudioPeaks>
  </div>
</template>
