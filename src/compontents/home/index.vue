<template>
  <div class="home clearfix">
    <div class="home-top">
      <div class="home-top-container">
        <el-row :gutter="20">
          <el-col
            :span="18"
            :xs="24"
          >
            <div class="carousel-wrapper">
              <el-carousel>
                <el-carousel-item
                  v-for="item in 4"
                  :key="item"
                >
                  <h3 class="small">{{ item }}</h3>
                </el-carousel-item>
              </el-carousel>
            </div>
          </el-col>
          <el-col
            :span="6"
            :xs="24"
          >
            <div class="problemWrapper">
              <div class="problem-top">
                <h2>常见问题</h2>
                <a href="javascript:;"><i class="el-icon-more"></i></a>
              </div>
              <hr />
              <div class="problem-main">
                <ul>
                  <li>
                    <el-skeleton :rows="5" />
                  </li>
                </ul>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="home-category">
      <el-row>
        <el-col
          :span="20"
        >
          <el-button>默认按钮</el-button>
          <el-button type="primary">主要按钮</el-button>
          <el-button type="success">成功按钮</el-button>
          <el-button type="info">信息按钮</el-button>
          <el-button type="warning">警告按钮</el-button>
          <el-button type="danger">危险按钮</el-button>
          <el-button>默认按钮</el-button>
          <el-button type="primary">主要按钮</el-button>
          <el-button type="success">成功按钮</el-button>
          <el-button type="info">信息按钮</el-button>
          <el-button type="warning">警告按钮</el-button>
          <el-button>默认按钮</el-button>
          <el-button type="primary">主要按钮</el-button>
          <el-button type="success">成功按钮</el-button>
          <el-button type="info">信息按钮</el-button>
          <el-button type="warning">警告按钮</el-button>
          <el-button type="success">成功按钮</el-button>
          <el-button type="info">信息按钮</el-button>
        </el-col>
        <el-col
          :span="4"
        >
          <el-button
          class="all-btn">查看全部</el-button>
        </el-col>
      </el-row>
    </div>
    <goodslist></goodslist>
  </div>
</template>

<script>
import goodslist from "../../compontents/public/goodslist.vue"
export default {
  components:{
    goodslist
  }
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
  .home-top {
    margin-top: 10px;
    .home-top-container {
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      .carousel-wrapper {
        background-color: brown;
      }
      .problemWrapper {
        .problem-top {
          height: 20px;
          h2 {
            float: left;
            line-height: 20px;
          }
          a {
            float: right;
          }
        }
      }
    }
  }
  .home-category {
    width: 100%;
    max-width: 1200px;
    margin: 10px auto;
    // padding: 0 10px;
    box-sizing: border-box;
    .all-btn{
      float: right;
    }
    button {
      margin-bottom: 10px;
      margin-left: 10px;
    }
  }
}
</style>