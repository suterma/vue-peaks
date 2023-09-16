# vue-peaks

![License](https://img.shields.io/github/license/suterma/vue-peaks.svg 'License')
![GitHub All Releases](https://img.shields.io/github/downloads/suterma/vue-peaks/total.svg 'GitHub All Releases')
![Release](https://img.shields.io/github/release/suterma/vue-peaks.svg 'Release')
![Language](https://img.shields.io/github/languages/top/suterma/vue-peaks.svg 'Language')
![npm](https://img.shields.io/npm/dm/vue-peaks 'NPM')
[![](https://data.jsdelivr.com/v1/package/npm/vue-peaks/badge 'jsDelivr')](https://www.jsdelivr.com/package/npm/vue-peaks)
[![Rate this package](https://badges.openbase.com/js/rating/vue-peaks.svg?token=vHkEYi5zzp1G84PyPGIiYYDN/9+SZtzXDlLAEe5ffRA=)](https://openbase.com/js/vue-peaks?utm_source=embedded&utm_medium=badge&utm_campaign=rate-badge)

A lightweight Vue wrapper around the [bbc/peaks.js](https://github.com/bbc/peaks.js) audio waveform UI component.

![Image](https://github.com/suterma/vue-peaks/blob/main/vue-peaks-example-ui.png?raw=true)

vue-peaks aims to simplify the use of [peaks.js](https://github.com/bbc/peaks.js/) in a [Vue3](https://vuejs.org/) environment. It provides a single component, `AudioPeaks`.

Explore the [live examples](https://suterma.github.io/vue-peaks/).

# Installation

```sh
npm install vue-peaks --save
```

Installing vue-peaks also installs [peaks.js (version 3)](https://github.com/bbc/peaks.js/) as a dependency. Additionally, peaks.js uses [Konva (version 8 or 9)](https://konvajs.org/) and [waveform-data (version 4)](https://github.com/bbc/waveform-data.js) as peer dependencies; these will get installed with vue-peaks, if not already available.

# How to use

## Basic examples

vue-peaks provides three modes of operation:

- **Simple mode**: just set the media URL, and all views are automatically rendered by default
- **Slot mode**: the media element and additional views are provided using named slots
- **External mode**: the media element and additional views are referenced by id or HTML element references

Import the component:

```
import { AudioPeaks } from 'vue-peaks';
// default styles for the AudioPeaks component
import 'vue-peaks/dist/style.css';
```

Note: Even if you do not use the default (or any other) styles, the overview and zoomview panes still do have a small minimum size set.

Currently, the package does not properly export types, see issue [#17](https://github.com/suterma/vue-peaks/issues/17). Alternatively you can also directly include the vue component as SFC:

```
import AudioPeaks from 'vue-peaks/src/components/AudioPeaks.vue';
// default styles for the AudioPeaks component are already contained in the SFC
```

#### Simple mode

By default, the [AudioPeaks Vue component](https://github.com/suterma/vue-peaks/blob/main/src/components/AudioPeaks.vue) template creates a new audio element, with the given source URL, and both view panes (overview and zoom, which are rendered with a default size) and a controls pane. A new audio context is created and used to compute the waveform.

```
<AudioPeaks src='https://lib.replayer.app/your-light-by-lidija-roos.mp3' />
```

#### Slot mode

To provide your own media element, just place it inside the `AudioPeaks` element (a.k.a. the slot). Vue-peaks will use the first media element in the slot. A new audio context is created and used to compute the waveform.

```
<AudioPeaks>
  <span>You can also add additional HTML content.</span>
  <audio controls>
    <source src='https://lib.replayer.app/your-light-by-lidija-roos.mp3' />
  </audio>
</AudioPeaks>
```

#### Using a specified media element ("external" mode)

If you already have an existing media element, you can reference it by it's (unique) id, or as an HTMLMediaElement object. A new audio context is created and used to compute the waveform.

There are also properties available for the overview area and the zoom view area.

```
<audio controls id='externalMediaElement'>
  <source src='https://lib.replayer.app/your-light-by-lidija-roos.mp3' />
</audio>
<div><span>
    Using the external media element above.</span></div>
<AudioPeaks mediaElementId='externalMediaElement'>
</AudioPeaks>
```

See a more [detailed documentation and live examples on the GitHub Pages](https://suterma.github.io/vue-peaks/).

# Troubleshooting

**Uncaught TypeError: Cannot read properties of null (reading 'isCE')**
When you use Webpack and locally link to the vue-peaks library, make sure vue is not included twice. See https://github.com/vuejs/core/issues/4478#issuecomment-912235940

Your vue.config.js should look like

```
const { defineConfig } = require('@vue/cli-service')
const path = require('path') //add

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack(config) {
    config.resolve.symlinks(false) //add
    config.resolve.alias.set( 'vue', path.resolve('./node_modules/vue')) // add
  },
})
```

# Build & Development

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and publish on GitHub pages

```sh
# cleanup
rm -rf dist
npm run build
# to publish to GitHub Pages (requires committing and pushing the build in the /dist folder)
git add dist -f
git commit -m 'built for gh-pages'
git push
npm run publish-gh-pages
```

### Compile for Production an publish as Library

- Update version
- Update CHANGELOG.md
- Disable the App mode and enable the [library mode](https://vitejs.dev/guide/build.html#library-mode)
  - in `vite.config.ts`
    - uncomment the `resolve` import
    - uncomment the `lib` property

```sh
# cleanup
rm -rf dist
npm run build-lib
# to publish to npm
npm publish
```

- Change back to App mode

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

# Credits

- [peaks.js](https://github.com/bbc/peaks.js/), a client-side JavaScript component to display and interact with audio waveforms in the browser. (Released under the LGPL-3.0 license, by the British Broadcasting Corporation and contributors)
- [Vue.js](https://vuejs.org/), the progressive JavaScript framework. (Released under the MIT License, Copyright © 2014-2021 Evan You)
- [Bulma](https://bulma.io/), the modern CSS framework that just works. (Released under the MIT License, by Jeremy Thomas)
- [Bulmaswatch](https://jenil.github.io/bulmaswatch/), free themes for Bulma. (Released under the MIT License, by Jenil Gogari)
- [Material Design Icons](https://materialdesignicons.com/), the original. Following Google's Material Design guidelines for system icons. (Icons released under the Apache 2.0 License, by pictogrammers.com)
- [Jest](https://jestjs.io/), a delightful JavaScript Testing Framework. (Released under the MIT License, by Facebook)
- Music from the Album "Not For Sale" by Lidija Roos (Released to the public, by Lidija Roos)
- [@highlightjs/vue-plugin](https://github.com/highlightjs/vue-plugin), provides a highlightjs component for use in your Vue.js 3 applications. (Released under the BSD-3-Clause license, by the highlight.js team)
- [@rushstack/eslint-patch](https://github.com/microsoft/rushstack/tree/main/eslint/eslint-patch), a patch that improves how ESLint loads plugins when working in a monorepo with a reusable toolchain. (Released under the MIT License, by Microsoft)
- [@types/jsdom, @types/node](https://github.com/DefinitelyTyped/DefinitelyTyped), the repository for high quality TypeScript type definitions. (Released under the MIT License, by various contributors)
- [vite, vitest, @vitejs/plugin-vue](https://github.com/vitejs/vite), next Generation Frontend Tooling. (Released under the MIT License, by the vite team)
- [eslint](https://github.com/eslint/eslint), a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code. (Released under the MIT License, by the eslint team)
- [jsdom](https://github.com/jsdom/jsdom), a pure-JavaScript implementation of many web standards. (Released under the MIT License, by the jsdom team)
- [npm-run-all](https://github.com/mysticatea/npm-run-all), a CLI tool to run multiple npm-scripts in parallel or sequential. (Released under the MIT License, by Toru Nagashima)
- [prettier](https://github.com/prettier/prettier), an opinionated Code Formatter. (Released under the MIT License, by the prettier team)
- [typescript](https://github.com/Microsoft/TypeScript), a language for application-scale JavaScript. (Released under the Apache-2.0 license, by Microsoft)
- [vue-tsc](https://github.com/johnsoncodehk/volar), high-performance tooling for Vue. (Released under the MIT License, by Johnson Chu)
- Post [Making and publishing components with Vue 3 and Vite](https://dev.to/matijanovosel/making-and-distributing-a-ui-component-with-vue-3-and-vite-12lk) by [Matija Novosel](https://www.matijanovosel.com/).

Initial code is taken from

- [peaks-vue-demo](https://github.com/candeogi/peaks-vue-demo) by Giovanni Candeo (MIT-licensed)
- [vue-waveform-template](https://github.com/thom4parisot/vue-waveform-template) by Thomas Parisot (MIT-licensed)

---

[vue-peaks](https://github.com/suterma/vue-peaks) is created with love by [Marcel Suter](https://marcelsuter.ch) for the [Replayer](https://replayer.app) project.
