module.exports = {
    devServer: {
        proxy: { // proxyTable 설정
            '/api': {
                target: 'http://localhost:8000',
                changeOrigin: true
            }
        }
    }
}