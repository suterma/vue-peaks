<script setup lang="ts">
import { reactive } from 'vue';
import AudioPeaksWidget from '../components/AudioPeaksWidget.vue';
const state = reactive({ url: '' });
</script>
<template>
  <div class="columns">
    <div class="column">
      <p>
        This is a showcase for a simple media player. It's available with
        vue-peaks as ready-made component,
        <span class="code">AudioPeaksWidget.vue</span>, which you can use as-is
        or adapt to your needs.
      </p>
    </div>
    <div class="column">
      <highlightjs
        language="vue-typescript"
        code="import AudioPeaksWidget 
from 'vue-peaks/src/components/AudioPeaksWidget.vue';
const state = reactive({ url: '' });"
      />
      <highlightjs
        language="vue-template"
        code="<input type='url' 
       v-model='state.url' 
       placeholder='Paste an URL to a media file' />
<!-- The :key property makes sure that the component 
     is re-rendered on every URL change, causing
     a re-render of the waveform -->       
<AudioPeaksWidget :src='state.url' 
                  :key='state.url'>
</AudioPeaksWidget>"
      />
    </div>
    <div class="column">
      <div class="box">
        <div class="field">
          <div class="control">
            <input
              class="input"
              type="url"
              v-model="state.url"
              placeholder="Paste an URL to a media file"
            />
          </div>
        </div>
        <!-- The :key property makes sure that the component 
        is re-rendered on every URL change, causing
        a re-render of the waveform -->
        <AudioPeaksWidget
          :src="state.url"
          :key="state.url"
        >
        </AudioPeaksWidget>
      </div>
    </div>
  </div>
  <div class="columns">
    <div class="column">
      <p>
        You can find the complete
        <a
          href="https://github.com/suterma/vue-peaks/blob/main/src/components/AudioPeaksWidget.vue"
          >Widget SFC source code on GitHub</a
        >.
      </p>
    </div>
  </div>
</template>
