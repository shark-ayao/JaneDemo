// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 1. 引入elementui组件和样式
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import axios from 'axios' // 导入axios
import service from './service' // 导入二次封装好的axios
import 'font-awesome/css/font-awesome.min.css' // 导入awesome图标库
import echarts from 'echarts'// 引入echarts

Vue.config.productionTip = false
// 2. 使用elementui
Vue.use(ElementUI)
// Vue.prototype.axios = axios // axios挂载到原型上
Vue.prototype.service = service // 二次封装axios
Vue.prototype.$echarts = echarts // echarts挂载到原型上

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
