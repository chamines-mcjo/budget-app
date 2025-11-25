// Learn more https://docs.expo.io/guides/customizing-metro
// const path = require("path");
const { getDefaultConfig } = require("expo/metro-config");
const {
  withStorybookConfig,
} = require("@storybook/react-native/metro/withStorybookConfig");

/** @type {import('expo/metro-config').MetroConfig} */
const defaultConfig = getDefaultConfig(__dirname);

module.exports = withStorybookConfig(defaultConfig, {
  enabled: process.env.STORYBOOK_ENABLED === "true",
  onDisabledRemoveStorybook: true,
});
