# vue-peaks

A Vue wrapper around the bbc/peaks.js audio waveform UI component.

This project aims to simplify the use of peaks.js in a Vue3 environment.

# Installation

```sh
npm install --save vue-peaks
# peer dependencies of peaks.js
npm install --save konva
npm install --save waveform-data
```

Installing vue-peaks also installs Peaks.js as a dependency. However, Peaks.js uses [Konva](https://konvajs.org/) and [waveform-data](https://github.com/bbc/waveform-data.js) as peer dependencies, so you must also install those modules.

# Build & Development

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

# Credits

-   [peaks.js](https://github.com/bbc/peaks.js/) by BBC (LGPL-3.0 licensed)

Initial code is taken from

-   [peaks-vue-demo](https://github.com/candeogi/peaks-vue-demo) by Giovanni Candeo (MIT-licensed)
-   [vue-waveform-template](https://github.com/thom4parisot/vue-waveform-template) by Thomas Parisot (MIT-licensed)

Music track ["Not for sale"](https://raw.github.com/suterma/vue-peaks/blob/a66ab8b87c8b1abe53e7a2cd7a5365216e1868a5/public/lidija_roos-not_for_sale.mp3) by Lidja Roos, used by permission.
