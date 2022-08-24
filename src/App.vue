<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";
import AudioPeaks from "./components/AudioPeaks.vue";
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
      <p>By default, a new audio element and audio context is created for the given source URL, both panes (overview and
        zoom) are shown, and their size is 100% width and 250px height.
      </p>
      <AudioPeaks src="lidija_roos-not_for_sale.mp3" />
    </article>

    <article>
      <h1>Another example</h1>
      <pre>
&lt;AudioPeaks src="lidija_roos-decisions.ogg" id="someIdentifier" /&gt;
      </pre>
      <p>when using more than one audio.js component instance in the same HTML document, a unique id must be set.
      </p>
      <AudioPeaks src="lidija_roos-decisions.ogg" id="someIdentifier" />
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
