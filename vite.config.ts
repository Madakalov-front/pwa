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

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      injectRegister: "auto",
      registerType: "autoUpdate",
      workbox: {
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
        globPatterns: ["**/*.{html,css,js,svg,png,ico,webp,jpg,jpeg}"],
        globIgnores: ["**/node_modules/**", "**/screenshots/*.webp"],
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
            urlPattern: /\/api\/.*/,
            handler: "NetworkFirst",
            options: {
              cacheName: "api-data",
              networkTimeoutSeconds: 3,
              expiration: {
                maxEntries: 30,
                maxAgeSeconds: 24 * 60 * 60,
              },
            },
          },
          {
            urlPattern: /^https:\/\/cdn\.jsdelivr\.net\/.*/,
            handler: "StaleWhileRevalidate",
            options: {
              cacheName: "cdn-images",
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 30 * 24 * 60 * 60,
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
      manifest,
    }),
  ],
});
