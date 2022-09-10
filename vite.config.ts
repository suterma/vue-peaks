import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import typescript2 from 'rollup-plugin-typescript2';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    typescript2({
      check: false,
      include: ['src/components/*.vue'],
      tsconfigOverride: {
        compilerOptions: {
          outDir: 'dist',
          sourceMap: true,
          declaration: true,
          declarationMap: true,
        },
      },
      exclude: ['vite.config.ts'],
    }),
  ],
  /* path /vue-peaks/ is suitable for publishing to github pages */
  // base: '/vue-peaks/',
  build: {
    cssCodeSplit: false,
    lib: {
      //entry: './src/ViewerPlugin.ts',
      entry: resolve(__dirname, './src/ViewerPlugin.ts'),
      formats: ['es', 'cjs'],
      name: 'ViewerPlugin',
      fileName: (format) => `vue-peaks.${format}.js`,
    },
    rollupOptions: {
      //external: ['vue'],
      external: ['vue', 'peaks.js', /^.*(.mp3)/, /^.*(.ogg)/],
      output: {
        exports: 'named',
        // Provide global variables to use in the UMD build
        // for externalized deps (in "Library Mode")
        globals: {
          vue: 'Vue',
          'peaks.js': 'PeaksJs',
        },
      },
    },
    /* Defining the assets to distribute and the options for "Library Mode" */
    // lib: {
    //     entry: resolve(__dirname, 'lib/main.js'),
    //     name: 'vue-peaks',
    //     // the proper extensions will be added
    //     fileName: 'vue-peaks',
    // },
    // rollupOptions: {
    //     external: ['vue', 'peaks.js', /^.*(.mp3)/, /^.*(.ogg)/],
    //     output: {
    //         // Provide global variables to use in the UMD build
    //         // for externalized deps (in "Library Mode")
    //         globals: {
    //             vue: 'Vue',
    //             'peaks.js': 'PeaksJs',
    //         },
    //     },
    // },
    manifest: true,
    sourcemap: true,
  },
  resolve: {
    alias: {
      //'@': fileURLToPath(new URL('./src', import.meta.url)),
      //lib not working
      '@': resolve(__dirname, 'src'),
    },
  },
});
