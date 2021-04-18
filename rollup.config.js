const commonjs = require('rollup-plugin-commonjs');
const ignore = require('rollup-plugin-ignore');
const resolve = require('rollup-plugin-node-resolve');

// rollup.config.js
export default {
  input: 'suite.js',
  output: {
    file: './dist/benchmarks.js',
    format: 'cjs'
  },
  plugins: [
    ignore(['crypto']),
    commonjs(),
    resolve()
  ]
};
