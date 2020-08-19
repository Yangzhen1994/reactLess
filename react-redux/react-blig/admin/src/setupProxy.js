/**
 * @Description:开发环境代理
 * @author: YaphetS丶yz
 * @date: 2020/7/29various_young:
 */
const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(createProxyMiddleware('/admin', {
    target: 'http://39.104.170.215:7001' ,
        secure: false,
        changeOrigin: true,

    // cookieDomainRewrite: "http://localhost:3000"
    }));
};
