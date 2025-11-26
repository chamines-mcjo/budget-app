// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require("eslint/config");
const expoConfig = require("eslint-config-expo/flat");
const eslintConfigPrettier = require("eslint-config-prettier/flat");
const eslintPluginPrettierRecommended = require("eslint-plugin-prettier/recommended");

module.exports = defineConfig([
  expoConfig,
  eslintConfigPrettier,
  eslintPluginPrettierRecommended,
  {
    ignores: ["dist/*"],
    rules: {
      "prettier/prettier": "error",
    },
  },
]);
