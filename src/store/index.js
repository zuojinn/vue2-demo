import Vue from 'vue'
import Vuex from 'vuex'
import Cookie from 'js-cookie'
import {checkUser,login} from '@/api/account'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    accountInfo:{
      isLogin :false,
      name:''
    }
  },
  mutations: {
    SET_LOGIN(state,res){
      state.accountInfo.isLogin = res
    },
    SET_USERINFO(state,accountInfo){
      state.accountInfo = accountInfo
    }
  },
  actions: {
    async checkUser({commit},onloginPage = false){
      // 验证是否登录
      let res = await checkUser(onloginPage)
      if (res) {
        commit('SET_LOGIN',true)
        commit('SET_USERINFO',res)
      } else {
        
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