const path = require('path')

// vue.config.js
const Timestamp = new Date().getTime();

module.exports = {
  configureWebpack: { // webpack 配置
    output: { // 输出重构  打包编译后的 文件名称  【模块名称.版本号.时间戳】
      filename: `[name].${process.env.VUE_APP_Version}.${Timestamp}.js`,
      chunkFilename: `[name].${process.env.VUE_APP_Version}.${Timestamp}.js`
    },
  },
  publicPath: './',
  lintOnSave: false,
  productionSourceMap: false,
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/assets/styles/_vars.scss"; @import "~element-ui/packages/theme-chalk/src/common/var";`
      }
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('services', path.resolve(__dirname, './src/services'))
      .set('utils', path.resolve(__dirname, './src/utils'))
  },
  devServer: {
    // 端口配置
    port: 8081, //
    // 反向代理配置
    proxy: {
      '/api': {
        target: 'https://dc.3.cn/category', //localhost:36742   http://192.168.137.1:8083   // 测试电脑   //这个是线上部署的版本
        ws: true,
        pathRewrite: {
          '^/api': '127.0.0.1'
        }
      }
    }
  }
}
