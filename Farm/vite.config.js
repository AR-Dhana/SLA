export default {
    root: '.',
    server: {
      proxy: {
        '/api': 'http://localhost:5000'
      }
    }
  }
  