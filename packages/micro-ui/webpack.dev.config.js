const path = require('path');
const webpack = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = require('./webpack.config');

config.mode = 'development';

config.plugins = config.plugins.concat([
    new webpack.HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin(),
    new HtmlWebpackPlugin({
        template: 'index.html'
    })
]);

config.entry = [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.js',
];

config.devServer = {
    index: 'index.html',
    open: true,
    watchOptions: {
        aggregateTimeout: 200,
        poll: false,
    },
    stats: 'errors-only',
    port: 8080,
    https: true,
    hot: true,
    inline: true,
    disableHostCheck: true,
    publicPath: 'https://localhost:8080/'
};

module.exports = config;