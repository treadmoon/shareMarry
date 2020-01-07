module.exports = {
  devServer: {
    port: '81',
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy:
    {
      // '/cgi-bin': {
      //   target: 'https://api.weixin.qq.com/',
      //   secure: false,
      //   changeOrigin: true
      // },
      '/api': {
        target: 'http://127.0.0.1/',
        changeOrigin: true,
        pathRewrite: { '^/api': '' }
      }
    }

  }
}