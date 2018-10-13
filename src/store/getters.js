/*包含所有基于state的getter计算属性的对象*/
export default {
  //总数量
  totalCount(state) {
    return state.todos.length
  },
  //完成数量
  completeCount(state) {
    return state.todos.reduce((preToal, todo) => {
      return preToal + (todo.complete ? true : false)
    }, 0);
  },
  //是否全部选中
  isAllCheck(state, getters) {
    return getters.totalCount === getters.completeCount && state.todos.length > 0;
  }
}
