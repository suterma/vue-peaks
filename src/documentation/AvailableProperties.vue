<script setup lang="ts"></script>

<template>
  <div class="columns">
    <div class="column">
      <p>
        Vue-peaks offers it's own properties for customization. Plus, you can
        configure the underlying peaks.js instance via the options property (of
        type <span class="code">PeaksOptions</span>).
      </p>
      <p>
        Read more about each property directly in the
        <a
          href="https://github.com/suterma/vue-peaks/blob/main/src/components/AudioPeaks.vue#L9"
          >source code comments</a
        >.
      </p>
    </div>
    <div class="column">
      <highlightjs
        language="vue-typescript"
        code="src?: string | undefined;
video?: boolean | undefined;
zoomviewElementId?: string | undefined;
zoomviewElement?: HTMLDivElement | undefined;
overviewElementId?: string | undefined;
overviewElement?: HTMLDivElement | undefined;
mediaElementId?: string | undefined;
mediaElement?: HTMLMediaElement | undefined;
options?: PeaksOptions | undefined;"
      />
    </div>
  </div>
</template>
