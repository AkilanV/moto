// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');
 module.exports = function(app) {
   app.use(createProxyMiddleware('/http://dev.vvinspect.com', { target: '' }));
};