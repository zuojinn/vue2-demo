import router from './router'
import store from '@/store'
import asyncRouterMap from '@/config/asyncRouterMap'

router.beforeEach(async (to,from,next) => {
  const isLogin = store.state.accountInfo.isLogin
  if(isLogin){
    //已经登录
    if(to.name === 'login'){
      next({path:'/'})
    }else{
      if(to.matched.lemgth === 0){
        next('/404') //判断此跳转路由的来源路由是否存在
      }else{
        next()
      }
    }
  }else{
    //向后台校验是否登录
    let check = await store.dispatch('checkUser',to.name === 'login')
    if(check){
      await store.dispatch('initPermissionInfo') //权限
      let addRoutes = await store.dispatch('generateRouter', asyncRouterMap)//生成可访问路由表
      addRoutes.map(item =>{
        router.addRoute(item) //动态添加可访问路由表
      })
      next({ ...to, replace: true }) // hack方法 确保addRoutes已完成
    }else{
      // no login
      to.name === 'login' ? next() : next({name: 'login'})
    }
  }
})

export default router
