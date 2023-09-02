<script setup lang='ts'>
import { reactive } from 'vue';
import AudioPeaks from './../components/AudioPeaks.vue';

const state = reactive({
  isRendered: true,
  mediaSource: ''
})

function toggleRendering() {
  const currentState = state.isRendered;
  console.log('CurrentState', currentState);
  state.isRendered = !currentState;
}
</script>
  
<template>
  <div class='columns is-desktop'>
    <div class='column'>
      <p>
        AudioPeaks currently does not support reactivity for the options. Still, you can use Vue's reactivity on the
        component
        itself. You can for example:
      </p>
      <p>
      <ul>
        <li>Conditionally render the component (by using Vue's built-in
          <span class='code'>v-if</span> directive). This also releases memory used.
        </li>
        <li>Replace the media source by setting the <span class='code'>src</span> attribute of the audio element. When
          you also set the <span class='code'>:key</span> property to a new value, the component re-renders. <br />This
          is called the key-changing
          technique, and is required to trigger an update of the waveform.</li>
      </ul>
      </p>
      <p>
        Note that <code>audio</code> elements with an empty <code>src</code> attribute cause a <code>MediaError</code>. 
        If this is a concern to you, you can use the <code>v-if</code> directive
        to conditionally only render the element on non-emtpy URL values.
      </p>
    </div>
    <div class='column is-narrow'>
      <div class='box'>
        <div class='field'>
          <label class='label is-multiline'>Create
            and destroy an AudioPeaks instance:</label>
          <div class='control'>
            <button @click='toggleRendering()' class='button  is-danger'>
              <span>{{ state.isRendered ? 'Destroy' : 'Render' }}</span>
            </button>
          </div>
        </div>
        <div class='field'>
          <label class='label is-multiline'>Change the media URL (triggers re-rendering).</label>
          <div class='control'>
            <div class='select is-danger'>
              <select v-model='state.mediaSource' class='highlight'>
                <option value=''>-select option-</option>
                <option value='https://suterma.github.io/vue-peaks/lidija_roos-not_for_sale.mp3'>An MP3 music file
                </option>
                <option value='https://suterma.github.io/vue-peaks/lidija_roos-decisions.ogg'>An OGG music file
                </option>
                <option value='https://twit.cachefly.net/audio/sn/sn0886/sn0886.mp3'>Security Now! Podcast,
                  Episode #886 (112 min, 55.5MB, MP3)</option>
              </select>
            </div>
          </div>
        </div>
        <AudioPeaks v-if='state.isRendered' :key='state.mediaSource'>
          <audio controls :src='state.mediaSource'></audio>
          <template #zoomview>
            <template />
          </template>
          <template #controls>
            <template />
          </template>
        </AudioPeaks>

      </div>
    </div>
    <div class='column'>
      <highlightjs language='vue-template' code="<div class='field'>
  <label class='label'>Example button to create
    and destroy an AudioPeaks instance:</label>
  <div class='control'>
    <button @click='toggleRendering()' class='button  is-danger'>
      <span>{{ state.isRendered ? 'Destroy' : 'Render' }}</span>
    </button>
  </div>
</div>
<div class='field'>
  <label class='label'>Example menu to change the media URL,
    with automatic re-rendering of the
    component.</label>
  <div class='control'>
    <div class='select is-danger'>
      <select v-model='state.mediaSource' class='highlight'>
        <option value=''>-select option-</option>
        <option value='https://example.com/file1.mp3'>
          An MP3 music file
        </option>
        <option value='https://example.com/file2.ogg'>
          An OGG music file
        </option>
        <option value='https://example.com/file3.mp3'>
          Podcast
        </option>
      </select>
    </div>
  </div>
</div>
<AudioPeaks v-if='state.isRendered' :key='state.mediaSource'>
  <audio controls :src='state.mediaSource'></audio>
  <template #zoomview>
    <template />
  </template>
  <template #controls>
    <template />
  </template>
</AudioPeaks>" />
    </div>
  </div>


</template>
  