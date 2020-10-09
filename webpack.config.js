/* eslint-disable import/no-commonjs, no-undef, import/no-dynamic-require */
const { resolve } = require('path')

module.exports = require(resolve(__dirname, 'webpack', `webpack.config`))
