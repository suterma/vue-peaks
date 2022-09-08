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
    <article>
      <h1>Accessing the peaks.js instance</h1>
      <p>
        In the hosting component, get a reference to the AudioPeaks child component:
      <pre><code>const audioPeaksWidget = ref&lt;InstanceType&lt;typeof AudioPeaks&gt;&gt;()</code></pre>
      Then, you can access the instance and it's methods by using the reference:
      <pre><code>audioPeaksWidget.value?.peaksInstance?.player.play();</code></pre>
      Remember, that the instance is only available only after the child has been mounted and peaks.js has been
      initialized.
      </p>
    </article>

    <article class="example">
      <UsingReactivity />
    </article>
    <article class="example">
      <UsingPeaksConfiguration />
    </article>
    <article class="example">
      <DemoWidget />
    </article>

    <!-- <div style="border:1px solid red;">
    OLD EXAMPLES
    <ExamplesVersion004 />
  </div> -->

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
