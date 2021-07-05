import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: () => import('../views/PageDashboard')
    },
    {
      path: '/dashboard/add/payment/:value',
      name: 'DashboardAdd',
      component: () => import('../views/PageDashboard')
    },
    {
      path: '/about',
      name: 'NotFound',
      component: () => import('../views/PageAbout')
    },
    {
      path: '*',
      name: '404',
      component: () => import('../views/Page404')
    }
  ]
})
