// @ts-check

import eslint from "@eslint/js";
import eslintPluginAstro from "eslint-plugin-astro";
import tseslint from "typescript-eslint";
import { flatConfigs as importFlatConfigs } from "eslint-plugin-import";

export default tseslint.config(
  {
    ignores: ["dist", ".astro/"],
  },
  eslint.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        // @ts-expect-error -- dirname is missing on the type :shrug:
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],
    },
  },
  importFlatConfigs.recommended,
  importFlatConfigs.typescript,
  {
    settings: {
      "import/resolver": {
        typescript: true,
      },
    },
  },
  ...eslintPluginAstro.configs["jsx-a11y-recommended"],
);
