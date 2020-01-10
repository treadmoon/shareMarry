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
        target: 'http://111.230.241.251:4396/',
        changeOrigin: true
      }
    }

  }
}