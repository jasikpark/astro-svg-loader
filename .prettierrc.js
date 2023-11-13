/** @type {import("prettier").Config & { experimentalTernaries: true }} */
export default {
  proseWrap: "preserve",
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
  experimentalTernaries: true,
};
