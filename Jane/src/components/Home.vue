<template>
    <div class="home">
        <el-container>
            <el-header>
                <div class="header-left">
                    教务系统管理后台
                </div>
                <div class="header-right">
                  <span @click="homeOut">退出</span>
                </div>
            </el-header>
            <el-container class="main">
            <!-- 抽离代码 -->
            <Menu></Menu>
            <el-main>
              <el-card>
                <el-breadcrumb separator-class="el-icon-arrow-right">
                  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                  <el-breadcrumb-item v-for="(item,index) in $route.matched" :key="index">
                    {{item.name}}
                  </el-breadcrumb-item>
                </el-breadcrumb>
              </el-card>
              <router-view></router-view>
              <Foot></Foot>
            </el-main>
                </el-container>
        </el-container>
    </div>
</template>

<script>
// 抽离引入
import Menu from './common/Menu'
import Foot from './common/Footer'
export default {
  components: {
    Menu,
    Foot
  },
  data () {
    return {

    }
  },
  methods: {
    homeOut  () {
      this.$alert('您确定要退出吗?', '退出提示', {
        confirmButtonText: '确定',
        callback: action => {
          // this.$message({
          //   type: 'info',
          //   message: `action: $ { action }`
          // })
          // 退出并移除token
          localStorage.removeItem('token')
          // 退出返回登录
          this.$router.push('./login')
        }
      })
    }
  }}
</script>

<style lang='scss'>
.home{
    .el-header {
    display: flex;
    justify-content: space-between;
    background-color: rgb(84, 92, 100);
    color: rgb(255, 255, 255);
    text-align: center;
    line-height: 60px;
    font-weight: bold;
    font-size: 20px;
  }

  .main{
    width: 100%;
    position: absolute;
    top: 60px;
    bottom: 0;
        .el-aside {
        background-color: #ffffff;
        color: #333;
        text-align: center;
        line-height: 200px;
          .el-menu{
            height: 100%;
          }
      }

      .el-main {
        background-color: #ffffff;
        color: #333;
        text-align: center;
        // line-height: 160px;
      }
  }
}

</style>
