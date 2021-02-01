<template>
  <div>
      <Header />
      <hr>
      <router-view></router-view> 
  </div>
</template>

<script>
import "./assets/styles/reset.css"
import Header from "./compontents/Header.vue"
export default {
    setup(){
        const mmm = ()=>{
            console.log(1)
        }
        return {
            mmm
        }
    },
    components:{
        Header
    }
}
</script>

<style lang="scss">
body{
    background-color: rgb(4, 61, 75);
    
    div{
        color:rgb(255, 172, 172);
    }
    a{
        color:rgb(255, 172, 172);
    }
}
</style>