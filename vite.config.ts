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
  start_url: "/",
  name: "rick_and_morty",
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
        globPatterns: ["**/*.{html,css,js,svg,png,ico}"],
        maximumFileSizeToCacheInBytes: 3000000,
      },
      manifest,
    }),
  ],
});
