/* 
  包含n个用来间接更新状态数据的方法对象--模块
*/
import axios from 'axios'
import {
  REQUESTING,
  REQUEST_ERROR,
  REQUEST_SUCCESS,
} from './mutations_types'

export default {
  //异步actions--包含异步代码
  async search ({commit},searchName) {
    //更新状态
    commit(REQUESTING)
    //发送ajax请求
    const url = `https://api.github.com/search/users?q=${searchName}`
    try {
      const response = await axios(url)
      //请求成功，数据更新成功
      const users = response.data.items.map(item => ({
        username: item.login,
        url: item.html_url,
        avatar_url: item.avatar_url
      }))
      //更新成功的状态
      commit(REQUEST_SUCCESS,users)
    } catch (error) {
      //请求失败，更新失败的状态
      commit(REQUEST_ERROR,error.message)
    }
  }
}