import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login',
      hidden: true
    },
    {
      path: '/login',
      name: 'Login',
      components: require('@/components/Login.vue'),
      hidden: true
    },
    {
      path: '/home',
      name: '学生管理',
      components: require('@/components/Home.vue'),
      iconClass: 'fa fa-users',
      children: [
        {
          path: '/home/student',
          name: '学生列表',
          iconClass: 'fa fa-list-alt',
          components: require('@/components/students/StudentList.vue')
        },
        {
          path: '/home/work',
          name: '作业列表',
          iconClass: 'fa fa-list',
          components: require('@/components/students/WorkList.vue')
        }
      ]
    },
    {
      path: '/home',
      name: '数据分析',
      components: require('@/components/Home.vue'),
      iconClass: 'fa fa-bar-chart',
      children: [
        {
          path: '/home/dataview',
          name: '数据概览',
          iconClass: 'fa fa-line-chart',
          components: require('@/components/dataAnalysis/DataOverView.vue')
        },
        {
          path: '/home/mapdata',
          name: '地图概览',
          iconClass: 'fa fa-map-o',
          components: require('@/components/dataAnalysis/MapData.vue')
        }
      ]
    },
    {
      path: '*',
      name: 'NotFound',
      components: require('@/components/NotFound.vue'),
      hidden: true
    }
  ],
  mode: 'history'
})
