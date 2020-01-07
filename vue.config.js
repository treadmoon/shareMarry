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
      '/': {
        target: 'http://192.168.0.101:4396/',
        changeOrigin: true
      }
    }

  }
}