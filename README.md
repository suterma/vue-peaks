# vue-peaks

![License](https://img.shields.io/github/license/suterma/vue-peaks.svg "License")
![GitHub All Releases](https://img.shields.io/github/downloads/suterma/vue-peaks/total.svg "GitHub All Releases")
![Release](https://img.shields.io/github/release/suterma/vue-peaks.svg "Release")
![Language](https://img.shields.io/github/languages/top/suterma/vue-peaks.svg "Language")
![npm](https://img.shields.io/npm/dm/vue-peaks "NPM")
[![](https://data.jsdelivr.com/v1/package/npm/vue-peaks/badge "jsDelivr")](https://www.jsdelivr.com/package/npm/vue-peaks)
[![Rate this package](https://badges.openbase.com/js/rating/vue-peaks.svg?token=vHkEYi5zzp1G84PyPGIiYYDN/9+SZtzXDlLAEe5ffRA=)](https://openbase.com/js/vue-peaks?utm_source=embedded&amp;utm_medium=badge&amp;utm_campaign=rate-badge)

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

# How to use

## A basic example

```html
<AudioPeaks src="lidija_roos-not_for_sale.mp3" />
```

By default, a new audio element and audio context is created for the given source URL, both panes (overview and zoom) are shown, and their size is 100% width and 250px height.

## Another example

```html
<AudioPeaks src="lidija_roos-decisions.ogg" id="someIdentifier" />
```

When using more than one audio.js component instance in the same HTML document, a unique id must be set.

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
-   Music tracks ["Not for sale"](https://github.com/suterma/vue-peaks/raw/main/public/lidija_roos-not_for_sale.mp3) and ["Decisions"](https://github.com/suterma/vue-peaks/raw/main/public/lidija_roos-decisions.ogg) by Lidija Roos, used by permission.

Initial code is taken from

-   [peaks-vue-demo](https://github.com/candeogi/peaks-vue-demo) by Giovanni Candeo (MIT-licensed)
-   [vue-waveform-template](https://github.com/thom4parisot/vue-waveform-template) by Thomas Parisot (MIT-licensed)
