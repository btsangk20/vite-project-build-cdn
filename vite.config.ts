import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), nodePolyfills()],
  build: {
    minify: false,
    lib: {
      entry: './src/index.js',
      name: 'WoodDeck',
      fileName: (format) => `woodDeck.${format}.js`,
      formats: ['es', 'umd', 'iife'],
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'uuid', '@types/uuid'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          uuid: 'uuid',
          '@types/uuid': 'uuid',
        },
      },
    },
  },
});
