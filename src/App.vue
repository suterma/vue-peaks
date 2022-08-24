<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";
import BasicPeaks from "./components/BasicPeaks.vue";
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="./assets/peaks-logo.svg"
      width="125"
      height="125"
    />

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

      <BasicPeaks />
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
