/* eslint-disable import/no-commonjs, no-undef, import/no-extraneous-dependencies, import/no-dynamic-require */
const { resolve } = require('path')

const { path: root } = require('app-root-path')

const src = resolve(root, 'src')
const dist = resolve(root, 'dist')

module.exports = {
  src,
  dist,
}
