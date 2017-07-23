import babel from 'rollup-plugin-babel'
import babili from 'rollup-plugin-babili'
import cleanup from 'rollup-plugin-cleanup'
import pkg from './package.json'

// let external = Object.keys(pkg.dependencies)
let plugins = [
  babel({
    exclude: [ '*.json', 'node_modules/**/*' ],
    runtimeHelpers: true
  }),
  babili({
    comments: false
  }),
  cleanup({
    extensions: [ '.js', '.mjs' ],
    comments: 'none'
  })
]

export default {
  entry: 'index.js',
  // external,
  plugins,
  targets: [
    {
      dest: pkg.main,
      format: 'umd',
      moduleName: 'base-65503',
      sourceMap: false
    },
    {
      dest: pkg.module,
      format: 'es',
      sourceMap: false
    }
  ],
  onwarn: ({ code, message }) => {
    // Suppress the following error message:
    // https://github.com/rollup/rollup/wiki/Troubleshooting#this-is-undefined
    if (code === 'THIS_IS_UNDEFINED') return
    console.error(message)
  }
}
