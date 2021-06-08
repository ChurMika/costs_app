import Vue from 'vue'
import VueRouter from 'vue-router'
import PageDashboard from '../views/PageDashboard'
import PageAbout from '../views/PageAbout'
import Page404 from '../views/Page404'

Vue.use(VueRouter)

export default new VueRouter ({
  mode: 'history',
  routes: [
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: PageDashboard
    },
    {
      path: '/dashboard/add/payment/:value',
      name: 'DashboardAdd',
      component: PageDashboard
    },
    {
      path: '/about',
      name: 'NotFound',
      component: PageAbout
    },
    {
      path: '*',
      name: '404',
      component: Page404
    }
  ]
})
