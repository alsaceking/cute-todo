<template>
  <div class="todo-list">
    <!-- header -->
    <div class="header">
      <div class="icon-wrapper" @click="checkedSeting">
        <van-icon class="icon" name="wap-nav" size="32" />
      </div>
      <div class="title">TODO-LIST</div>
    </div>
    <!-- seting -->
    <van-popup v-model:show="showSeting" position="left" :style="{ height: '100%', width: '50%' }">
      <div class="seting-wrapper">
        <p>春分，等雨来，下不完绵绵烟波几万重，忘不了新愁与旧愁。</p>
        <p>夏至，等风吹，飞花飘絮，霓裳翩翩舞，几多情愫心飞扬。</p>
        <p>立秋，等叶落，待繁花落尽时，盼细水长流至。</p>
        <p>冬末，等雪消，荣华谢后，不过一场山河永寂。</p>
        <p>红尘嚣，浮华一世转瞬空，等一株花开，也 等你。</p>
      </div>
    </van-popup>
    <!-- show text introduce -->
    <TodoListShowText></TodoListShowText>
    <!-- todos -->
    <TodoListTodos></TodoListTodos>
  </div>
</template>

<script>
import TodoListShowText from './TodoListShowText.vue'
import TodoListTodos from './TodoListTodos.vue'
import { ref } from 'vue'

export default {
  name: 'TodoList',
  components: { TodoListShowText, TodoListTodos },
  setup () {
    const showSeting = ref(false)

    const checkedSeting = () => {
      showSeting.value = true
    }

    return {
      showSeting,
      checkedSeting
    }
  }
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

  .seting-wrapper {
    position: relative;
    padding: 10px;
    color: @color-content;
    font-size: 10px;

    p {
      line-height: 15px;
      text-indent: 25px;
    }
  }
}
</style>
