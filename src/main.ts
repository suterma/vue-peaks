import { createApp } from 'vue';
import App from './App.vue';

import './assets/vue-peaks-mods.css';

// Syntax highlighter
import hljs from 'highlight.js/lib/core';

import typescript from 'highlight.js/lib/languages/typescript';
hljs.registerLanguage('vue-typescript', typescript);

import xml from 'highlight.js/lib/languages/xml';
hljs.registerLanguage('vue-template', xml);
hljs.registerLanguage('vue-sfc', xml);

import bash from 'highlight.js/lib/languages/bash';
hljs.registerLanguage('bash', bash);

import css from 'highlight.js/lib/languages/css';
hljs.registerLanguage('css', css);

import hljsVuePlugin from '@highlightjs/vue-plugin';

// The style to use (see https://highlightjs.org/static/demo/ to choose)
import 'highlight.js/styles/base16/decaf.css';

createApp(App).use(hljsVuePlugin).mount('#app');
