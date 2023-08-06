// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');
const deckOfCardsPath = '/home/mike/WebstormProjects/deck_of_cards'

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname, {
  // [Web-only]: Enables CSS support in Metro.
  isCSSEnabled: true,
});

module.exports = {...config, resolver: {
  ...config.resolver,
  nodeModulesPaths: [...config.resolver.nodeModulesPaths, deckOfCardsPath],
    watchFolders: [...config.watchFolders, deckOfCardsPath]
  }};
