const path = require('path')
const webpack = require('webpack')
const autohtml = require('html-webpack-plugin')
const bundleanalyzerplugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
// Create multiple instances
module.exports = {
    entry: {
        index: './test11152.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        }]
    },
    devServer: {
        host: '0.0.0.0',
        port: 8888
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new autohtml({
            title: 'test webpack',
            template: './index.html',
            hash: true
        }), new bundleanalyzerplugin({
            analyzerPort: 8889
        })
    ]

};