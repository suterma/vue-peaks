<script setup lang="ts">
import AudioPeaks from './../components/AudioPeaks.vue';
</script>

<template>
  <div class="columns is-desktop">
    <div class="column">
      <p>
        To provide your own layout, you can also use the
        <a href="https://vuejs.org/guide/components/slots.html#named-slots">named slots</a>:

        <li><span class="code">#overview</span></li>
        <li><span class="code">#zoomview</span></li>
        <li><span class="code">#audio</span> (default)</li>
        <li><span class="code">#controls</span></li>
      </p>
      <p>This allows you for example to
      <ul>
        <li>layout elements differently</li>
        <li>not render (instead of just not show) elements</li>
        <li>have a completely custom media element</li>
      </ul>
      You can use any of the media element modes with named slots. Use <span class="code">$refs</span> to access the
      relevant HTML elements.</p>
      <p>You can use a different mode for each slot, thus mixing the "slot" mode with the "external" mode in the same
        component instance.</p>
    </div>
    <div class="column">
      <highlightjs language='vue-template' code="<AudioPeaks>
  <template #overview>
    <div style='height: 50px;'></div>
    <span class='tag is-danger'>
      Some slot content here.</span>
  </template>
  <template #default>
    <span class='tag is-danger is-multiline'>
      In this example, the audio control is not shown,
      but some custom
      buttons instead:</span>
    <audio ref='audio'>
      <source src='https://domain/file.mp3' />
    </audio>
    <button @click='($refs.audio as HTMLAudioElement).play()'>
      Play
    </button>&nbsp;
    <button @click='($refs.audio as HTMLAudioElement).pause()'>
      Pause
    </button>
  </template>
  <template #controls>
    <template />
  </template>
</AudioPeaks>
<span class='tag is-danger is-multiline'>
  No zoom controls are shown, by providing an empty template
  to the named controls slot.</span>" />
    </div>
    <div class="column is-narrow" style='max-width: 400px'>
      <div class="box">
        <AudioPeaks>
          <template #overview>
            <div style='height: 50px;'></div>
            <span class='tag is-danger'>
              Some slot content here.</span>
          </template>
          <template #default>
            <span class='tag is-danger is-multiline'>
              In this example, the audio control is not shown,
              but some custom
              buttons instead:</span>
            <audio ref='audio'>
              <source src='https://suterma.github.io/vue-peaks/lidija_roos-not_for_sale.mp3' />
            </audio>
            <button @click='($refs.audio as HTMLAudioElement).play()'>
              Play
            </button>&nbsp;
            <button @click='($refs.audio as HTMLAudioElement).pause()'>
              Pause
            </button>
          </template>
          <template #controls>
            <template />
          </template>
        </AudioPeaks>
        <span class='tag is-danger is-multiline'>
          No zoom controls are shown, by providing an empty template
          to the named controls slot.</span>
      </div>
    </div>
  </div>
</template>
