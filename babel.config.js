module.exports = {
  plugins: [
    [
      '@babel/plugin-proposal-class-properties',
      {
        loose: true,
      },
    ],
  ],
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        loose: true,
      },
    ],
    '@babel/react',
  ],
  env: {
    test: {
      presets: ['module:metro-react-native-babel-preset'],
      plugins: ['@babel/plugin-proposal-class-properties'],
    },
  },
  exclude: '/example/',
};
