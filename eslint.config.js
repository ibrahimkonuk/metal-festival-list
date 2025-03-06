import path from "node:path";
import { fileURLToPath } from "node:url";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import jestDom from "eslint-plugin-jest-dom";
import noOnlyTests from "eslint-plugin-no-only-tests";
import preferArrowFunctions from "eslint-plugin-prefer-arrow-functions";
import react from "eslint-plugin-react";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

const config = [
  ...compat.extends(
    "prettier",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
  ),
  {
    ignores: ["dist", "src/api/generated"],
  },
  {
    plugins: {
      react,
      "@typescript-eslint": tseslint,
      "no-only-tests": noOnlyTests,
      "prefer-arrow-functions": preferArrowFunctions,
      "jest-dom": jestDom,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "react/prop-types": "off",
      "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/no-shadow": "error",
      "no-shadow": "off",
      "react/no-unknown-property": ["error", { ignore: ["jsx", "css"] }],
      "no-use-before-define": "off",
      "no-const-assign": "error",
      "prefer-const": "error",
      eqeqeq: ["error", "always"],
      "no-only-tests/no-only-tests": "error",
      "prefer-arrow-functions/prefer-arrow-functions": "error",
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],
      "@typescript-eslint/no-use-before-define": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/explicit-module-boundary-types": "error",
      "react/react-in-jsx-scope": "off", // Moved to the correct location
    },
  },
];

export default config;
