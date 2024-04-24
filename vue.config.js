const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  // outputDir: '__temp__',
  productionSourceMap: false,
  transpileDependencies: true,
  assetsDir: 'static',
  lintOnSave: false,
    pages: {
        // 先配置主页
        index: {
            entry: './src/main.js',
            template: './public/index.html',
            title: 'AoMiura\'s Home'
        },
        // 再配置各个子页面：登录后课表查询页
        notfound: {
            entry: './src/main.js',
            template: './public/404.html',
            title: 'AoMiura\'s Home'
        }
    }
})
