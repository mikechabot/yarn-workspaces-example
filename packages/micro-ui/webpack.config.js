const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, '../../dist/micro-ui/bundle'),
        filename: 'micro-ui.[name].js',
        library: ["MicroUi", "[name]"],
        libraryTarget: 'this'
    },
    plugins: [
        new CleanWebpackPlugin(),
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', 'scss'],
    },
    resolveLoader: {
        modules: ['node_modules', path.resolve(__dirname, '../../node_modules')],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
};
