import babel from '@rollup/plugin-babel';

export default {
  input: 'src/index.js', // Input file
  output: {
    name: 'useSharedSimpleState', // Name of the exported object
    file: 'dist/index.js', // Output file
    format: 'cjs',
  },
  plugins: [
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
    }),
  ],
};