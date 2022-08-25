<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue';
import TheWelcome from './components/TheWelcome.vue';
import AudioPeaks from './components/AudioPeaks.vue';
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/peaks-logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="vue-peaks" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
  <!-- Examples -->
  <section>
    <article>
      <h1>A basic example</h1>
      <pre>
&lt;AudioPeaks src="lidija_roos-not_for_sale.mp3" /&gt;
      </pre>
      <p>
        By default, the
        <a href="https://github.com/suterma/vue-peaks/blob/main/src/components/AudioPeaks.vue">AudioPeaks Vue
          component</a>
        template has a new audio element, with the given source URL, both panes
        (overview and zoom) are rendered, and their size is 100% width and 250px
        height. A new audio context is created and used.
      </p>
      <AudioPeaks src="lidija_roos-not_for_sale.mp3" />
    </article>

    <article>
      <h1>A second instance</h1>
      <pre>
&lt;AudioPeaks src="lidija_roos-decisions.ogg" id="someUniqueIdentifier" /&gt;
      </pre>
      <p>
        When using more than one component (more than one Peaks.js) instance in
        the same HTML document, a unique id must be set on each instance. This id is applied to
        the panes and the the audio element, respectively, with a prefix.
      </p>
      <AudioPeaks src="lidija_roos-decisions.ogg" id="someUniqueIdentifier" />
    </article>

    <article>
      <h1>Using slots for custom panes</h1>
      <pre>
&lt;AudioPeaks src=&quot;lidija_roos-decisions.ogg&quot;
  id=&quot;customPanes&quot;&gt;
  &lt;template v-slot:overview&gt;
    &lt;div id=&quot;overview-customPanes&quot;
      class=&quot;background-hover&quot;
      style=&quot;width: 100%; height: 50px;&quot;
      ref=&quot;overview&quot;&gt;&lt;/div&gt;
  &lt;/template&gt;
  &lt;template v-slot:zoomview&gt;
    &lt;div&gt;No zoomview is used here&lt;/div&gt;
  &lt;/template&gt;
  &lt;template v-slot:audio&gt;
    &lt;span&gt;In this example, the audio control is not shown, but some custom buttons instead:&lt;/span&gt;&amp;nbsp;
    &lt;audio id=&quot;audio-customPanes&quot;
      ref=&quot;customPanesAudio&quot;&gt;
      &lt;source src=&quot;lidija_roos-not_for_sale.mp3&quot; /&gt;
    &lt;/audio&gt;
    &lt;button @click=&quot;(this.$refs.customPanesAudio as HTMLAudioElement).play()&quot;&gt;
      Play
    &lt;/button&gt;&amp;nbsp;
    &lt;button @click=&quot;(this.$refs.customPanesAudio as HTMLAudioElement).pause()&quot;&gt;
      Pause
    &lt;/button&gt;
  &lt;/template&gt;
  &lt;template v-slot:controls&gt;
    &lt;div&gt;No zoom controls here!&lt;/div&gt;
  &lt;/template&gt;
&lt;/AudioPeaks&gt;
      </pre>
      <p>
        To provide your own layout, you can also use the
        <a href="https://github.com/suterma/vue-peaks/blob/main/src/components/AudioPeaks.vue">named slots</a>
        for the overview, zoomview, audio and controls pane.
      </p>
      <p>This allows you for example to
      <ul>
        <li> style elements differently</li>
        <li> not show elements</li>
        <li>have a completely custom audio (or even video) element</li>
      </ul>
      In any case however, the id values for the overview, zoomview and the audio element must still match. You need to
      specify the appropriate prefix in addition to your chosen id.</p>
      <AudioPeaks src="lidija_roos-decisions.ogg" id="customPanes">
        <template v-slot:overview>
          <div id="overview-customPanes" class="background-hover" style="width: 100%; height: 50px;" ref="overview">
          </div>
        </template>
        <template v-slot:zoomview>
          <div>No zoomview is used here</div>
        </template>
        <template v-slot:audio>
          <span>In this example, the audio control is not shown, but some custom buttons instead:</span>&nbsp;
          <audio id="audio-customPanes" ref="customPanesAudio">
            <source src="lidija_roos-not_for_sale.mp3" />
          </audio>
          <button @click="(this.$refs.customPanesAudio as HTMLAudioElement).play()">
            Play
          </button>&nbsp;
          <button @click="(this.$refs.customPanesAudio as HTMLAudioElement).pause()">
            Pause
          </button>
        </template>
        <template v-slot:controls>
          <div>No zoom controls here!</div>
        </template>
      </AudioPeaks>
    </article>
  </section>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
