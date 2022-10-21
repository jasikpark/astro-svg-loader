import { defineConfig } from "astro/config";

export default defineConfig({
  vite: {
    test: {
      sequence: {
        shuffle: true,
      },
    },
  },
});
