
const path = require('path');

//生成html
const HtmlWebpackPlugin = require("html-webpack-plugin");

// vueloader
const { VueLoaderPlugin } = require('vue-loader');

// 分离css
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// 打包前清空文件夹
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
//css压缩插件
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

const CommonCssLoader = [
    //'style-loader',
    //这个loader 取代style-loader,拆分js里的css
    {
        loader: MiniCssExtractPlugin.loader,
        options: {
            publicPath: '/'
        }
    },
    'css-loader',
    {
        loader: 'postcss-loader',
    }
]

//设置nodejs的环境变量
process.env.NODE_ENV = 'production';

module.exports = {
    mode: 'production',
    //     entry: './src/main.js',
    entry: {
        pageOne: path.resolve(__dirname, './src/main.js'), //打包入口
        // pageTwo: path.resolve(__dirname, './src/main2.js'), //打包入口
    },
    output: {
        filename: 'js/built[contenthash:10].js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                enforce: 'pre',
                loader: 'eslint-loader',
                options: {
                    // 自动修复
                    fix: true
                }
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                oneOf: [
                    {
                        test: /\.css$/,
                        use: [...CommonCssLoader],
                    },
                    {
                        test: /\.scss$/,
                        use: [...CommonCssLoader, 'sass-loader'],
                    },
                    {
                        test: /\.(jpg|png|gif)(\?.*)?$/,
                        loader: 'url-loader',
                        options: {
                            limit: 8 * 1024,    //图片小于8kb会被转为bese64
                            name: '[hash:10].[ext]',
                            outputPath: 'images'
                        }
                    },
                    {
                        exclude: /\.(html|vue|js|css|scss|jpg|png|gif)/,
                        loader: 'file-loader',
                        options: {
                            name: '[hash:10].[ext]',
                            outputPath: 'media'
                        }
                    },
                    {
                        test: /\.js$/,
                        // exclude: /node_modules/,
                        include: [
                            path.resolve('node_modules/vue'),
                            path.resolve('node_modules/@vue'),
                            path.resolve('node_modules/element-plus'),
                            path.resolve('node_modules/vue-router'),
                            path.resolve('src')
                        ],
                        loader: 'babel-loader',
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
                            ],
                            // 开启babel缓存
                            // 第二次构建时，会读取之前的缓存
                            cacheDirectory: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './index.html'),
            minify:{
                collapseWhitespace: true,
                removeComments: true
            },
            filename: 'index.html',
            title: '我是生产环境打包的文件'
        }),
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash:8].css",
            chunkFilename: "[id].css"
        }),
        new OptimizeCssAssetsWebpackPlugin()
    ],
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
}
