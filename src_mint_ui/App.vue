<template>
  <mt-button type="primary" style="width: 100%" @click="hint">测试mt-button</mt-button>
</template>

<script>
import { Toast } from 'mint-ui'
export default {
  methods: {
    hint () {
      Toast('提示')
    }
  },
}
</script>

<style scoped>

</style>
