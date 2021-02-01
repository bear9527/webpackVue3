




安装sass              yarn add sass-loader node-sass -D
安装vue-router        yarn add vue-router@4

安装elementui         yarn add element-plus 
安装url-loader file-loader -D
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