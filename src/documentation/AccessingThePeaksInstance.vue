<script setup lang="ts">
import { reactive } from 'vue';
import AudioPeaksWidget from '../components/AudioPeaksWidget.vue';

const state = reactive({ url: '' });

</script>
<template>
  <h1>Accessing the peaks.js instance</h1>
  <p>
    In the hosting component, get a reference to the AudioPeaks child component:
  <pre><code>const audioPeaksWidget = ref&lt;InstanceType&lt;typeof AudioPeaks&gt;&gt;()</code></pre>
  Then, you can access the instance and it's methods by using the reference:
  <pre><code>audioPeaksWidget.value?.peaksInstance?.player.play();</code></pre>
  Remember, that the instance is only available only after the child has been mounted and peaks.js has been
  initialized.
  </p>
</template>
 