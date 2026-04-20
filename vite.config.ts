import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'node:path'
import { syncImages } from './scripts/sync-images.mjs'

// Watches data/images.xlsx and regenerates src/data/images.generated.ts on change.
// Runs an initial sync at config load so the TS module is always fresh.
function xlsxImagesPlugin(): Plugin {
  const xlsxPath = resolve(__dirname, 'data/images.xlsx')
  return {
    name: 'nirvana:xlsx-images',
    configResolved() {
      try { syncImages() } catch (e) { console.error('[xlsx-images] initial sync failed:', e) }
    },
    configureServer(server) {
      server.watcher.add(xlsxPath)
      server.watcher.on('change', (path) => {
        if (path === xlsxPath) {
          try {
            syncImages()
            const mod = server.moduleGraph.getModuleById(resolve(__dirname, 'src/data/images.generated.ts'))
            if (mod) server.reloadModule(mod)
          } catch (e) { console.error('[xlsx-images] re-sync failed:', e) }
        }
      })
    },
  }
}

export default defineConfig({
  plugins: [xlsxImagesPlugin(), tailwindcss(), react()],
})
