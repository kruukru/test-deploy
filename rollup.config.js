import resolve from '@rollup/plugin-node-resolve';
import html from '@web/rollup-plugin-html';

export default {
  input: 'index.html',
  output: {
    entryFileNames: '[name].js',
    chunkFileNames: '[hash].js',
    dir: 'dist'
  },
  plugins: [resolve(), html()]
}
