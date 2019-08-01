/* 
  路由器对象
*/
import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'

//声明使用vue插件
Vue.use(VueRouter)

export default new VueRouter ({
  mode: 'history', //去掉路径上的#
  routes,  //配置所有的路由
})