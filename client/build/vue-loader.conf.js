// 'use strict'
// const utils = require('./utils')
// const config = require('../config')
// const isProduction = process.env.NODE_ENV === 'production'
// const sourceMapEnabled = isProduction
//   ? config.build.productionSourceMap
//   : config.dev.cssSourceMap
//
//
// module.exports = {
//   loaders: utils.cssLoaders({
//     sourceMap: sourceMapEnabled,
//     extract: isProduction
//   }),
//   cssSourceMap: sourceMapEnabled,
//   cacheBusting: config.dev.cacheBusting,
//   transformToRequire: {
//     video: 'src',
//     source: 'src',
//     img: 'src',
//     image: 'xlink:href'
//   }
// }
const utils = require('./utils')
const config = require('../config')
const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: isProduction
      ? config.build.productionSourceMap
      : config.dev.cssSourceMap,
    extract: isProduction
  }),
  transformToRequire: {
    video: 'src',
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  }
}
