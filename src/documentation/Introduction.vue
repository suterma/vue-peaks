<template>
  <div class="columns">
    <div class="column">
      <p>
        vue-peaks aims to simplify the use of
        <a
          target="_blank"
          href="https://github.com/bbc/peaks.js/"
          >peaks.js</a
        >
        in a
        <a
          target="_blank"
          href=" https://vuejs.org/"
          >Vue3</a
        >
        environment. It provides a single component,
        <span class="code">AudioPeaks</span>.
      </p>
      <p>
        Explore the below examples or see the
        <a
          target="_blank"
          href="https://github.com/suterma/vue-peaks#vue-peaks"
          >vue-peaks GitHub repository</a
        >.
      </p>
    </div>
    <div class="column">
      <p>
        <highlightjs
          language="bash"
          code="npm install vue-peaks --save"
        />
      </p>
      <p>
        Installing vue-peaks also installs
        <a
          target="_blank"
          href="https://github.com/bbc/peaks.js/"
          >peaks.js (version 3)</a
        >
        as a dependency. Additionally, peaks.js uses
        <a
          target="_blank"
          href="https://konvajs.org/"
          >Konva (version 8 or 9)</a
        >
        and
        <a
          target="_blank"
          href="https://github.com/bbc/waveform-data.js"
          >waveform-data (version 4)</a
        >
        as peer dependencies; these will get installed with vue-peaks, if not
        already available.
      </p>
    </div>
  </div>
</template>
