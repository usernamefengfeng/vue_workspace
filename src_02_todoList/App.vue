<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header :addTodo="addTodo"/>
      <List :todos="todos" :deleteTodo="deleteTodo" :updateTodo="updateTodo"/>
      <Footer :todos="todos" :deleteCompleted="deleteCompleted" :selectAll="selectAll"/>
    </div>
  </div>
</template>

<script>
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
