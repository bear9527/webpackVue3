<template>
  <div>this is about 

      <p>父组件：{{testStr}}</p>
    <p>父元素上的值：{{testModel}}</p>
    <p>busStr：{{busStr.txt}}</p>
    <p>busStr2：{{busStr2}}</p>
  </div>
  <keep-alive>
  <test v-show="testTrue" :testStr="testStr" @click="testStr=456;" v-model:testModel="testModel"></test>
  </keep-alive>
  <button @click="testTrue = !testTrue">切换组件状态</button>
</template>

<script>
import { ref, reactive, onUnmounted } from "vue"
// 引入bus文件
import bus from '../../assets/js/bus.js'
import test from "./test.vue"
export default {
  setup(){
    let testStr = ref(123);

    let busStr = reactive({
      txt:"未修改"
    });
    let busStr2 = ref("未修改");
    let testTrue = ref(false);;



    let testModel = ref("testModel 123456");
    bus.on("add",(data)=>{
      console.log("data",data)
      busStr.txt = data;
      busStr2.value = data;
      console.log("busStr",busStr.txt)
    });
    onUnmounted(()=>{
      bus.off("add");
    })
    return{
      testStr,
      testModel,
      busStr,
      busStr2,
      testTrue
    }
  },
  
  components:{
    test
  }
}
</script>

<style>

</style>