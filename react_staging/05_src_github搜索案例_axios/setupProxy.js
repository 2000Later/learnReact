const proxy = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(
        proxy('/api1',{//遇见 /api1前缀的请求，就会触发该代理配置
            target: 'http://localhost:5000', //请求转发给谁
            changeOrigin: true, //控制服务器接收到的host字段
            pathRewrite: {'^/api1': ''}// 去除请求前缀，保证给服务器的请求路径是正常的请求地址(必须配置)
        })
    )
}