// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA, type ManifestOptions } from "vite-plugin-pwa";
import tailwindcss from "@tailwindcss/vite";

const manifest: false | Partial<ManifestOptions> = {
  theme_color: "#8936FF",
  background_color: "#2EC6FE",
  icons: [
    {
      purpose: "maskable",
      sizes: "512x512",
      src: "/icon512_maskable.png",
      type: "image/png",
    },
    {
      purpose: "any",
      sizes: "512x512",
      src: "/icon512_rounded.png",
      type: "image/png",
    },
  ],
  screenshots: [
    {
      src: "/screenshots/desktop.webp",
      type: "image/webp",
      sizes: "1596x1141",
      form_factor: "wide",
    },
    {
      src: "/screenshots/mobile.webp",
      type: "image/webp",
      sizes: "1290x2796",
      form_factor: "narrow",
    },
  ],
  orientation: "portrait-primary",
  display: "standalone",
  lang: "ru-RU",
  short_name: "Rick and Morty",
  start_url: "/?source=pwa",
  name: "Rick and Morty PWA",
  scope: "/",
};

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      injectRegister: "auto",
      registerType: "autoUpdate",
      manifest,
      workbox: {
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
        globPatterns: [
          "**/*.{html,css,js,svg,png,ico,webp,jpg,jpeg,woff2}",
          "screenshots/*.webp",
          "icon512_*.png",
        ],
        globIgnores: ["**/node_modules/**"],

        runtimeCaching: [
          {
            urlPattern: ({ request }) => request.mode === "navigate",
            handler: "NetworkFirst",
            options: {
              cacheName: "html-cache",
              networkTimeoutSeconds: 5,
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 7 * 24 * 60 * 60,
              },
            },
          },

          {
            urlPattern: /\.(?:js|css)$/,
            handler: "StaleWhileRevalidate",
            options: {
              cacheName: "static-assets",
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 30 * 24 * 60 * 60,
              },
            },
          },

          {
            urlPattern: /^https:\/\/rickandmortyapi\.com\/api\/character/,
            handler: "NetworkFirst",
            options: {
              cacheName: "rm-characters",
              networkTimeoutSeconds: 5,
              expiration: {
                maxEntries: 200,
                maxAgeSeconds: 7 * 24 * 60 * 60,
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },

          {
            urlPattern: /^https:\/\/rickandmortyapi\.com\/api\/location/,
            handler: "NetworkFirst",
            options: {
              cacheName: "rm-locations",
              networkTimeoutSeconds: 5,
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 30 * 24 * 60 * 60,
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },

          {
            urlPattern: /^https:\/\/rickandmortyapi\.com\/api\/episode/,
            handler: "NetworkFirst",
            options: {
              cacheName: "rm-episodes",
              networkTimeoutSeconds: 5,
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 30 * 24 * 60 * 60,
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },

          {
            urlPattern: /^https:\/\/rickandmortyapi\.com\/api\/.*/,
            handler: "NetworkFirst",
            options: {
              cacheName: "rm-api-general",
              networkTimeoutSeconds: 5,
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 7 * 24 * 60 * 60,
              },
            },
          },

          {
            urlPattern:
              /https:\/\/rickandmortyapi\.com\/api\/character\/avatar\/.*\.jpeg/,
            handler: "CacheFirst",
            options: {
              cacheName: "rm-avatars",
              expiration: {
                maxEntries: 300,
                maxAgeSeconds: 30 * 24 * 60 * 60,
              },
            },
          },

          {
            urlPattern: /\.(?:png|jpg|jpeg|webp|svg|gif)$/,
            handler: "CacheFirst",
            options: {
              cacheName: "images-cache",
              expiration: {
                maxEntries: 200,
                maxAgeSeconds: 60 * 24 * 60 * 60,
              },
            },
          },

          {
            urlPattern: /\/screenshots\/.*\.webp$/,
            handler: "CacheFirst",
            options: {
              cacheName: "screenshots",
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 365 * 24 * 60 * 60,
              },
            },
          },
        ],

        cleanupOutdatedCaches: true,
        ignoreURLParametersMatching: [/^utm_/, /^fbclid$/],
      },

      devOptions: {
        enabled: true,
        type: "module",
        suppressWarnings: true,
      },
    }),
  ],
});
