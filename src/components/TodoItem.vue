<template>
  <li @mouseenter="handleEnter(true)" @mouseleave="handleEnter(false)" :style="{backgroundColor:bgColor }">
    <label>
      <input type="checkbox" v-model="todo.complete"/>
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="deleteItem">删除</button>
  </li>
</template>

<script>
  export default {
    name: 'TodoItem',
    props: {
      todo: Object,
      index: Number,
//      deleteTodo: Function
    },
//    props: ['todo', 'index', 'deleteTodo'],

    data() {
      return {
        bgColor: '#fff',
        isShow: false,
//        list: [
//          {
//            aa: 'xxx',
//            bb: 'xxx'
//          },
//        ],
      }
    },
    methods: {
      handleEnter(isEnter) {
//        console.log(isEnter);
        if (isEnter) {
          this.bgColor = '#aaa';
          this.isShow = true;
        } else {
          this.bgColor = '#fff';
          this.isShow = false;
        }
      },

      deleteItem() {
        const index = '';
        this.$store.dispatch('deleteTodo', index);
//        const {todo, index, deleteTodo} = this;
//        if (window.confirm(`是否删除${todo.title}的评论`)) {
//          deleteTodo(index);
//        }
      }
    }
  }
</script>

<style scoped>
  /*item*/
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    /*display: none;*/
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }
</style>
