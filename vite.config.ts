import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Relative base so the build works both on a GitHub Pages project subpath
// (e.g. /squish_squash_studios.github/) and on the custom domain.
//
// The build emits a SINGLE JS file + SINGLE CSS file, and Vite injects both
// tags into the generated dist/index.html automatically:
//   dist/assets/squish-squash-[hash].js
//   dist/assets/squish-squash-[hash].css
//
// The [hash] is content-derived and is what busts caches: a new build means a
// new URL, so a browser physically cannot serve the previous bundle. Do not
// pin these to stable filenames — GitHub Pages republishes to the same paths
// and phones will keep serving the old JS from disk cache for days.
export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // one entry chunk, no vendor splitting -> single JS file
        manualChunks: undefined,
        entryFileNames: 'assets/squish-squash-[hash].js',
        chunkFileNames: 'assets/squish-squash-[hash].js',
        assetFileNames: (info) =>
          info.names?.some((n) => n.endsWith('.css'))
            ? 'assets/squish-squash-[hash].css'
            : 'assets/[name][extname]',
      },
    },
  },
})
