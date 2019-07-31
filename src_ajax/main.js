/* 入口文件 */
import Vue from 'vue'

import VueResource from 'vue-resource'
import axios from 'axios'
import App from './App'

// Vue.config.productionTip = false

// 创建一个vm对象作为全局事件总线对象, 并挂载到Vue原型对象上
// 所有的组件对象都可以看到它 ==> 可以通过来来进行事件机制通信
//Vue.prototype.$globalEventBus = new Vue()

//声明使用Vue插件
Vue.use(VueResource)  //内部给Vue.prototype.$http = 能发ajax请求的对象(.get()/post())


Vue.prototype.$bus = new Vue()
Vue.prototype.$axios = axios

/* 只有当前组件有效 */
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
