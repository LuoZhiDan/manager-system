/* 
    开发环境时启动的服务器
*/

const express = require('express');
const webpack = require('webpack');
const proxy = require('http-proxy-middleware');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');


const app = express();

// 加载静态文件
app.use(express.static('./src'));

const config = require('./webpack.config.dev');
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
}));

app.use(webpackHotMiddleware(compiler));

// rest 请求使用代理访问后端服务器
app.use('/rest', proxy({
    target: 'http://127.0.0.1:8001',
    changeOrigin: true
}));


// Serve the files on port 8000.
app.listen(8000, () => {
    console.log("cilent is listening 8000")
});