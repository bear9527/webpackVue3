module.exports = {
    presets: [
       ["@babel/preset-env", {
           "targets": {
               "browsers": ["last 2 versions"] //最近2个版本的浏览器
           }
       }]
    ]
}