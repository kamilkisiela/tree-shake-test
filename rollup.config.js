import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

const isProd = process.env.PROD === 'true';

export default (isProd
  ? {
      input: 'index.js',
      output: {
        file: 'bundle-rollup.prod.js',
        format: 'cjs',
      },
      plugins: [resolve(), commonjs(), terser()],
    }
  : {
      input: 'index.js',
      output: {
        file: 'bundle-rollup.js',
        format: 'cjs',
      },
      plugins: [resolve(), commonjs()],
    });
