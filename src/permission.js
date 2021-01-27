import router from './router'
import store from '@/store'

router.beforeEach(async (to,from,next) => {
  const isLogin = store.state.accountInfo.isLogin
  if(isLogin){
    //已经登录
    to.name === 'login' ? next('/') : next()
  }else{
    //向后台校验是否登录
    let check = await store.dispatch('checkUser',to.name === 'login')
    if(check){
      // login   
       to.name === 'login' ? next('/') : next()
    }else{
      // no login
      to.name === 'login' ? next() : next({name: 'login'})
    }
  }
})

export default router
