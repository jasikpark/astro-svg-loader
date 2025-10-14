import eslint from "@eslint/js";
import { configs as astroConfigs } from "eslint-plugin-astro";
import { configs as typescriptConfigs } from "typescript-eslint";
import { flatConfigs as importFlatConfigs } from "eslint-plugin-import-x";
import { createTypeScriptImportResolver } from "eslint-import-resolver-typescript";
import { defineConfig } from "eslint/config";
import type { ConfigWithExtends } from "@eslint/config-helpers";

import { fileURLToPath } from "node:url";
import { dirname } from "node:path";
const __dirname = dirname(fileURLToPath(import.meta.url));

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
        tsconfigRootDir: __dirname,
      },
    },
    rules: {
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],
    },
  },
  importFlatConfigs.recommended as ConfigWithExtends,
  importFlatConfigs.typescript as ConfigWithExtends,
  {
    settings: {
      "import-x/resolver-next": [createTypeScriptImportResolver()],
    },
  },
  ...astroConfigs.recommended,
  ...astroConfigs["jsx-a11y-recommended"],
);
