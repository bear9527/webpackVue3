<template>
      <Header />
      <router-view></router-view> 
      <Footer></Footer>
</template>

<script>
import "./assets/styles/reset.css"
import Header from "./compontents/public/Header.vue"
import Footer from "./compontents/public/Footer.vue"
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
        Header,
        Footer
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