<template>
  <header class="clearfix">
    <div class="header-container ">
      <div class="navbar-header">
        <div class="navbar-mobile">
          <a
            class="navbar-more"
            href="javascript:;"
            @click="drawer = true"
            label="ltr"
          ><i class="menu-icon el-icon-menu"></i></a>
          <div class="nav-mask hidden-sm-only"></div>
          <a
            class="navbar-brand"
            href="javascript:;"
          ><img
              src="../../assets/images/logo.png"
              alt=""
            ></a>

        </div>
      </div>
      <nav class="nav-pc hidden-xs-only">
        <ul>
          <li>
            <router-link
              to="/"
              class="current"
            >Home</router-link>
          </li>
          <li>
            <router-link to="/list">List</router-link>
          </li>
          <li>
            <router-link to="/about">About</router-link>
          </li>
        </ul>
      </nav>
      <div class="navbar-user hidden-xs-only">
        <ul>
          <li>
            <router-link to="/login">登录</router-link>
          </li>
          <li>
            <router-link to="/reg">注册</router-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
  <el-drawer
    title="我是标题"
    v-model="drawer"
    :direction="direction"
    :with-header="false"
  >
    <el-row class="tac">
      <el-col :span="24">
        <h5>自定义颜色</h5>
        <el-menu
          :uniqueOpened="true"
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-submenu index="1">
            <template #title>
              <i class="el-icon-s-grid"></i>
              <span>首页</span>
            </template>
            <el-menu-item-group>
              <template #title>分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-lollipop"></i>
            <template #title>网页</template>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-sugar"></i>
            <template #title>关于我们</template>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-s-custom"></i>
            <template #title>个人中心</template>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
    <div class="navbar-user navbar-user-mobile">
      <ul>
        <li>
          <router-link to="/login">登录</router-link>
        </li>
        <li>
          <router-link to="/reg">注册</router-link>
        </li>
      </ul>
    </div>
  </el-drawer>

</template>

<script>
import "element-plus/lib/theme-chalk/display.css";
export default {
  data() {
    return {
      drawer: false,
      direction: "ltr",
    };
  },
};
</script>

<style lang="scss" scoped>
header {
  background: #212121;
  height: 60px;
  border: none;
  padding: 0 20px;
  .header-container {
    max-width: 1200px;
    margin: 0 auto;
    .navbar-header {
      float: left;
      .navbar-mobile {
        .navbar-more {
          display: none;
          float: left;
          i {
            font-size: 30px;
            line-height: 60px;
            color: #fff;
          }
        }
        .nav-mask {
        }
        .navbar-brand {
          display: block;
          float: left;
          padding: 5px 10px;
        }
        .navbar-user-mobile {
          display: none;
        }
      }
    }
    .nav-pc {
      float: left;
      .router-link-active {
        color: #fff;
      }
      ul {
        li {
          float: left;
          a {
            display: block;
            padding: 20px 30px;
            padding-left: 10px;
            padding-right: 10px;
            line-height: 20px;
            color: #c1c1c1;
          }
        }
      }
    }
    .navbar-user {
      float: right;
      ul {
        li {
          float: left;
          display: block;
          padding: 20px 30px;
          padding-left: 10px;
          padding-right: 10px;
          line-height: 20px;
          color: #c1c1c1;
        }
      }
    }
  }
}
@media screen and (max-width: 750px) {
  header {
    .header-container {
      .navbar-header {
        width: 100%;
        .navbar-mobile {
          width: 100%;
          text-align: center;
          .navbar-user-mobile {
            display: block;
          }
          .navbar-more {
            display: block;
          }
          .navbar-brand {
            float: none;
            display: inline-block;
          }
        }
      }
    }
  }
}
</style>