'use strict'
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  // 基本路径
  publicPath: './',
  outputDir: 'dist',
  devServer: {
    port: 3000,
    open: true,
    overlay: {
      warnings: false,
      errors: true,
      autoOpenBrowser: false
    }
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-pxtorem')({
            // 把px单位换算成rem单位
            rootValue: 75, // 换算的基数(设计图750的根字体为75)
            // selectorBlackList: ['weui', 'mu'], // 忽略转换正则匹配项
            propList: ['*']
          })
        ]
      }
    }
  },
  configureWebpack: {
    name: '全局标题',
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  }
}
