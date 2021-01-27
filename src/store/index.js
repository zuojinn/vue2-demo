import Vue from 'vue'
import Vuex from 'vuex'
import routerMapComponents from '@/config/routerMapComponents'
import devRouter from '@/config/asyncRouterMap'
import Cookie from 'js-cookie'
import {checkUser,login} from '@/api/account'
import { resetRouter } from '@/router'
Vue.use(Vuex)

// 补全路由组件路径
const formatRoutes = function (routes) {
  routes.forEach(route => {
    route.component = routerMapComponents[route.name]
    if (route.children) {
      formatRoutes(route.children)
    }
  })
}

export default new Vuex.Store({
  state: {
    accountInfo:{
      isLogin :false,
      name:''
    },
    routeList:[]
  },
  mutations: {
    SET_LOGIN(state,res){
      state.accountInfo.isLogin = res
    },
    SET_USERINFO(state,res){
      state.accountInfo.name = res
    },
    SET_ROUTER(state,routes){
      state.routeList = routes
    }
  },
  actions: {
    // 生成系统完整路由
    generateRouter({ state }) {
      return new Promise(resolve => {
        let routeArray = JSON.parse(JSON.stringify(state.routeList))
        formatRoutes(routeArray)
        let router = [
          {
            path: '/',
            name: 'layout',
            component: () => import('@/layout/index.vue'),
            redirect: 'home',
            children:routeArray
          }
        ]
        let fullRoute = router.concat([{ path: '*', redirect: '/404' }])
        resolve(fullRoute)
      })
    },
    //权限
    initPermissionInfo(){
      this.commit('SET_ROUTER',devRouter)
    },
    async checkUser({commit},onloginPage = false){
      // 验证是否登录
      let res = await checkUser(onloginPage)
      if (res) {
        commit('SET_LOGIN',true)
        commit('SET_USERINFO',res)
      } else {
        resetRouter()
        commit('SET_LOGIN',false)
        commit('SET_USERINFO','')
      }
      return res
    },
    //登录
    async login({ commit }) {
      let res = await login()
      if(!res) return res
      Cookie.set('access-token', res.token, { expires: res.expires, path: '' })
      window.location.href = '/'
    }
  }
})