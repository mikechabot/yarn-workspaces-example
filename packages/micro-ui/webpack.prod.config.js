const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

const config = require('./webpack.config');

config.mode = 'production';

/**
 * https://webpack.js.org/configuration/optimization/#optimization
 */
config.optimization = {
    // Create the vendor chunk
    splitChunks: {
        cacheGroups: {
            commons: {
                test: /[\\/]node_modules[\\/]/,
                name: `vendor`,
                chunks: 'initial',
            },
        },
    },
    // Tell Webpack to use the "minimizer"
    minimize: true,
    // Apply TerserPlugin
    minimizer: [
        new TerserPlugin({
            parallel: true,
            terserOptions: {
                keep_classnames: true,
                keep_fnames: true,
            },
        }),
    ],
}

module.exports = config;
