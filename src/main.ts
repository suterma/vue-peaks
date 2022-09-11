import { createApp } from 'vue';
import App from './App.vue';

import './assets/vue-peaks-mods.css';

// Syntax highlighter
import hljs from 'highlight.js/lib/core';
import typescript from 'highlight.js/lib/languages/typescript';
hljs.registerLanguage('vue-typescript', typescript);
import xml from 'highlight.js/lib/languages/xml';
hljs.registerLanguage('vue-template', xml);
import css from 'highlight.js/lib/languages/css';
hljs.registerLanguage('css', css);
import hljsVuePlugin from '@highlightjs/vue-plugin';
// Select a style from https://highlightjs.org/static/demo/
import 'highlight.js/styles/a11y-dark.css';

createApp(App).use(hljsVuePlugin).mount('#app');
