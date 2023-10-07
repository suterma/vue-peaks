<script setup lang='ts'>
import { reactive } from 'vue';
import AudioPeaks from './../components/AudioPeaks.vue';

/** reactive properties */
const state = reactive({
  isRendered: true,
  mediaSource: 'https://lib.replayer.app/lidija_roos-not_for_sale.mp3',
  peaksWidth: 50
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
                <option value=''>none</option>
                <option value='https://lib.replayer.app/lidija_roos-not_for_sale.mp3'>An MP3 music file
                </option>
                <option value='https://lib.replayer.app/decisions-by-lidija-roos.ogg'>An OGG music file
                </option>
                <option value='https://twit.cachefly.net/audio/sn/sn0886/sn0886.mp3'>Security Now! Podcast,
                  Episode #886 (112 min, 55.5MB, MP3)</option>
              </select>
            </div>
          </div>
        </div>
        <div class='field'>
          <label class='label is-multiline'>Change the size (triggers re-drawing).</label>
          <div class='control'>
            <input 
              id='peaksWidthSlider' 
              class='slider is-fullwidth is-danger is-circle'
              step='1' min='0' max='100' 
              v-model='state.peaksWidth' 
              type='range'>
           </div>
        </div>        
        <AudioPeaks v-if='state.isRendered' :key='state.mediaSource' :style="{ width: state.peaksWidth + '%' }">
          <audio controls :src='state.mediaSource'></audio>
          <template #zoomview>
            <template />
          </template>
          <template #controls>
            <template />
          </template>
        </AudioPeaks>

      </div>
      <p>
        AudioPeaks currently does not support reactivity for the options. Still, you can use Vue's reactivity on the
        component itself. You can for example:
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
        Note that media elements with an empty <span class='code'>src</span> attribute cause a <span class='code'>MediaError</span>. 
        If this is a concern to you, use the <span class='code'>v-if</span> directive
        to conditionally only render the element on non-emtpy URL values.
      </p>
      
    </div>
    <div class='column'>
      <highlightjs language='vue-template' code="<AudioPeaks v-if='state.isRendered' :key='state.mediaSource' :style='{ width: state.peaksWidth + '%' }'>
  <audio controls :src='state.mediaSource'></audio>
  <template #zoomview>
	<template />
  </template>
  <template #controls>
	<template />
  </template>
</AudioPeaks>" />
      <p>
        vue-peaks internally handles resizing of the contained overview and zoomview areas. If you, in the "external mode",
        have an external zoomview or overview area that are resizing completely independent from the <span class='code'>AudioPeaks</span> instance, 
        please handle their resizing according to the <a href='https://github.com/bbc/peaks.js/blob/master/doc/API.md#viewfittocontainer'>
        peaks.js API docs about resizing</a>.
      </p>
    </div>
  </div>
</template>
  