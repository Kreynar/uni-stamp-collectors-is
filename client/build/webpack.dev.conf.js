// /* eslint-disable */
// 'use strict'
// const utils = require('./utils')
// const webpack = require('webpack')
// const config = require('../config')
// const merge = require('webpack-merge')
// const baseWebpackConfig = require('./webpack.base.conf')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
// const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
// const portfinder = require('portfinder')
//
// const devWebpackConfig = merge(baseWebpackConfig, {
//   module: {
//     rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap, usePostCSS: true })
//   },
//   // cheap-module-eval-source-map is faster for development
//   devtool: config.dev.devtool,
//
//   // these devServer options should be customized in /config/index.js
//   devServer: {
//     clientLogLevel: 'warning',
//     historyApiFallback: true,
//     hot: true,
//     compress: true,
//     host: process.env.HOST || config.dev.host,
//     port: process.env.PORT || config.dev.portOfWebserver,
//     open: config.dev.autoOpenBrowser,
//     overlay: config.dev.errorOverlay ? {
//       warnings: false,
//       errors: true,
//     } : false,
//     publicPath: config.dev.assetsPublicPath,
//     proxy: config.dev.proxyTable,
//     quiet: true, // necessary for FriendlyErrorsPlugin
//     watchOptions: {
//       poll: config.dev.poll,
//     }
//   },
//   plugins: [
//     new webpack.DefinePlugin({
//       'process.env': require('../config/dev.env')
//     }),
//     new webpack.HotModuleReplacementPlugin(),
//     new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
//     new webpack.NoEmitOnErrorsPlugin(),
//     // https://github.com/ampedandwired/html-webpack-plugin
//     new HtmlWebpackPlugin({
//       filename: 'index.html',
//       template: 'index.html',
//       inject: true
//     }),
//   ]
// })
//
// module.exports = new Promise((resolve, reject) => {
//   portfinder.basePort = process.env.PORT || config.dev.portOfWebserver
//   portfinder.getPort((err, port) => {
//     if (err) {
//       reject(err)
//     } else {
//       // publish the new Port, necessary for e2e tests
//       process.env.PORT = port
//       // add port to devServer config
//       devWebpackConfig.devServer.portOfWebserver = port
//
//       // Add FriendlyErrorsPlugin
//       devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
//         compilationSuccessInfo: {
//           messages: [`Your application is running here: http://${config.dev.host}:${port}`],
//         },
//         onErrors: config.dev.notifyOnErrors
//         ? utils.createNotifierCallback()
//         : undefined
//       }))
//
//       resolve(devWebpackConfig)
//     }
//   })
// })
var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})

module.exports = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: '#cheap-module-eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    new FriendlyErrorsPlugin()
  ]
})
