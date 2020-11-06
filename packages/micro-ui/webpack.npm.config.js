const webpack = require('webpack');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

const config = require('./webpack.config');

config.mode = 'production';

config.entry = './src/MicroUi/index.js'

config.output = {
    path: path.resolve(__dirname, 'lib'),
    filename: 'index.js'
};

config.externals = {
    "react": "React",
    "react-dom": "ReactDOM"
}

config.optimization = {
    minimize: false
}

module.exports = config;
