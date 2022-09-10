import type { App } from 'vue';
import { AudioPeaks } from './components';

export default {
  install: (app: App) => {
    app.component('AudioPeaks', AudioPeaks);
  },
};

export { AudioPeaks };
