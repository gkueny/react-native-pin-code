import babel from 'rollup-plugin-babel';

module.exports = {
  input: 'src/pin-code.js',
  output: {
    file: 'exemple/simpleExemple/lib/pin-code.js',
    format: 'cjs',
  },
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
  ],
  // indicate which modules should be treated as external
  external: ['react', 'react-native'],
};
