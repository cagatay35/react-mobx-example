const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');

module.exports = {
    entry: "./src/index.js",
    module: {
        rules: [

            {
                test: /wow\.js$/,
                use: [ 'script-loader' ]
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/

            },
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg|ico|eot|ttf|woff|woff2|mp4)$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]'
                }
            }]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),

    new HtmlWebpackPlugin({
        template: path.join(__dirname, './src/index.html'),
        inject: true,
        inlineSource: 'sass-loader!style-loader!.s?css$',
        minify: {
            collapseWhitespace: true,
            preserveLineBreaks: true
        }
    }),
    new HtmlWebpackInlineSourcePlugin()

    ],
    devServer: {
        contentBase: './dist',
        hot: true
    }
};