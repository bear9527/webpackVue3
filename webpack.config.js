const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const { VueLoaderPlugin } = require('vue-loader/dist/index')

module.exports = {
    mode: 'development', //环境模式
    entry: path.resolve(__dirname, './src/main.js'), //打包入口
    output: {
        path: path.resolve(__dirname, 'dist'), //打包出口
        filename: 'js/[name].js' //打包完的静态资源文件名
    },
    module:{
        rules:[
            {
                test: /\.vue$/,
                use: ["vue-loader"]
            },
            {
                test: /\.css$/,
                use: ["style-loader","css-loader","sass-loader"]
            },
            {
                test: /\.(png|jpe?g|gif|svg|)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                }
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                loader: 'file-loader'
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
            title: 'webpack vue3 项目' //index.html 模板内，通过<%= htmlWebpackPlugin.option.title %> 拿到变量
        }),
        new VueLoaderPlugin(),
        new CleanWebpackPlugin()
    ],
    devServer: {
        contentBase: path.resolve(__dirname, "./dist"),
        port: 8081,
        publicPath: "/"
    },
    devtool: 'source-map',  // 代码调试
}