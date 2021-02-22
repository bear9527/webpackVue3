
const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const { VueLoaderPlugin } = require('vue-loader/dist/index')

//设置nodejs的环境变量
process.env.NODE_ENV = 'development';
module.exports = {
    mode: 'development', //环境模式
    entry: {
        pageOne: path.resolve(__dirname, './src/main.js'), //打包入口
    },
    // entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'), //打包出口
        filename: 'js/bundle-[name].js' //打包完的静态资源文件名
    },
    module:{
        rules:[
            {
                test: /\.vue$/,
                use: ["vue-loader"]
            },
            {
                test: /\.css$/,
                use: ["style-loader","css-loader"]
            },
            {
                test: /\.(png|jpe?g|gif|svg|)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 8 * 1024,    //图片小于8kb会被转为bese64
                    name: '[hash:10].[ext]',
                    outputPath:'images'
                }
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                loader: 'file-loader',
                options: {
                    outputPath:'fonts'
                }
            },
            {
                test: /\.scss$/,
                use: ["style-loader","css-loader","sass-loader"]
            },
            // {
            //     test: /\.js$/,
            //     exclude: /node_modules/,
            //     use: [
            //         // 'babel-loader',
            //         {
            //             loader: 'eslint-loader',
            //             options: {
            //                 // 自动修复
            //                 fix: true
            //             }
            //         }
            //     ]
            // },
            {
                test: /\.js$/,
                // exclude: /node_modules/,
                include: [

                    path.resolve('src'),
                    path.resolve('node_modules/@vue'),
                    path.resolve('node_modules/element-plus'),
                    path.resolve('node_modules/vue-router'),
                    path.resolve('node_modules/vue')
                    // path.resolve('node_modules/mitt'),
                    
                    
                    ]
                ,
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
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './index.html'),
            filename: 'index.html', //打包后输出的文件名
            chunks: ['pageOne'],
            title: 'webpack vue3 项目' //index.html 模板内，通过<%= htmlWebpackPlugin.option.title %> 拿到变量
        }),
        new VueLoaderPlugin(),
        new CleanWebpackPlugin()
    ],
    //serve
    devServer: {
        contentBase: path.resolve(__dirname, "./dist"),
        compress:true, //启用gzip压缩
        port: 8081,
        open:true,
        publicPath: "/"
    },
    devtool: 'source-map',  // 代码调试
}