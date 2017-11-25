/* 
    开发时webpack的配置文件
*/

const webpack = require('webpack');
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    entry : {
        app : ['./main.js', 'webpack-hot-middleware/client?reload=true'],
        common : ['jquery', 'angular', 'angular-ui-router', 'oclazyload']
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
        new webpack.optimize.CommonsChunkPlugin('common'),
        new CleanWebpackPlugin(),
        new htmlWebpackPlugin({
            title : '管理系统',
            template : './main.html'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new OpenBrowserPlugin({ url: 'http://localhost:8000' })
    ],

    output : {
        path: path.resolve(__dirname, 'dist'),
        filename : '[name].bundle.js',
        chunkFilename : '[name].chunk.js',
        publicPath: '/'
    }
}