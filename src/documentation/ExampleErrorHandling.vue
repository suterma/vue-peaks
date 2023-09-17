<script setup lang="ts">
import AudioPeaks from './../components/AudioPeaks.vue';
</script>

<template>
  <p>
    Errors stemming from peaks.js and from the
    <a
      href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/error_event"
      >HTMLMediaElement's error event</a
    >
    (like a wrong URL or non-responding server) are reported using the
    <span class="code">@error</span> event. You can then handle the error event
    as you see fit. There is a known issue [#18] in simple mode.
  </p>
  <p>
    vue-peaks has simple internal error handling. In case of any error, the
    <span class="code">AudioPeaks</span> gets annotated with the
    <span class="code">hasError</span> class, causing a default red striped
    display on all views, plus the title attribute gets set to the error
    message.
  </p>
  <h4 class="title is-4">Wrong URL</h4>
  <div class="columns is-desktop">
    <div class="column">
      <p>
        For example, a non-existing URL like
        <span class="code">https://example.com/missing.mp3</span>
        will never load any content.
      </p>
      <highlightjs
        language="vue-template"
        code="<AudioPeaks>
  <audio
    controls
    src='https://example.com/missing.mp3'
  ></audio>
  <template #zoomview><template></template></template>
  <template #controls><template></template></template>
</AudioPeaks>"
      />
    </div>
    <div class="column">
      <div class="box">
        <AudioPeaks>
          <audio
            controls
            src="https://example.com/missing.mp3"
          ></audio>
          <template #zoomview><template></template></template>
          <template #controls><template></template></template>
        </AudioPeaks>
      </div>
    </div>
  </div>
  <h4 class="title is-4">CORS issue</h4>
  <div class="columns is-desktop">
    <div class="column">
      <p>
        To create the waveforms, peaks.js needs access to the media file in
        binary form. To allow this, the web server must support
        <a href="https://en.wikipedia.org/wiki/Cross-origin_resource_sharing"
          >Cross-origin resource sharing (CORS)</a
        >
        for the origin domain your vue-peaks-enabled app is running on.
      </p>
      <p>
        If CORS is not enabled, your media will play as expected, however the
        waveform calculation ends in an error, like in the example below:
      </p>
      <highlightjs
        language="vue-template"
        code="<!-- The server for this file does not have CORS enabled -->
<AudioPeaks 
    src='https://www.christoffankhauser.ch/app/download/15849408925/ChZw01_Fr%C3%B6id_PLAYBACK.mp3'>
</AudioPeaks>"
      />
      <p>
        The reported error message in this case is "XHR failed", although
        playback works just fine:
      </p>
    </div>
    <div class="column">
      <div class="box">
        <AudioPeaks
          src="https://www.christoffankhauser.ch/app/download/15849408925/ChZw01_Fr%C3%B6id_PLAYBACK.mp3"
        >
        </AudioPeaks>
      </div>
    </div>
  </div>
</template>
