/* eslint-disable import/no-commonjs, no-undef */
const presets = [
  ['@babel/preset-env', { targets: { esmodules: true } }],
  ['@babel/preset-typescript', { jsxPragma: 'h' }],
  'linaria/babel',
]
const plugins = [
  ['@babel/transform-react-jsx', { pragma: 'h' }],
  ['effector/babel-plugin', { addLoc: true }],
]

module.exports = {
  presets,
  plugins,
}
