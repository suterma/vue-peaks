<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue';
import TheWelcome from './components/TheWelcome.vue';
import Basic from './examples/Basic.vue';
import ASecondInstanceWithStyle from './examples/ASecondInstanceWithStyle.vue';
import UsingSlots from './examples/UsingSlots.vue';
import UsingPeaksConfiguration from './examples/UsingPeaksConfiguration.vue';
import DemoWidget from './examples/DemoWidget.vue';
import UsingReactivity from './examples/UsingReactivity.vue';
import ExamplesVersion004 from './examples/ExamplesVersion004.vue';
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
      <DemoWidget />
    </article>
    <article class="example">
      <UsingReactivity />
    </article>
    <article class="example">
      <UsingPeaksConfiguration />
    </article>
    <hr />
    <article class="example">
      <Basic />
    </article>
    <article class="example">
      <ASecondInstanceWithStyle />
    </article>
    <article class="example">
      <UsingSlots />
    </article>
    <article class="example">
      <UsingPeaksConfiguration />
    </article>
    <article class="example">
      <UsingReactivity />
    </article>
  </section>
  <!-- <div style="border:1px solid red;">
    OLD EXAMPLES
    <ExamplesVersion004 />
  </div> -->
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
