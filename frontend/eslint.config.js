import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";

export default [
  js.configs.recommended,
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      sourceType: "module",
    },
    plugins: {
      react,
    },
    rules: {
      // your rules here
    },
    settings: {
      react: {
        version: "detect", // ✅ auto-detect React version
      },
    },
  },
];
