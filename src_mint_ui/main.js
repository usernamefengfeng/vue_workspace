/* 入口文件 */
import Vue from 'vue'

import {Button} from 'mint-ui'
import App from './App'

Vue.component(Button.name, Button) // <mt-button></mt-button>


/* 只有当前组件有效 */
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
