<template>
  <div id="app">
    <div class="todo-container">
      <div class="todo-wrap">
        <!--<TodoHeader :addTodo="addTodo"></TodoHeader>-->
        <!--<TodoHeader @addTodo="addTodo"></TodoHeader>-->
        <TodoHeader></TodoHeader>
        <!--<TodoList :todos="todos" :deleteTodo="deleteTodo"></TodoList>-->
        <TodoList></TodoList>
        <!--<TodoFooter :todos="todos" :deleteCompleteTodos="deleteCompleteTodos"-->
        <!--:selectAllTodos="selectAllTodos"></TodoFooter>-->
        <TodoFooter></TodoFooter>
      </div>
    </div>
  </div>
</template>

<script>
  import TodoHeader from './components/TodoHeader.vue'
  import TodoList from './components/TodoList.vue'
  import TodoFooter from './components/TodoFooter.vue'

  export default {
    name: 'App',
    components: {
      TodoHeader,
      TodoList,
      TodoFooter
    },
//    data() {
//      return {
////        todos: [
////          {
////            title: '李四',
////            complete: false
////          },
////          {
////            title: '张三',
////            complete: true
////          },
////          {
////            title: '王五',
////            complete: false
////          },
////          {
////            title: '赵六',
////            complete: false
////          }
////        ],
//        todos: JSON.parse(window.localStorage.getItem('todos_key') || '[]')
//      }
//    },
//    methods: {
//      //添加
//      addTodo(comment) {
//        this.todos.unshift(comment)
//      },
//
//      //删除
//      deleteTodo(index) {
//        this.todos.splice(index, 1);
//      },
//
//      //删除所有选中
//      deleteCompleteTodos() {
//        this.todos = this.todos.filter(todo => !todo.complete);
//      },
//
//      //全选/全不选
//      selectAllTodos(check) {
//        this.todos.forEach(todo => todo.complete = check)
//      }
////
//////      fatherAddress(e) {
//////        console.log('子组件emit了', e);
//////        this.address = e
//////      },
////      fatherAddress: function (e) {
////        console.log(e);
////        // childValue就是子组件传过来的值
////        this.inputName = e
////      }
//    },
    watch: {//监视!
      todos: {
        deep: true,//深度监视
        handler: function (oldVale) {
          console.log(oldVale);
          window.localStorage.setItem('todos_key', JSON.stringify(oldVale));
        }
      }
    }
  }
</script>

<style scoped>
</style>
