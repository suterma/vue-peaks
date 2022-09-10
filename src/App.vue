<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue';
import TheWelcome from './components/TheWelcome.vue';
import ExampleWithStyle from './documentation/ExampleWithStyle.vue';
import ExampleWithTheBasics from './documentation/ExampleWithTheBasics.vue';
import ExampleUsingPeaksOptions from './documentation/ExampleUsingPeaksOptions.vue';
import DemoWidget from './documentation/DemoWidget.vue';
import AccessingThePeaksInstance from './documentation/AccessingThePeaksInstance.vue';
import ExampleUsingReactivity from './documentation/ExampleUsingReactivity.vue';
import ExampleUsingSlots from './documentation/ExampleUsingSlots.vue';
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
    <article class="example">
      <ExampleWithTheBasics />
    </article>
    <article class="example">
      <ExampleWithStyle />
    </article>
    <article class="example">
      <ExampleUsingSlots />
    </article>
    <article class="example">
      <ExampleUsingPeaksOptions />
    </article>
    <article>
      <AccessingThePeaksInstance />
    </article>

    <article class="example">
      <ExampleUsingReactivity />
    </article>
    <article class="example">
      <ExampleUsingPeaksOptions />
    </article>
    <article class="example">
      <DemoWidget />
    </article>
    <hr />
    <div>
      <p><a href="https://github.com/suterma/vue-peaks">vue-peaks</a> is created with love
        by <a href="https://marcelsuter.ch">Marcel Suter</a> for the <a href="http://replayer.app">Replayer</a> project.
      </p>
    </div>
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
