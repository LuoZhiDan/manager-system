/* 
    开发时webpack的配置文件
*/

const webpack = require('webpack');
const path = require('path');
const htmlWebpackHtml = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = {
    entry : {
        app : ['./src/index.js', 'webpack-hot-middleware/client?reload=true']
    },
    devtool: 'inline-source-map',
    module : {
        rules : [{
            test: /\.css$/,
            use : ['style-loader','css-loader']
        },{
            test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/,
            use: ['file-loader']
        }]
    },
    plugins : [
        new CleanWebpackPlugin(),
        new htmlWebpackHtml({
            title : '管理系统',
            template : './src/index.html'
        }),
        new webpack.HotModuleReplacementPlugin
    ],

    output : {
        path: path.resolve(__dirname, 'dist'),
        filename : '[name].bundle.js',
        publicPath: '/'
    }
}