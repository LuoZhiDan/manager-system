/* 
    开发环境时启动的服务器
*/

const express = require('express');
const webpack = require('webpack');
const proxy = require('http-proxy-middleware');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');


const app = express();
const config = require('./webpack.config.dev');
const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

app.use(webpackHotMiddleware(compiler));

app.use('/rest', proxy({target : 'http://127.0.0.1:8001', changeOrigin: true}));


// Serve the files on port 8000.
app.listen(8000, ()=>{
    setInterval(function(){
        console.log("cilent is listening 8000")
    }, 5000)
});