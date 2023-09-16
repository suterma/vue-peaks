<script setup lang="ts">
import AudioPeaks from './../components/AudioPeaks.vue';
</script>

<template>
  <p>vue-peaks provides three modes of operation:
  <ul>
    <li><b>Simple mode</b>: just set the media URL, and all views are automatically rendered by default</li>
    <li><b>Slot mode</b>: the media element and additional views are provided using named slots</li>
    <li><b>External mode</b>: the media element and additional views are referenced by id or HTML element references
    </li>
  </ul>
  </p>
  <p>Import the component:  </p>
  <highlightjs language='vue-typescript' code="import { AudioPeaks } from 'vue-peaks';
// default styles for the AudioPeaks component
import 'vue-peaks/dist/style.css';
" />
<p>Note: Even if you do not use the default (or any other) styles, the overview and zoomview panes still do have a small minimum size set.</p>
  <h4 class="title is-4">Simple mode</h4>
  <div class="columns is-desktop">
    <div class="column">
      <p>
        By default, the
        <a href="https://github.com/suterma/vue-peaks/blob/main/src/components/AudioPeaks.vue">AudioPeaks Vue
          component</a>
        template creates a new audio element, with the given source URL, and both view panes
        (overview and zoom, which are rendered with a default size) and a controls pane. A new audio context is
        created and used to compute the waveform.
      </p>
      <highlightjs language='vue-template' code="<AudioPeaks src='https://lib.replayer.app/your-light-by-lidija-roos.mp3' />" />
    </div>
    <div class="column">
      <div class="box">
        <AudioPeaks src="https://suterma.github.io/vue-peaks/lidija_roos-not_for_sale.mp3" />
      </div>
    </div>
  </div>



  <h4 class="title is-4">Slot mode</h4>
  <div class="columns is-desktop">
    <div class="column">
      <p>
        To provide your own media element, just place it inside the <span class='code'>AudioPeaks</span> element (a.k.a. the slot). Vue-peaks will
        use
        the first media element in the slot. A new audio context is created and used to compute the waveform.
      </p>
    </div>
    <div class="column">
      <highlightjs language='vue-template' code="<AudioPeaks>
  <span>You can also add additional HTML content.</span>
  <audio controls>
    <source src='https://lib.replayer.app/your-light-by-lidija-roos.mp3' />
  </audio>
</AudioPeaks>" />
    </div>
    <div class="column is-narrow">
      <div class="box">
        <AudioPeaks>
          <span class="tag is-danger is-multiline">You can also add additional HTML content.</span>
          <audio controls>
            <source src='https://suterma.github.io/vue-peaks/lidija_roos-not_for_sale.mp3' />
          </audio>
        </AudioPeaks>
      </div>
    </div>
  </div>

  <h4 class="title is-4">External mode</h4>
  <h5 class="title is-5">External media element only</h5>
  <div class="columns is-desktop">
    <div class="column">
      <p>
        If you already have an existing media element, you can reference it by it's (unique) id, or as an
        HTMLMediaElement
        object. A new audio context is
        created and used to compute the waveform.
      </p>
    </div>
    <div class="column">
      <highlightjs language='vue-template' code="<audio controls id='externalMediaElement'>
  <source src='https://lib.replayer.app/your-light-by-lidija-roos.mp3' />
</audio>
<div><span class='tag is-danger'>
    Using the external media element above.</span></div>
<AudioPeaks mediaElementId='externalMediaElement'>
</AudioPeaks>" />
    </div>
    <div class="column is-narrow">
      <div class="box">
        <audio controls id='externalMediaElement'>
          <source src='https://suterma.github.io/vue-peaks/lidija_roos-not_for_sale.mp3' />
        </audio>
        <div><span class='tag is-danger'>
            Using the external media element above.</span></div>
        <AudioPeaks mediaElementId='externalMediaElement'>
        </AudioPeaks>
      </div>
    </div>
  </div>
  <h5 class="title is-5">Having all elements externally</h5>
 <div class="columns is-desktop">
    <div class="column">
      <p>
        There are also properties available for an external overview area and an external zoom view area. 
      </p>
      <p>
         Note however, that the default styles and the progress indication are not applied to any external HTML elements.
      </p>
    </div>
    <div class="column">
      <highlightjs language='vue-template' code="<div id='externalBasicOverviewDivId'>External overview</div>
<div id='externalBasicZoomviewDivId'>External zoomview</div>
<audio controls id='externalBasicMediaElement'>
  <source src='https://suterma.github.io/vue-peaks/lidija_roos-not_for_sale.mp3' />
</audio>        
<div><span class='tag is-danger'>
    Using the external overview, zoomview and audio element above.</span></div>
<AudioPeaks 
  overviewElementId='externalBasicOverviewDivId'
  zoomviewElementId='externalBasicZoomviewDivId'
  mediaElementId='externalBasicMediaElement'
  >
  <template #controls>
    <template />
  </template>
</AudioPeaks>" />
    </div>
    <div class="column is-narrow">
      <div class="box">
        <div id='externalBasicOverviewDivId'>External overview</div>
        <div id='externalBasicZoomviewDivId'>External zoomview</div>
        <audio controls id='externalBasicMediaElement'>
          <source src='https://suterma.github.io/vue-peaks/lidija_roos-not_for_sale.mp3' />
        </audio>        
        <div><span class='tag is-danger'>
            Using the external overview, zoomview and audio element above.</span></div>
        <AudioPeaks 
          mediaElementId='externalBasicMediaElement'
          overviewElementId='externalBasicOverviewDivId'
          zoomviewElementId='externalBasicZoomviewDivId'
          >
          <template #controls>
            <template />
          </template>
        </AudioPeaks>
      </div>
    </div>
  </div>
</template>
