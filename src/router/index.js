import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const constantRouterMap = [
  {
    path: '/',
    name: 'layout',
    component: () => import('../layout/index.vue'),
    redirect: 'home',
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('../views/home/index.vue')
      },
      {
        path: '/list',
        name: 'list',
        component: () => import('../views/list/index.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../login/index.vue')
  }
]

const router = new Router({
  mode: 'history',
  routes: constantRouterMap
})
export default router
