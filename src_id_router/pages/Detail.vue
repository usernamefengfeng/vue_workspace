<template>
  <ul>
    <li>ID: {{messageDetail.id}}</li>
    <li>TITLE: {{messageDetail.title}}</li>
    <li>CONTENT: {{messageDetail.content}}</li>
  </ul>
</template>

<script type="text/ecmascript-6">
  const messageDetails = [
    {id: 1, title: 'message001', content: 'message content001'},
    {id: 3, title: 'message003', content: 'message content003'},
    {id: 5, title: 'message005', content: 'message content005'},
  ]
  export default {
    data() {
      return {
        messageDetail: {}  //当前需要显示的消息详情对象
      }
    },

    //模拟发送ajax请求--获取对应的消息详情对象
    mounted() {
      setTimeout(() => {
        //获取当前的id
        const id = this.$route.params.id * 1
        const detail = messageDetails.find(detail => detail.id === id)

        //更新数据
        this.messageDetail = detail
      }, 1000);
    },

    //监视
    watch: {
      $route (value) {
        setTimeout(() => {
          //获取当前的id
          const id = value.params.id * 1
          const detail = messageDetails.find(detail => detail.id === id)

          //更新数据
          this.messageDetail = detail
        }, 1000);
      }
    },
  }
</script>

<style scoped>

</style>
