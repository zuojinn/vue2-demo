import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

//默认不需要权限的路由
const constantRouterMap = [
  {path: '/login',name: 'login',component: () => import('@/login/index.vue')},
  {path: '/404',name: '404',component: () => import('@/errorPage/404')}
]
const createRouter = () => 
  new Router({
    mode: 'history',
    routes: constantRouterMap
  })
const router = createRouter()
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}
export default router
