export default {
  input: 'src/index.js', // Input file
  output: {
    name: 'useSharedSimpleState', // Name of the exported object
    file: 'dist/index.js', // Output file
    format: 'es',
    sourcemap: true,
  },
  external: ['react'],
};