/* 
  包含n个直接更新状态数据的方法对象--模块
*/
import {
  REQUESTING,
  REQUEST_SUCCESS,
  REQUEST_ERROR
} from './mutations_types'

export default {
  //请求中的状态
  [REQUESTING] (state) {
    state.firstView = false,
    state.loading = true
  },
  //请求成功的状态
  [REQUEST_SUCCESS] (state, users) {
    state.loading = false,
    state.users = users
  },
  //请求失败的状态
  [REQUEST_ERROR] (state,msg) {
    state.loading = false,
    state.errorMsg = msg
  }
}