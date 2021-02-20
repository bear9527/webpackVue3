
const { resolve } = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require('vue-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/main.js',
    output: {
        filename: 'js/built.js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [
                    //这个loader 取代style-loader,拆分js里的css
                    {
                        loader:MiniCssExtractPlugin.loader,
                        options:{
                            publicPath:'/'
                        }
                    },
                    //'style-loader',
                    'css-loader'
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader', 'sass-loader'],
            },
            {
                test: /\.(jpg|png|gif)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    outputPath: 'images'
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                exclude: /\.(html|vue|js|css|scss|jpg|png|gif)/,
                loader: 'file-loader',
                options: {
                    name: '[hash:10].[ext]',
                    outputPath: 'media'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(__dirname, './index.html'),
            filename: 'index.html',
            title: '我是生产环境打包的文件'
        }),
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "css/[name].[chunkhash:8].css",
            chunkFilename: "[id].css"
        })
    ]
}
