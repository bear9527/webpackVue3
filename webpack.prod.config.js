
const { resolve } = require('path');

//生成html
const HtmlWebpackPlugin = require("html-webpack-plugin");

// vueloader
const { VueLoaderPlugin } = require('vue-loader');

// 分离css
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// 打包前清空文件夹
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
//css压缩插件
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

//设置nodejs的环境变量
process.env.NODE_ENV = 'production';

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
                    //'style-loader',
                    //这个loader 取代style-loader,拆分js里的css
                    {
                        loader:MiniCssExtractPlugin.loader,
                        options:{
                            publicPath:'/'
                        }
                    },
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                    }
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                    {
                        loader: 'postcss-loader',
                    }
                ],
            },
            {
                test: /\.(jpg|png|gif)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    outputPath: 'images'
                }
            },
//             {
//                 test: /\.js$/,
//                 exclude: /node_modules/,
//                 use: [
//                     {
//                         loader: 'eslint-loader',
//                         options: {
//                             // 自动修复
//                             fix: true
//                         }
//                     }
//                 ]
//             },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader:'babel-loader',
                options: {
                    // 预设：指示babel做怎样的兼容性处理
                    presets: [
                    '@babel/preset-env', // 基本预设
                    {
                        useBuiltIns: 'usage', //按需加载
                        corejs: { version: 3 }, // 指定core-js版本
                        // targets: { // 指定兼容到什么版本的浏览器
                        //     chrome: '60',
                        //     firefox: '50',
                        //     ie: '9',
                        //     safari: '10',
                        //     edge: '17'
                        // },
                    }
                    ],
                },
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
        }),
        new OptimizeCssAssetsWebpackPlugin()
    ]
}
