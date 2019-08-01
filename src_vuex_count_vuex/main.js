/* 入口文件 */
import Vue from 'vue'
import App from './App'
import store from './vuex/store'

/* 只有当前组件有效 */
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  store,  //配置vuex的store对象  ===> 所有组件对象都可以看一个属性$store
})
