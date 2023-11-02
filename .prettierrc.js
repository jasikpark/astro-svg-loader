/** @type {import("prettier").Config} */
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
};
