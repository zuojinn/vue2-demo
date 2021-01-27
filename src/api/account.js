import http from  '../utils/http'
import axios from 'axios'
import Cookie from 'js-cookie'
//检验是否登录
export async function checkUser(onloginPage = false,params={}){
  let baseURL = 'http://localhost:3000'
  // 登录页用检测登录不需要提示异常消息
  let res = false
  await axios({
    method: 'get',
    url: `${baseURL}/user/info`,
    headers: { 'Authorization': 'Bearer ' + Cookie.get('access-token') }
  }).then(response => {
      if (response && response.status === 200 && response.data.code === 200) {
        // login
        res = response.data.data
      } else {
        // no login
        if (!onloginPage) {
          alert('请重新登录!')
        }
      }
    })
    .catch(error => {
      if (!onloginPage) {
        alert('请重新登录!')
      }
    })
  return res
}
// 登录
export async function login(params = {}) {
  let res
  await http.post('/user/login',params).then((d)=> {
    res =  http.returnResponse(d)
  })
  return res
}
