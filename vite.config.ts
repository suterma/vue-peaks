import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// for "Library Mode", uncomment below:
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  /* path /vue-peaks/ is suitable for publishing to github pages */
  base: '/vue-peaks/',
  build: {
    /* Defining the options for "App Mode" */
    // rollupOptions: {
    //   external: [/^.*(.mp3)/, /^.*(.ogg)/],
    // },

    /* Defining the assets to distribute and the options for "Library Mode" */
    lib: {
      entry: resolve(__dirname, 'lib/main.js'),
      name: 'vue-peaks',
      // the proper extensions will be added
      fileName: 'vue-peaks',
    },
    rollupOptions: {
      external: ['vue', 'peaks.js', /^.*(.mp3)/, /^.*(.ogg)/],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps (in "Library Mode")
        globals: {
          vue: 'Vue',
          'peaks.js': 'PeaksJs',
        },
      },
    },
    manifest: true,
    sourcemap: true,
  },
});
