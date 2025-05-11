import { defineConfig, passthroughImageService } from "astro/config";
const isDev = import.meta.env.DEV;

export default defineConfig({
  image: {
    service: passthroughImageService(),
  },
  devToolbar: {
    enabled: false,
  },
  site: isDev ? "http://localhost:4321" : "https://damien.zone",
  compressHTML: false,
});
