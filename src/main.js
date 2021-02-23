import 'core-js/stable';
// import 'regenerator-runtime/runtime';
// import {test1} from './main2.js';
// test1(1,2)



document.getElementById("root").onclick = function(){
    import (/* webpackChunkName: 'main2' */'./main2.js').then(({test1,test2})=>{
        test1(1,2)
        test2(1,4)
    }).catch(()=>{
        console.log("文件加载失败~")
    })
}


import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import App from './App.vue';
import { router } from './router';
import 'element-plus/lib/theme-chalk/index.css';

const app = createApp(App);
app.use(router);
app.use(ElementPlus);
app.mount('#root');
