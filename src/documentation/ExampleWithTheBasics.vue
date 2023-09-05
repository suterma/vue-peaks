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
  <p>
    First, import the Single File Component (SFC):
  </p>
  <highlightjs language='vue-typescript' code="import AudioPeaks from 'vue-peaks/src/components/AudioPeaks.vue';" />
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
      <highlightjs language='vue-template' code="<AudioPeaks src='https://domain/file.mp3' />" />
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
    <source src='https://domain/file.mp3' />
  </audio>
</AudioPeaks>" />
    </div>
    <div class="column is-narrow">
      <div class="box">
        <AudioPeaks>
          <span class="tag is-danger is-large is-multiline">You can also add additional HTML content.</span>
          <audio controls>
            <source src='https://suterma.github.io/vue-peaks/lidija_roos-not_for_sale.mp3' />
          </audio>
        </AudioPeaks>
      </div>
    </div>
  </div>

  <h4 class="title is-4">External mode</h4>
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
  <source src='https://domain/file.mp3' />
</audio>
<div><span class='tag is-danger is-large'>
    Using the external media element above.</span></div>
<AudioPeaks mediaElementId='externalMediaElement'>
</AudioPeaks>" />
    </div>
    <div class="column is-narrow">
      <div class="box">
        <audio controls id='externalMediaElement'>
          <source src='https://suterma.github.io/vue-peaks/lidija_roos-not_for_sale.mp3' />
        </audio>
        <div><span class='tag is-danger is-large'>
            Using the external media element above.</span></div>
        <AudioPeaks mediaElementId='externalMediaElement'>
        </AudioPeaks>
      </div>
    </div>
  </div>
  <div class="columns is-desktop">
    <div class="column">
      <p>
        There are also properties available for overview area and the zoom view area.
      </p>
    </div>
    <div class="column">
      <highlightjs language='vue-template' code="<div id='externalBasicOverviewDivId'>Overview</div>
<div id='externalBasicZoomviewDivId'>Zoomview</div>
<div><span class='tag is-danger is-large'>
Using the external overview and zoomview element above.</span></div>
<AudioPeaks src='https://suterma.github.io/vue-peaks/lidija_roos-not_for_sale.mp3' 
  overviewElementId='externalBasicOverviewDivId'
  zoomviewElementId='externalBasicZoomviewDivId'>
</AudioPeaks>" />
    </div>
    <div class="column is-narrow">
      <div class="box">
        <div id='externalBasicOverviewDivId'>Overview</div>
        <div id='externalBasicZoomviewDivId'>Zoomview</div>
        <div><span class='tag is-danger is-large'>
            Using the external overview and zoomview element above.</span></div>
        <AudioPeaks src='https://suterma.github.io/vue-peaks/lidija_roos-not_for_sale.mp3' 
        overviewElementId='externalBasicOverviewDivId'
        zoomviewElementId='externalBasicZoomviewDivId'
          >
        </AudioPeaks>
      </div>
    </div>
  </div>
</template>
