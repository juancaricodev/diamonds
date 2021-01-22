module.exports = {
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'Diamond'
        return args
      })
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/styles/global.scss";
        `
      }
    }
  }
}
