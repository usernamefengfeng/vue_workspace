<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <!-- <Header @addTodo="addTodo"/> -->
      <Header ref="header"/>
      <List :todos="todos"/>
      <!-- <Footer :todos="todos" :deleteCompleted="deleteCompleted" :selectAll="selectAll"/> -->
      <Footer>
        <input type="checkbox" v-model="checkAll" slot="left"/>
        <span slot="middle">
          <span>已完成{{completedCount}}</span> / 全部{{todos.length}}
        </span>
        <button class="btn btn-danger" v-if="completedCount>0" @click="deleteCompleted" slot="right">清除已完成任务</button>
      </Footer>
    </div>
  </div>
</template>

<script>
import PubSub from 'pubsub-js'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'

export default {
  name: 'App',

  data () {
    return {
      todos: JSON.parse(localStorage.getItem('todo_id') || '[]')
    }
  },

  //异步操作--
  mounted() {
    this.$refs.header.$on('addTodo',this.addTodo)
    //通过事件总线来绑定自定义事件监听
    this.$globalEventBus.$on('deleteTodo',this.deleteTodo)
    //订阅消息
    this.token = PubSub.subscribe('updateTodo',(msg,{todo,complete}) => {
      this.updateTodo(todo, complete)
    })
  },

  methods: {
    addTodo (todo) {
      this.todos.unshift(todo)
    },

    deleteTodo (index) {
      this.todos.splice(index,1)
    },

    updateTodo (todo, complete) {
      todo.complete = complete
    },

    //删除已完成
    deleteCompleted () {
      this.todos = this.todos.filter(todo => !todo.complete)
    },

    //删除全选
    selectAll (isCheck) {
      this.todos.forEach(todo => todo.complete = isCheck)
    }
  },

  computed: {
    completedCount () {
      return this.todos.reduce((pre,todo)=> pre + (todo.complete? 1:0),0)
    },

    checkAll: {
      get () {
        return this.todos.length === this.completedCount && this.completedCount>0
      },

      set (value) {
        this.selectAll(value)
      }
    }
  },

  //深度监视--存储/读取
  watch: {  //-----深度监视是配置对象
    todos: {
      deep: true,  //深度监视,只要todos发生改变就会回调
      handler: function (value) {  //todos发生改变
        localStorage.setItem('todo_id',JSON.stringify(value))
      }
    }
  },

  components: {
    Header,
    List,
    Footer,
  }
}
</script>

<style scoped>
  /*app*/
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
