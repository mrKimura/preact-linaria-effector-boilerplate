/* eslint-disable import/no-commonjs, no-undef, import/no-extraneous-dependencies */
const { resolve } = require('path')
const stylis = require('stylis')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const { src, dist } = require('./paths')

stylis.set({ prefix: false })

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

const optimize = () => {
  const config = {}

  if (isDev) {
    // config.output.pathinfo = false
    removeAvailableModules = false
    removeEmptyChunks = false
    splitChunks = false
  }

  if (isProd) {
    config.minimizer = [new TerserPlugin(), new OptimizeCssAssetsPlugin()]
  }

  return config
}

const fileName = ext => (isDev ? `[name].${ext}` : `[name].[contenthash:8].${ext}`)

const plugins = () => {
  const base = [
    new MiniCssExtractPlugin({
      filename: fileName('css'),
    }),
    new HtmlWebpackPlugin({
      template: resolve(src, 'static/index.html'),
      minify: false,
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: resolve(src, 'static/**/*'),
          to: dist,
          toType: 'dir',
          flatten: true,
          globOptions: {
            ignore: ['**/index.html'],
          },
        },
      ],
    }),
    new ForkTsCheckerWebpackPlugin(),
  ]

  if (isProd) base.push(new BundleAnalyzerPlugin())

  return base
}

module.exports = (env, args) => {
  return {
    entry: {
      selection: resolve(src, isDev ? 'bootstrap-dev.tsx' : 'bootstrap-prod.tsx'),
    },
    output: {
      path: dist,
      filename: fileName('js'),
    },
    target: 'web',
    mode: isProd ? 'production' : 'development',
    devtool: isDev ? 'source-map' : false,
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.html'],
      alias: {
        react: 'preact/compat',
        'react-dom': 'preact/compat',
        ui: resolve(src, 'ui'),
        lib: resolve(src, 'lib'),
      },
    },
    optimization: optimize(),
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [
                  ['@babel/preset-env', { targets: { esmodules: true } }],
                  ['@babel/preset-typescript', { jsxPragma: 'h' }],
                  'linaria/babel',
                ],
                plugins: [
                  ['@babel/transform-react-jsx', { pragma: 'h' }],
                  ['effector/babel-plugin', { addLoc: true }],
                ],
              },
            },
            {
              loader: 'linaria/loader',
              options: {
                sourceMap: isDev,
              },
            },
          ],
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                hmr: isDev,
              },
            },
            {
              loader: 'css-loader',
              options: {
                sourceMap: isDev,
              },
            },
            {
              loader: 'postcss-loader',
            },
          ],
        },
      ],
    },
    devServer: {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      contentBase: false,
      compress: true,
      port: 1234,
      host: '0.0.0.0',
      disableHostCheck: true,
    },
    plugins: plugins(),
  }
}
