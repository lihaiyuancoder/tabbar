/*
 * @Description: 
 * @Autor: lihaiyuan
 * @Email: lihaiyuan@goldenfintech.com.cn
 * @Date: 2020-02-12 23:04:45
 */
import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('../pages/home/Home')
const Message = () => import('../pages/message/Message')
const Mine = () => import('../pages/mine/Mine')
//-----------------------------------------------------
//解決这个错误，添加的代码 Navigating to current location ("/home") is not allowed 
// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// }
//-----------------------------------------------------

    Vue.use(Router)

    export default new Router({
      routes: [{
          path: '',
          redirect: '/home'
        },
        {
          path: '/home',
          component: Home

        },
        {
          path: '/message',
          component: Message

        },
        {
          path: '/mine',
          component: Mine

        }
      ],
      //使用history模式
      mode:'history'
    })
