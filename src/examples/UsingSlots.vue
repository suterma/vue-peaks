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
    <li>have a completely custom audio (or even video) element</li>
  </ul>
  In any case however, the id values for the overview and zoomview must match. You need to specify the appropriate
  prefix in addition to your chosen id. You can use any of the audio element modes with named slots.</p>
  <pre>
&lt;div id=&quot;overviewcustompane&quot; class=&quot;background-hover&quot; style=&quot;width: 100%; height: 50px;&quot; ref=&quot;overview&quot;&gt;
&lt;/div&gt;
&lt;div&gt;&lt;span&gt;&lt;small&gt;A small description for the custom overview pane above. Below, the default zoom page will be
	  rendered.&lt;/small&gt;&lt;/span&gt;&lt;/div&gt;
&lt;AudioPeaks src=&quot;https://suterma.github.io/vue-peaks/lidija_roos-decisions.ogg&quot;
  overviewElementId=&quot;overviewcustompane&quot;&gt;
  &lt;template #default&gt;
	&lt;span&gt;In this example, the audio control is not shown, but some custom buttons instead:&lt;/span&gt;&amp;nbsp;
	&lt;audio ref=&quot;customPanesAudio&quot;&gt;
	  &lt;source src=&quot;https://suterma.github.io/vue-peaks/lidija_roos-not_for_sale.mp3&quot; /&gt;
	&lt;/audio&gt;
	&lt;button @click=&quot;($refs.customPanesAudio as HTMLAudioElement).play()&quot;&gt;
	  Play
	&lt;/button&gt;&amp;nbsp;
	&lt;button @click=&quot;($refs.customPanesAudio as HTMLAudioElement).pause()&quot;&gt;
	  Pause
	&lt;/button&gt;
  &lt;/template&gt;
  &lt;template #controls&gt;
	&lt;div&gt;No zoom controls here!&lt;/div&gt;
  &lt;/template&gt;
&lt;/AudioPeaks&gt;      </pre>

  <div class="example-display">
    <div id="overviewcustompane" class="background-hover" style="width: 100%; height: 50px;" ref="overview">
    </div>
    <div><span><small>A small description for the custom overview pane above. Below, the default zoom page will be
          rendered.</small></span></div>
    <AudioPeaks src="https://suterma.github.io/vue-peaks/lidija_roos-decisions.ogg"
      overviewElementId="overviewcustompane">
      <template #default>
        <span>In this example, the audio control is not shown, but some custom buttons instead:</span>&nbsp;
        <audio ref="customPanesAudio">
          <source src="https://suterma.github.io/vue-peaks/lidija_roos-not_for_sale.mp3" />
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
</template>
