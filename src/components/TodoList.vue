<template>
  <div>
    <ul class="todo-main">
      <!--<TodoItem v-for="(todo,index) in todos" :key="index" :todo="todo" :index="index"-->
                <!--:deleteTodo="deleteTodo"></TodoItem>-->
      <TodoItem v-for="(todo,index) in todos" :key="index" :todo="todo" :index="index"></TodoItem>
    </ul>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import TodoItem from './TodoItem.vue'

  export default {
    name: 'TodoList',
    components: {
      TodoItem
    },
    computed: {
      ...mapState(['todos'])
    }
//    props: {
//      todos: Array,
//      deleteTodo: Function
//    },
//    data() {
//      return {
//        currentIndex: 1 //存储当前索引值
//        list: [
//          {
//            aa: 'xxx',
//            bb: 'xxxx!'
//          },
//        ],
//      }
//    },

  }
</script>

<style scoped>
  /*main*/
  .todo-main {
    margin-left: 0;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }
</style>
