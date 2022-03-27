<template>
  <div class="todos-wrapper">
    <div class="add-btn" @click="checkedShow = true">
      <van-icon name="plus" size="24" />
    </div>
    <div class="todos">
      <!-- tabs -->
      <div class="tabs">
        <div
          v-for="(tab, index) in tabBar"
          class="tab-item"
          :key="tab"
          :class="{ 'active': index === active }"
          @click="changeTab(index)"
        >
          <span>{{ tab }}</span>
        </div>
      </div>
      <TodoListTodosItem
        v-if="todoList.length"
        :fliterData="fliterList"
        @editTodo="editTodo"
        @doDelete="doDelete"
      ></TodoListTodosItem>
    </div>
    <!-- no result -->
    <div class="no-result" v-if="!todoList.length">
      <van-image width="200" height="200" fit="cover" :src="emptyImg" />
    </div>
    <!-- add and edit wrapper -->
    <van-popup
      v-model:show="checkedShow"
      position="bottom"
      :style="{ height: '60%' }"
      @close="cancelChecked"
    >
      <div class="checked-box">
        <h2 class="header">Task Details</h2>
        <div class="form">
          <!-- todo  ctx -->
          <van-cell-group inset>
            <van-field v-model="checkedCtx" class="check-input" placeholder="Enter New To-Do" />
          </van-cell-group>
          <!-- todo type -->
          <van-radio-group v-model="typeId" class="radio-group" direction="horizontal">
            <van-radio name="1" shape="square">
              <van-tag plain type="danger">重要</van-tag>
            </van-radio>
            <van-radio name="2" shape="square">
              <van-tag plain type="warning">一般</van-tag>
            </van-radio>
            <van-radio name="3" shape="square">
              <van-tag plain type="primary">不急</van-tag>
            </van-radio>
          </van-radio-group>
        </div>
        <div class="check-btn">
          <van-button class="btn" type="primary" block @click="getChecked">CHECKED</van-button>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>

import { toRefs } from 'vue'
import emptyImg from './empty.png'
import TodoListTodosItem from '@/components/todo-list/TodoListTodosItem'
import useTodoListTodos from './useTodoListTodos'

export default {
  name: 'TodosComp',
  components: {
    TodoListTodosItem
  },
  setup () {
    const { tabs, changeTab, todos, checkedState, getChecked, cancelChecked, editTodo, doDelete } = useTodoListTodos()

    return {
      // tabs
      ...toRefs(tabs),
      changeTab,
      // checked todos
      ...toRefs(todos),
      ...toRefs(checkedState),
      getChecked,
      cancelChecked,
      editTodo,
      doDelete,
      emptyImg
    }
  }
}
</script>

<style scoped lang="less">
.todos-wrapper {
  padding: 0px 20px;
  position: relative;
  left: 0;
  right: 0;
  margin-top: 50px;
  height: 55%;
  .no-result {
    position: absolute;
    bottom: 20%;
    left: 50%;
    transform: translate3d(-40%, 0, 0);
  }
  .add-btn {
    position: absolute;
    left: 50%;
    top: -40px;
    width: 50px;
    height: 50px;
    line-height: 55px;
    text-align: center;
    vertical-align: middle;
    transform: translate3d(-50%, 0, 0);
    background-color: #34d6ff;
    box-shadow: 0 5px 20px 0 rgb(0 0 0 / 30%);
    border-radius: 50%;
    z-index: 20;
  }
  .todos {
    overflow: hidden;
    position: relative;
    height: 100%;
    border: 1px solid @color-theme;
    box-shadow: 0 5px 20px 0 rgb(0 0 0 / 30%);
    border-radius: 0 0 5px 5px;
    background-color: #fff;
    .tabs {
      display: flex;
      color: @color-title;
      align-items: center;
      .tab-item {
        flex: 1;
        padding: 15px 0;
        text-align: center;
        span {
          padding: 5px;
        }
        &.active {
          span {
            color: @color-theme;
            border-bottom: 3px solid @color-theme;
          }
        }
      }
    }
  }
  .checked-box {
    position: relative;
    height: 100%;
    color: @color-theme;
    .header {
      padding: 10px;
    }
    .form {
      margin-top: 20px;
      .check-input {
        border-bottom: 2px solid @color-theme;
      }
      .radio-group {
        margin-top: 30px;
        padding: 0 15px;
        --van-radio-checked-icon-color: @color-theme;
      }
    }
    .check-btn {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      .btn {
        background: @color-theme;
        border: none;
      }
    }
  }
}
</style>
