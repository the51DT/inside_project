const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: 'dist',
  /* webpack config 옵션 추가 */
  configureWebpack: {
    plugins: []
  },

  /* 옵션 체이닝 */
  chainWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      // mutate config for production...
    } else {
      // mutate for development...
    }
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@/assets/scss/index.scss";
        `
      }
    }
  }
})
