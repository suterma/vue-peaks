<script setup lang="ts">
import ExampleWithStyle from './documentation/ExampleWithStyle.vue';
import ExampleWithTheBasics from './documentation/ExampleWithTheBasics.vue';
import ExampleUsingPeaksOptions from './documentation/ExampleUsingPeaksOptions.vue';
import DemoWidget from './documentation/DemoWidget.vue';
import AccessingThePeaksInstance from './documentation/AccessingThePeaksInstance.vue';
import ExampleUsingReactivity from './documentation/ExampleUsingReactivity.vue';
import ExampleUsingSlots from './documentation/ExampleUsingSlots.vue';
import Introduction from './documentation/Introduction.vue';
import Credits from './documentation/Credits.vue';
import AvailableProperties from './documentation/AvailableProperties.vue';
</script>
  
<template>
  <section class="hero is-light">
    <div class="hero-body has-text-centered	">

      <img alt="Vue logo" class="logo" src="./assets/peaks-logo.svg" width="125" height="125" />

      <h1 class="title is-1">vue-peaks</h1>
      <h2 class="subtitle is-3">
        A lightweight Vue wrapper around the <a target="_blank" href="https://github.com/bbc/peaks.js/">bbc/peaks.js</a>
        audio waveform UI component.
      </h2>
    </div>
  </section>

  <section class="section">
    <div class="no-container">
      <div class="columns">
        <div class="column is-2">
          <aside class="is-medium menu">
            <p class="menu-label">
              Topics
            </p>
            <ul class="menu-list">
              <li><a href="#basic-examples">
                  Basic examples</a></li>
              <li><a href="#available-properties">
                  Properties</a></li>
              <li><a href="#setting-styles">Setting styles</a></li>
              <li><a href="#using-slots">Using slots</a></li>
              <li><a href="#using-options">Options</a></li>
              <li><a href="#accessing-instance">Accessing the instance</a></li>
              <li><a href="#using-reactivity">Using reactivity</a></li>
              <li><a href="#player-widget">A widget</a></li>
              <li><a href="#credits">Credits</a></li>
            </ul>
          </aside>
        </div>
        <div class="column is-10">
          <div class="content">

            <!-- <h3 id="introduction" class="title is-3">Introduction</h3> -->
            <article class="example">
              <Introduction />
            </article>

            <h3 id="basic-examples" class="title is-3">Basic examples</h3>
            <article class="example">
              <ExampleWithTheBasics />
            </article>

            <h3 id="available-properties" class="title is-3">Available properties</h3>
            <article class="example">
              <AvailableProperties />
            </article>

            <h3 id="setting-styles" class="title is-3">Setting styles</h3>
            <article class="example">
              <ExampleWithStyle />
            </article>

            <h3 id="using-slots" class="title is-3">Using slots for custom views</h3>
            <article class="example">
              <ExampleUsingSlots />
            </article>

            <h3 id="using-options" class="title is-3">Using peaks.js configuration options
            </h3>
            <article class="example">
              <ExampleUsingPeaksOptions />
            </article>

            <h3 id="accessing-instance" class="title is-3"> Accessing the peaks.js instance
            </h3>
            <article>
              <AccessingThePeaksInstance />
            </article>


            <h3 id="using-reactivity" class="title is-3">Using reactivity</h3>
            <article class="example">
              <ExampleUsingReactivity />
            </article>

            <h3 id="player-widget" class="title is-3">A waveform player widget</h3>
            <article class="example">
              <DemoWidget />
            </article>

            <h3 id="credits" class="title is-3">Credits</h3>
            <article class="example">
              <Credits />
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>

  <footer class="footer">
    <section class="section">
      <div class="container has-text-centered">
        <p><a href="https://github.com/suterma/vue-peaks">vue-peaks</a> is created with love
          by <a href="https://marcelsuter.ch">Marcel Suter</a> for the <a href="http://replayer.app">Replayer</a>
          project.
        </p>
      </div>
    </section>
  </footer>

</template>
  
<style scoped>
.logo {
  display: block;
  margin: 0 auto 2rem;
}
</style>
  