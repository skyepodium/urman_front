module.exports = {
    devServer: {
        proxy: { // proxyTable 설정
            '/api': {
                target: 'http://localhost:80',
                changeOrigin: true
            }
        }
    }
}