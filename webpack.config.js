const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const { VueLoaderPlugin } = require('vue-loader/dist/index')

module.exports = {
    mode: 'development', //环境模式
    entry: {
        pageOne:path.resolve(__dirname, './src/main.js'), //打包入口
        // pageTwo:path.resolve(__dirname, './src/main2.js'), //打包入口
    },
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
                    // limit: 10000,
                    limit: 3 * 1024,    //图片小于8kb会被转为bese64
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
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
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