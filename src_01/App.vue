<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header :addTodo="addTodo"/>
      <List :todos="todos" :deleteTodo="deleteTodo" :updateTodo="updateTodo"/>
      <Footer :todos="todos" :deleteCompleted="deleteCompleted" :seleteAll="seleteAll"/>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
  export default {
    data() {
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
        return todo.complete = complete
      },

      //删除已完成(已勾选)
      deleteCompleted () {
        this.todos = this.todos.filter(todo => !todo.complete)
      },

      //全选
      seleteAll (isCheck) {
        this.todos.forEach(todo => todo.complete = isCheck)
      }
    },

    //深度监视
    watch: { //深度watcher
      todos: {
        deep: true,  //深度监视: 内部发生任何变化都会回调
        handler: function (value) {  //todos发生了变化
          //保存todo
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
