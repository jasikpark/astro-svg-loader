// @ts-check

import eslint from "@eslint/js";
import eslintPluginAstro from "eslint-plugin-astro";
import tseslint from "typescript-eslint";
import { flatConfigs as importFlatConfigs } from "eslint-plugin-import";
import { defineConfig } from "eslint/config";

export default defineConfig(
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
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],
    },
  },
  // @ts-expect-error - mismatched config types, but i don't care
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
