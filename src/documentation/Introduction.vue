 
<template>
  <div class="columns">
    <div class="column">
      <p>
        vue-peaks aims to simplify the use of <a target="_blank" href="https://github.com/bbc/peaks.js/">peaks.js</a>
        in a <a target="_blank" href=" https://vuejs.org/">Vue3</a> environment. It provides a <a target="_blank"
          href="    https://vuejs.org/guide/scaling-up/sfc.html">Single File Component
          (SFC)</a>,
        <span class='code'>AudioPeaks</span>.
      </p>
      <p>
        Explore the below examples or see the
        <a target="_blank" href="https://github.com/suterma/vue-peaks#vue-peaks">vue-peaks GitHub repository</a>.
      </p>

    </div>
    <div class="column">
      <p>

        <highlightjs language='bash' code="npm install vue-peaks
# peer dependencies of peaks.js
npm install konva
npm install waveform-data" />
      </p>
      <p>
        Installing vue-peaks also installs <a target="_blank" href="https://github.com/bbc/peaks.js/">peaks.js</a> as a
        dependency. However, peaks.js uses
        <a target="_blank" href="https://konvajs.org/">Konva</a>
        and
        <a target="_blank" href="https://github.com/bbc/waveform-data.js">waveform-data</a>
        as peer dependencies,
        so you must also install those modules.
      </p>
    </div>
  </div>
</template>
