/*接收多个组件action触发直接更新状态的方法的对象*/
import {ADD_TODO,DELETE_TODO} from './mutation-types'

export default {

  [ADD_TODO](state, {todo}) {
    state.todos.unshift(todo);
  },
  [DELETE_TODO](state, {index}) {
    state.todos.splice(index, 1);
  }

}
