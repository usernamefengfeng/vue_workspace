/* 
vuex最核心的管理(读/写)对象--store
*/
import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

//声明使用Vue插件
Vue.use(Vuex)

//配置
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
})