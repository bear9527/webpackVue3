




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















"browserslist":{
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version",
    ],
    "production": [
      ">0.2%",  //大于99.8%的浏览器
      "not dead", //不要已经死的浏览器
      "not op_mini all" //不要mini的浏览器
    ]
  }




  eslint
  语法检查：eslint-loader eslint 
  注意：只检查自己写的源代码，第三方的库是不需要检查的
  设置检查规则：
    package.json中eslintConfig中设置
    airbnb --> eslint-config-airbnb-base eslint-plugin-import
   
    下一行不eslint检查
    //eslint-disable-next-line
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                    {
                        loader: 'eslint-loader',
                        options: {
                            // 自动修复
                            fix: true
                        }
                    }
                ]
            },