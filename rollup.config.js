import cleanup from 'rollup-plugin-cleanup'
import pkg from './package.json'

let plugins = [
  cleanup({
    extensions: [ '.js', '.mjs' ],
    comments: 'none'
  })
]

export default {
  entry: 'index.js',
  plugins,
  targets: [
    {
      dest: pkg.main,
      format: 'umd',
      moduleName: 'base-65503',
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
