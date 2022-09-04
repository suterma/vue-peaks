<script setup lang="ts">
import AudioPeaks from './../components/AudioPeaks.vue';
</script>

<template>
  <section>
    <article class="example">
      <h1>Basic examples</h1>
      <h3>Using a media source URL ("simple" mode)</h3>
      <p> By default, the <a
          href="https://github.com/suterma/vue-peaks/blob/main/src/components/AudioPeaks.vue">AudioPeaks Vue
          component</a> template has a new audio element, with the given source URL, both panes (overview and zoom) are
        rendered with a default size. A new audio context is created and used to compute the waveform. </p>
      <pre>&lt;AudioPeaks src="lidija_roos-not_for_sale.mp3" /&gt;</pre>
      <div class="example-display">
        <AudioPeaks src="lidija_roos-not_for_sale.mp3" />
      </div>
      <h3>Alternative with enclosed media element ("slot" mode)</h3>
      <p> To provide your own media element, just place it inside the AudioPeaks element (a.k.a. the slot). Vue-peaks
        will use the first audio element in the slot. A new audio context is created and used to compute the waveform.
      </p>
      <pre>&lt;AudioPeaks id="enclosed"&gt;
  &lt;div&gt;
    &lt;span&gt;You can also add additional HTML content.&lt;/span&gt;
    &lt;audio controls style="width: 100%;"&gt;
      &lt;source src="lidija_roos-not_for_sale.mp3" /&gt;
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
      <p> If you already have an existing media element, you can link it by it's (unique) id. A new audio context is
        created and used to compute the waveform. </p>
      <pre>&lt;div&gt;
  &lt;span&gt;External media element:&lt;/span&gt;
  &lt;audio controls style="width: 100%;" id="mediaElement"&gt;
    &lt;source src="lidija_roos-not_for_sale.mp3" /&gt;
  &lt;/audio&gt;
&lt;/div&gt;
&lt;AudioPeaks id="external" mediaElementId="mediaElement"&gt;
&lt;/AudioPeaks&gt;  </pre>
      <div class="example-display">
        <div>
          <span>External media element:</span>
          <audio controls style="width: 100%;" id="mediaElement">
            <source src="lidija_roos-not_for_sale.mp3" />
          </audio>
        </div>
        <AudioPeaks id="external" mediaElementId="mediaElement">
        </AudioPeaks>
      </div>
    </article>
    <article class="example">
      <h1>A second instance with class styles</h1>
      <p> When using more than one component (more than one Peaks.js) instance in the same HTML document, a <b>unique
          id</b> must be set on each instance. This id is applied to the panes and the the audio element, respectively,
        with a prefix. </p>
      <pre>&lt;AudioPeaks id="someSecondInstanceWithAnUniqueIdentifier" src="lidija_roos-not_for_sale.mp3" /&gt;
...
&lt;style&gt;
.peaks-overview:hover,
.peaks-zoomview:hover {
  background-color: hsla(160, 100%, 37%, 0.2);
}

.peaks-overview,
.peaks-zoomview {
  height: 50px;
  width: 25%;
}
&lt;/style&gt;  </pre>
      <p> When using more than one component (more than one Peaks.js) instance in the same HTML document, a <b>unique
          id</b> must be set on each instance. This id is applied to the enclosing div, and respectively to the panes,
        with a prefix. </p>
      <p> Each pane (overview, zoomview, audio, controls) has <b>dedicated CSS classes</b> which you can use to
        customize the look and feel. Note however, that you can not style the waveforms themselves this way. </p>
      <div class="example-display">
        <div id="someExternalUniqueIdentifier">
          <AudioPeaks id="someSecondInstanceWithAnUniqueIdentifier" src="lidija_roos-not_for_sale.mp3" />
        </div>
      </div>
    </article>
    <article class="example">
      <h1>Using slots for custom panes</h1>
      <p> To provide your own layout, you can also use the <a
          href="https://github.com/suterma/vue-peaks/blob/main/src/components/AudioPeaks.vue">named slots</a> for the
        overview, zoomview, audio (default) and controls pane. </p>
      <p>This allows you for example to
      <ul>
        <li>layout elements differently</li>
        <li>not render (instead of just not show) elements</li>
        <li>have a completely custom audio (or even video) element</li>
      </ul> In any case however, the id values for the overview and zoomview must match. You need to specify the
      appropriate prefix in addition to your chosen id. You can use any of the audio element modes with named slots.</p>
      <pre>&lt;AudioPeaks src="lidija_roos-decisions.ogg"
  id="customPanes"&gt;
  &lt;template #overview&gt;
    &lt;div id="overview-customPanes"
      class="background-hover"
      style="width: 100%; height: 50px;"
      ref="overview"&gt;&lt;/div&gt;
  &lt;/template&gt;
  &lt;template #zoomview&gt;
    &lt;div&gt;No zoomview is used here&lt;/div&gt;
  &lt;/template&gt;
  &lt;template #default&gt;
    &lt;span&gt;In this example, the audio control is not shown, but some custom buttons instead:&lt;/span&gt;&amp;nbsp;
    &lt;audio id="audio-customPanes"
      ref="customPanesAudio"&gt;
      &lt;source src="lidija_roos-not_for_sale.mp3" /&gt;
    &lt;/audio&gt;
    &lt;button @click="($refs.customPanesAudio as HTMLAudioElement).play()"&gt;
      Play
    &lt;/button&gt;&amp;nbsp;
    &lt;button @click="($refs.customPanesAudio as HTMLAudioElement).pause()"&gt;
      Pause
    &lt;/button&gt;
  &lt;/template&gt;
  &lt;template #controls&gt;
    &lt;div&gt;No zoom controls here!&lt;/div&gt;
  &lt;/template&gt;
&lt;/AudioPeaks&gt;
      </pre>
      <div class="example-display">
        <AudioPeaks src="lidija_roos-decisions.ogg" id="customPanes">
          <template #overview>
            <div id="overview-customPanes" class="background-hover" style="width: 100%; height: 50px;" ref="overview">
            </div>
          </template>
          <template #zoomview>
            <!-- NOTE: This template will be "peakified" because it's a div, and the first div will be used as the zoomview
            element. -->
            <div>No zoomview is used here</div>
          </template>
          <template #default>
            <span>In this example, the audio control is not shown, but some custom buttons instead:</span>&nbsp;
            <audio id="audio-customPanes" ref="customPanesAudio">
              <source src="lidija_roos-not_for_sale.mp3" />
            </audio>
            <button @click="($refs.customPanesAudio as HTMLAudioElement).play()">
              Play
            </button>&nbsp;
            <button @click="($refs.customPanesAudio as HTMLAudioElement).pause()">
              Pause
            </button>
          </template>
          <template #controls>
            <div>No zoom controls here!</div>
          </template>
        </AudioPeaks>
      </div>
    </article>
  </section>
</template>


<style>
#someExternalUniqueIdentifier .peaks-overview:hover,
#someExternalUniqueIdentifier .peaks-zoomview:hover {
  background-color: hsla(160, 100%, 37%, 0.2);
}

#someExternalUniqueIdentifier .peaks-overview,
#someExternalUniqueIdentifier .peaks-zoomview {
  height: 50px;
  width: 25%;
}
</style>  