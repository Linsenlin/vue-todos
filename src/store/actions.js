/*接收多个组件通知触发mutation调用间接状态的方法的对象*/
import {ADD_TODO, DELETE_TODO} from './mutation-types'

export default {
  addTodo({commit}, todo) {
    console.log(todo);
    //添加到todos
    commit(ADD_TODO, {todo});
  },
  deleteTodo({commit}, index) {
    console.log(index);
    //删除到todos
    commit(DELETE_TODO, {index});
  }
}
