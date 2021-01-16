import typescript from 'rollup-plugin-typescript2'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import pkg from './package.json'
import camelCase from 'lodash.camelcase'
import { terser } from 'rollup-plugin-terser'

const production = !process.env.ROLLUP_WATCH
const outputName = camelCase(pkg.name)
const outputDir = 'dist'

export default {
  input: 'src/index.ts',
  output: [
    {
      file: `${outputDir}/${outputName}.cjs${production ? '.min' : ''}.js`,
      format: 'cjs',
      sourcemap: true,
      name: outputName,
    },
    {
      file: `${outputDir}/${outputName}.iife${production ? '.min' : ''}.js`,
      format: 'iife',
      sourcemap: true,
      name: outputName,
    },
    {
      file: `${outputDir}/${outputName}.umd${production ? '.min' : ''}.js`,
      format: 'umd',
      sourcemap: true,
      name: outputName,
    },
    {
      file: `${outputDir}/${outputName}.es${production ? '.min' : ''}.js`,
      format: 'es',
      sourcemap: true,
    },
  ],
  external: [...Object.keys(pkg.dependencies || {})],
  plugins: [
    typescript({
      typescript: require('typescript'),
    }),
    production && terser(),
    resolve(),
    commonjs({
      include: 'node_modules/**',
    }),
  ],
}
