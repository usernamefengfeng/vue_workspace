<template>
  <div>
    <div v-if="!repoName">loading...</div>
    <div v-else>
      most star repo is 
      <a :href="repoUrl">{{repoName}}</a>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      repoName: '',
      repoUrl: '',
    }
  },

  mounted() {
    const url = 'https://api.github.com/search/repositories?q=j&sort=stars'
    //使用vue-resource发送ajax请求
    /* this.$http.get(url).then(response => {
      const result = response.data
      const {name,html_url} = result.items[0]
      //更新数据
      this.repoName = name
      this.repoUrl = html_url
    }).catch(error => {
      alert('请求失败' + error.statusText)
    }) */

    axios.get(url).then(response => {
      const result = response.data
      const {name,html_url} = result.items[0]
      //更新数据
      this.repoName = name
      this.repoUrl = html_url
    }).catch(error => {
      alert('请求失败' + error.message)
    })
  },
}
</script>

<style scoped>

</style>
