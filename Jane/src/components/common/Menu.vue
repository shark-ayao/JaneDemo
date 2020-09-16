<template>
    <div class="menu">
        <el-aside>
            <el-menu :default-active="activePath" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" router>
                    <!-- 动态循环路由 -->
                    <template v-for="(item, index) in menus">
                        <el-submenu :index="index+''"  :key="index" v-if="!item.hidden">
                        <template slot="title">
                            <i :class="item.iconClass"></i>
                            <span slot="title">{{item.name}}</span>
                        </template>
                            <el-menu-item-group v-for="(chind, index) in item.children" :key="index">
                                <el-menu-item :index="chind.path">
                                    <i :class="chind.iconClass"></i>
                                    {{chind.name}}
                                </el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                    </template>
            </el-menu>
        </el-aside>
    </div>
</template>
<script>
export default {
  data () {
    return {
      isCollapse: false,
      // 接收路由
      menus: '',
      // 接收默认自动展开的选项
      activePath: ''
    }
  },
  created () {
    // 拿到所有路由,赋值给menus
    this.menus = this.$router.options.routes
    // 定义默认展开的项
    this.activePath = this.menus[2].children[0].path
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style lang='scss'>
.menu{
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
}

</style>
