// Learn more https://docs.expo.io/guides/customizing-metro
const path = require("path");
const { getDefaultConfig } = require("expo/metro-config");
const withStorybook = require("@storybook/react-native/metro/withStorybook");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

module.exports = withStorybook(config, {
  // eslint-disable-next-line prettier/prettier
  enabled: process.env.STORYBOOK_ENABLED === "true",
  // Path to your storybook config
  configPath: path.resolve(__dirname, "./.storybook"),
});
