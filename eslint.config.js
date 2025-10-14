// @ts-check

import eslint from "@eslint/js";
import { configs as astroConfigs } from "eslint-plugin-astro";
import { configs as typescriptConfigs } from "typescript-eslint";
import { flatConfigs as importFlatConfigs } from "eslint-plugin-import-x";
import { createTypeScriptImportResolver } from "eslint-import-resolver-typescript";
import { defineConfig } from "eslint/config";

export default defineConfig(
  {
    ignores: ["dist", ".astro/"],
  },
  eslint.configs.recommended,
  ...typescriptConfigs.strictTypeChecked,
  ...typescriptConfigs.stylisticTypeChecked,
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
  importFlatConfigs.recommended,
  importFlatConfigs.typescript,
  {
    settings: {
      "import-x/resolver-next": [createTypeScriptImportResolver()],
    },
  },
  ...astroConfigs["jsx-a11y-recommended"],
);
