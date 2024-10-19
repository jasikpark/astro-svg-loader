import { defineConfig } from "astro/config";

export default defineConfig({
  vite: {
    // @ts-expect-error -- we can put vitest config here.
    test: {
      sequence: {
        shuffle: true,
      },
    },
  },
});
