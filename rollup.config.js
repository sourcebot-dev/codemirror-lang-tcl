import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/index.js',
    format: 'es'
  },
  plugins: [
    nodeResolve(),
    typescript()
  ],
  external: [
    '@codemirror/language',
    '@codemirror/highlight',
    '@lezer/common',
    '@lezer/highlight',
    '@lezer/lr'
  ]
};