module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            components: './src/components',
            config: './src/config',
            providers: './src/providers',
            screens: './src/screens',
            assets: './src/assets',
          },
        },
      ],
    ],
  };
};
