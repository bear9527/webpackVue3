
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
//     entry: './src/main.js',
entry: [resolve(__dirname, './src/main.js')],
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
                options: {
                    limit: 8 * 1024,    //图片小于8kb会被转为bese64
                    name: '[hash:10].[ext]',
                    outputPath:'images'
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
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                // target: ['node', 'es5'],
                options: {
                    presets: [
                        [
                            '@babel/preset-env',
                            {
                                useBuiltIns: 'usage',
                                corejs: 3,
                                targets: {
                                    chrome: '60',
                                    firefox: "60",
                                    ie: '9',
                                    safari: '10',
                                    edge: '17'
                                }
                            }
                        ]
                    ],
                    //利用 @babel/plugin-transform-runtime 插件还能以沙箱垫片的方式防止污染全局， 并抽离公共的 helper function , 以节省代码的冗余
                    "plugins": [
                        [
                            "@babel/plugin-transform-runtime", 
                            {
                                "corejs": 3
                            }
                        ]
                    ]
                }
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
