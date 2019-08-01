/* 入口文件 */
import Vue from 'vue'

import router from './router'
import App from './App'

/* 只有当前组件有效 */
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,  //配置路由器
})
