module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/strict-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "plugin:astro/recommended",
    "plugin:jsx-a11y/recommended",
  ],
  plugins: ["@typescript-eslint", "import", "jsx-a11y"],
  overrides: [
    // By default eslint only lints .js.  Adding others to overrides will cause them to lint as well
    // https://eslint.org/docs/user-guide/migrating-to-7.0.0#lint-files-matched-by-overridesfiles-by-default
    { files: ["*.ts", "*.tsx", "*.jsx"] },
    // All .cjs & .cts files and eslint rules are commonjs, which means they're processed by node and can use require()
    {
      files: ["*.cjs", "*.cts", "eslint-rules/*.js"],
      env: { node: true },
    },
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
    },
  ],
};
