<template>
  <div>
    <div>click {{count}} times, count is {{evenOrOdd}}</div>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">increment if odd</button>
    <button @click="incrementAsync">increment async</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
export default {
  
  /* computed: {
    count () {
      return this.$store.state.count
    },
    evenOrOdd () {
      return this.$store.getters.evenOrOdd
    }
  }, */

  computed: {
    ...mapState(['count']),       //状态数据
    ...mapGetters(['evenOrOdd'])  //计算属性的方法
  },

  methods: {
    ...mapMutations({  //调用的是commit方法--直接更新状态数据的方法
      increment: 'INCREMENT',
      decrement: 'DECREMENT'
    }),
    ...mapActions(['incrementIfOdd','incrementAsync'])  //调用的是dispatch方法--间接更新状态数据的方法
  },

  /* methods: {
    increment () {
      this.$store.commit('INCREMENT')
    },

    decrement () {
      this.$store.commit('DECREMENT')
    },

    incrementIfOdd () {
      this.$store.dispatch('incrementIfOdd')
    },

    incrementAsync () {
      this.$store.dispatch('incrementAsync')
    }
  }, */
}
</script>

<style scoped>

</style>
