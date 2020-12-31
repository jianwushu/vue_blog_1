module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'components': '@/components',
        'views': '@/views',
        'utils': '@/utils'
      }
    }
  },
  devServer:{
    port:8081
  }
}

