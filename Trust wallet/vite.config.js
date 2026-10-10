export default {
  server: {
    port: 3000,
    host: true,
    proxy: {
      '/api/coingecko': {
        target: 'https://api.coingecko.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/coingecko/, '/api/v3')
      }
    }
  },
  preview: {
    port: 3000,
    host: true
  }
}
