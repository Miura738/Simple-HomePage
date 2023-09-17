const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  outputDir: '__temp__',
  productionSourceMap: false,
  transpileDependencies: true,
  assetsDir: 'static',
  lintOnSave: false
})
