<template>
  <div class="todo-list">
    <!-- header -->
    <div class="header">
      <div class="icon-wrapper">
        <van-icon class="icon" name="wap-nav" size="32" />
      </div>
      <div class="title">TODO-LIST</div>
    </div>
    <!-- show text introduce -->
    <TodoListShowText></TodoListShowText>
    <!-- todos -->
    <TodoListTodos></TodoListTodos>
  </div>
</template>

<script>

import TodoListShowText from './TodoListShowText.vue'
import TodoListTodos from './TodoListTodos.vue'

export default {
  name: 'TodoList',
  components: { TodoListShowText, TodoListTodos }
}
</script>

<style scoped lang="less">
.todo-list {
  overflow: hidden;
  position: relative;
  height: 100vh;
  color: @color-text-l;
  background-image: linear-gradient(45deg, #34ffff, #34d6ff);
  .header {
    position: relative;
    display: flex;
    align-items: center;
    height: 50px;
    .icon-wrapper {
      width: 50px;
      text-align: center;
      .icon {
        color: #fff;
      }
    }
    .title {
      flex: 1;
      padding-right: 10px;
      text-align: right;
    }
  }
}
</style>
