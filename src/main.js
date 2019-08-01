/* 入口文件 */
import Vue from 'vue'
import App from './App'
//import eventBus from './event-bus'

// Vue.config.productionTip = false

//将eventBus挂载到Vue的原型对象上
//所有的组件对象都可以看到它 ==> 可以用来任意组件间进行事件机制通信
//Vue.prototype.$globalEventBus = eventBus

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
