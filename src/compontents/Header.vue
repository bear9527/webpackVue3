<template>
  <header>
    <div class="header-container">
      <div class="navbar-header">
        <div class="navbar-mobile">
          <a class="navbar-more" href="javascript:;"><i class="menu-icon el-icon-menu"></i></a>
          <div class="nav-mask hidden-sm-only"></div>
          <a class="navbar-brand" href="javascript:;"><img src="../assets/images/logo.png" alt=""></a>
          
          <div class="navbar-user navbar-user-mobile">
            <ul>
              <li><router-link to="/login">登录</router-link></li>
              <li><router-link to="/reg">注册</router-link></li>
            </ul>
          </div>
        </div>
      </div>
      <nav class="nav-pc hidden-xs-only">
        <ul>
          <li>
            <router-link to="/" class="current">Home</router-link>
          </li>
          <li>
            <router-link to="/about">About</router-link>
          </li>
        </ul>
      </nav>
      <div class="navbar-user hidden-xs-only">
        <ul>
          <li><router-link to="/login">登录</router-link></li>
          <li><router-link to="/reg">注册</router-link></li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
import 'element-plus/lib/theme-chalk/display.css';
export default {};
</script>

<style lang="scss" scoped>
header{
  background: #212121;
  height: 60px;
  border: none;
  padding: 0 20px;
  .header-container{
    max-width: 1200px;
    margin: 0 auto;
    .navbar-header{
      float: left;
      .navbar-mobile{
        .navbar-more{
          display: none;
          float: left;
          i{
            font-size: 30px; 
            line-height: 60px;
            color: #fff;
          }
        }
        .nav-mask{

        }
        .navbar-brand{
          display: block;
          float: left;
          padding: 5px 10px;
        }
        .navbar-user-mobile{
          display: none;
        }
      }
    }
    .nav-pc{
      float: left;
      .router-link-active{
          color: #fff;
      }
      ul{
        li{
          float: left;
          a{ 
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
    .navbar-user{
      float: right;
      ul{
        li{
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
@media screen and (max-width:750px) {
  header{
    .header-container{
      .navbar-header{
        width: 100%;
        .navbar-mobile{
          width: 100%;
          text-align: center;
          .navbar-user-mobile{
            display: block;
          }
          .navbar-more{
            display: block;
          }
          .navbar-brand{
            float: none;
            display: inline-block;
          }
        }
      }
    }
  }
}
</style>