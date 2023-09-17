<script setup lang="ts">
import AudioPeaks from './../components/AudioPeaks.vue';
</script>

<template>
  <p>
    vue-peaks also supports video, as peaks.js does. These examples expand on
    the above examples, with a focus on video content.
  </p>
  <h4 class="title is-4">Simple mode (with video)</h4>
  <div class="columns is-desktop">
    <div class="column">
      <p>
        By default, the
        <a
          href="https://github.com/suterma/vue-peaks/blob/main/src/components/AudioPeaks.vue"
          >AudioPeaks Vue component</a
        >
        template creates a new audio element. While this works for the audio
        part of video content, you can specify that the used HTML media element
        actually is a video element:
      </p>
      <highlightjs
        language="vue-template"
        code="<AudioPeaks video src='https://domain/video-file.mp4' />"
      />
    </div>
    <div class="column">
      <div class="box">
        <p>
          Voyage of Discovery (Source:
          <a
            href="https://solarsystem.nasa.gov/resources/317/voyage-of-discovery/?category=planets_saturn"
            >NASA)</a
          >, 12.3 MB (video/webm)
        </p>
        <AudioPeaks
          video
          src="https://solarsystem.nasa.gov/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcHRYIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--c6d603ff2a89b19ebdd89842ff2e35911e2ca2a2/-home-www-videos-voyager-20130912d-discovery20110428-640.webm?disposition=inline"
        />
      </div>
    </div>
  </div>

  <h4 class="title is-4">Slot mode (with video)</h4>
  <div class="columns is-desktop">
    <div class="column">
      <p>
        No difference to audio here, just place your video element inside the
        <span class="code">AudioPeaks</span> element using the default slot.
      </p>
      <highlightjs
        language="vue-template"
        code="<AudioPeaks>
  <video controls>
    <source src='https://domain/video-file.mp4' />
  </video>
</AudioPeaks>"
      />
      <p>
        Note that the default slot is still named
        <span class="code">#audio</span>, in case you want to use it for
        customization.
      </p>
    </div>
    <div class="columns is-desktop">
      <div class="column">
        <div class="box">
          <p>
            Cassini's High-Flying, Ring-Grazing Orbits (Source:
            <a
              href="https://solarsystem.nasa.gov/resources/17561/cassinis-high-flying-ring-grazing-orbits/?category=videos"
              >NASA / Jet Propulsion Laboratory - Caltech)</a
            >, 27.1 MB (video/ogg)
          </p>
          <AudioPeaks>
            <video
              controls
              style="width: 100%"
            >
              <source
                src="https://solarsystem.nasa.gov/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbDFmIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--971840d1ebc56d50fc897c92adb1b8d7f8aad71e/JPL-20161121-CASSINf-0001-720.ogv?disposition=inline"
              />
            </video>
          </AudioPeaks>
        </div>
      </div>
    </div>
  </div>

  <h4 class="title is-4">External mode (with video)</h4>
  <div class="columns is-desktop">
    <div class="column">
      <p>
        As with audio, you can reference your existing video element by it's
        (unique) id, or as an HTMLMediaElement object.
      </p>

      <highlightjs
        language="vue-template"
        code="<video controls id='externalVideoElement'>
  <source src='https://lib.replayer.app/nasa/12639_EdgeofSolarSystem_Final_24fps_v02_VX-718267_appletv_subtitles.m4v' />
</video>
<div><span class='tag is-danger'>
    Using the external media element above.</span></div>
<AudioPeaks mediaElementId='externalVideoElement'>
</AudioPeaks>"
      />
    </div>
    <div class="column is-narrow">
      <div class="box">
        <p>
          Where is the Edge of the Solar System? (Source:
          <a href="https://svs.gsfc.nasa.gov/12639"
            >NASA's Goddard Space Flight Center)</a
          >, 28.8 MB (video/mp4)
        </p>
        <video
          controls
          id="externalVideoElement"
        >
          <source
            src="https://lib.replayer.app/nasa/12639_EdgeofSolarSystem_Final_24fps_v02_VX-718267_appletv_subtitles.m4v"
          />
        </video>
        <div>
          <span class="tag is-danger">
            Using the external video element above.</span
          >
        </div>
        <AudioPeaks mediaElementId="externalVideoElement"> </AudioPeaks>
      </div>
    </div>
  </div>
</template>
<style scoped>
div.box {
  max-width: 50vw;
}
</style>
