<template>
    <div class="list-container">
        <el-row :gutter="20">
            <el-col :span="8" :xs="12" v-for="(o, index) in 9" :key="o">
                <el-card :body-style="{ padding: '0px' }">
                <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
                <div>
                    <span>好吃的汉堡</span>
                    <div class="bottom clearfix">
                    <time class="time">{{ index }}</time>
                    <el-button type="text" class="button">操作按钮</el-button>
                    </div>
                </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>


<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .list-container{
        img{
            width: 100%;
        }
        .el-col{
            margin-bottom: 20px;
        }
    }
</style>