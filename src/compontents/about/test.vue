<template>
  <div class="test">
      <p>子组件：{{testStr}}</p>

      <h2>年龄： {{age}}</h2>
      <p>孩子：<span v-for="(index) in children" :key="index">{{index}}</span></p>
      <p>这是v-model的数据： {{testModel}}</p>
      <button @click="change">按钮</button>

      <button @click="testSub">aaa</button>
  </div>
</template>

<script>
import { reactive, toRefs, createApp, onActivated } from "vue"
// 引入bus文件
import bus from '../../assets/js/bus.js'
export default {
    props:{
        // testStr:Number,
        testModel:String,
    },
    methods: {
        testSub(){
            console.log(this)
        }
    },
    setup(props,ctx){
        let testStr=props.testStr;
        let testModel=props.testModel;
        console.log(ctx)

        const state = reactive({
            age:66,
            children:["老大","老二","老三"],
            testModel:testModel,
            // testStr:testStr
        });
        function change(){
            state.testModel='55520';
            ctx.emit("update:testModel",55520);
        }
        setTimeout(()=>{
            state.age = 77;
            console.log("执行了更改age",state.age)

            
            state.children.push("老小");
            console.log("执行了更改age",state.children)
            
            bus.emit("add","修改了");
        },2000);
        onActivated(()=>{
            // alert("onActivated")
        })

        let aaab = new Promise((resolve,reject)=>{
            resolve(true)
            // reject(false)
        }).then(function(str){
            console.log("第一个then1",str)
                return new Promise((resolve,reject)=>{

                    // setTimeout(function(){
                    //         resolve(456)
                    // },1000)
                })
        },function(str){
            console.log("第一个then2",str)
        }).then(function(str){
            console.log("第二个then1",str)
        },function(str){
            console.log("第二个then2",str)
        });



        return{
            testStr,
            ...toRefs(state),
            change
        }
    }
}
</script>

<style lang="scss" scoped>
    .test{
        width:300px;
        height:400px;
        display: flex;
        transform: translate3d(90deg);
    }
</style>