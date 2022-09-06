<script setup lang="ts">
import { computed, reactive, ref, shallowRef } from 'vue';
import AudioPeaks from './../components/AudioPeaks.vue';

const audio = shallowRef<HTMLAudioElement | null>(null)

// a computed ref
const isPlaying = computed(() => {
  return audio?.value?.duration > 0 ? true : false;
})

//const state = reactive({ paused: ($refs.slotAudio as HTMLAudioElement).paused });
</script>

<template>
  <h1>A simple waveform widget</h1>
  <p>
    A use case for a snippets player</p>
  <pre>
//TODO</pre>


  <div class="example-display">

    {{ isPlaying ? 'Play' : 'Pause' }}


    <button @click="audio?.play()">
      Play
    </button>&nbsp;
    <button @click="audio?.pause()">
      Pause
    </button>
    <div id="overviewWidget">
    </div>
    <AudioPeaks src="https://suterma.github.io/vue-peaks/lidija_roos-decisions.ogg" overviewElementId="overviewWidget">
      <template #zoomview>
        <template />
      </template>
      <template #default>
        <audio ref="audio">
          <source src="https://suterma.github.io/vue-peaks/lidija_roos-not_for_sale.mp3" />
        </audio>
      </template>
      <template #controls>
        <template />
      </template>
    </AudioPeaks>
  </div>
</template>
<style scoped>
button,
#overviewWidget {
  height: 48px;
}
</style>