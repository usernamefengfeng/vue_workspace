/* 入口文件 */
import Vue from 'vue'
import App from './App'

// Vue.config.productionTip = false

// 创建一个vm对象作为全局事件总线对象, 并挂载到Vue原型对象上
// 所有的组件对象都可以看到它 ==> 可以通过来来进行事件机制通信
Vue.prototype.$globalEventBus = new Vue()

/* 只有当前组件有效 */
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
