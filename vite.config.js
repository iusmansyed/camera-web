import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from '@vite-pwa/vite-plugin'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true // Enables PWA in development mode
      },
      manifest: {
        name: 'My PWA App',
        short_name: 'PWA App',
        description: 'My Progressive Web App built with Vite and React',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        icons: [
          {
            src: 'assets/icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'assets/icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
})
