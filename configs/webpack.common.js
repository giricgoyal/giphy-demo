// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin')
var path = require('path')

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: 'bundle-dev.js',
        path: path.resolve(__dirname, '..', 'dist'),
        publicPath: '/',
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.json', '.html'],
        modules: ['node_modules', path.resolve(__dirname, '..', 'src')],
    },
    resolveLoader: {
        modules: ['node_modules'],
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                use: ['ts-loader'],
                exclude: /node_modules/,
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                use: ['source-map-loader'],
            },
            {
                test: /\.css$/,
                exclude: /\.useable\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.useable\.css$/,
                use: ['style-loader/useable', 'css'],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /bootstrap\/js\//,
                use: ['imports-loader?jQuery=jquery'],
            },
            {
                test: /bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/,
                use: ['imports-loader?jQuery=jquery'],
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                use: ['html-loader'],
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: ['url-loader?limit=10000&mimetype=application/font-woff'],
            },
            {
                test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: ['file-loader'],
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'svg-sprite-loader',
                        options: {
                            symbolId: `[name]`,
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            hash: true,
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'window.jquery': 'jquery',
        }),
        new ESLintPlugin({
            extensions: ['ts', 'tsx'],
        }),
        new SpriteLoaderPlugin(),
    ],
}
