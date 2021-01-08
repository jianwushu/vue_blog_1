
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/admin/" : "/",
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
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    open: true,
    proxy:{
      [process.env.VUE_APP_BASE_API]: {
        target: `http://192.168.2.100:80`,
        changeOrigin: true,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      }
    }


  }
}

