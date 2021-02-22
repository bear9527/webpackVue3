<template>
  <div class="list">
    <goodslist></goodslist>
  </div>
</template>

<script>
import goodslist from "../../compontents/public/goodslist.vue"
export default {
  components:{
    goodslist
  }
}
</script>

<style lang="scss" scoped>
.list ::v-deep(.el-row) {
    width: 100%;
}
</style>