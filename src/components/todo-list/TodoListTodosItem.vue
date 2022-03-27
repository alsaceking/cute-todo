<template>
  <div class="content">
    <ul>
      <van-swipe-cell v-for="todo in fliterData" :key="todo.time">
        <li class="todos-item" :class="{ 'finished': todo.completed }" @click="senEdit(todo)">
          <p class="ctx van-ellipsis">{{ todo.ctx }}</p>
          <div class="detalis">
            <div class="time">{{ takeDateState(todo.time) }}</div>
            <div class="type">
              <van-tag
                mark
                :type="getType(todo.typeId)"
              >{{ todo.typeId === '1' ? 'High' : todo.typeId === '2' ? 'Mid' : 'Low' }}</van-tag>
            </div>
            <div class="completed">
              <van-checkbox
                class="check"
                v-model="todo.completed"
                icon-size="24px"
                label-position="left"
                @click.stop
              >Done</van-checkbox>
            </div>
          </div>
        </li>
        <template #right>
          <van-button
            square
            text="删除"
            type="danger"
            class="delete-button"
            @click="sendDelete(todo)"
          />
        </template>
      </van-swipe-cell>
    </ul>
  </div>
</template>

<script>
import { getDateState } from '@/assets/js/date'

export default {
  name: 'TodosItem',
  props: {
    fliterData: {
      type: Array,
      default () {
        return []
      }
    }
  },
  emits: ['editTodo', 'doDelete'],
  setup (props, { emit }) {
    function senEdit (todo) {
      emit('editTodo', todo)
    }

    function sendDelete (todo) {
      emit('doDelete', todo)
    }

    // 获取标签样式
    const getType = (pid) => {
      let type = ''
      switch (pid) {
        case '1':
          type = 'danger'
          break
        case '2':
          type = 'warning'
          break
        case '3':
          type = 'primary'
          break
        default:
          type = 'danger'
      }
      return type
    }

    const takeDateState = (time) => {
      return getDateState(time)
    }
    return {
      senEdit,
      sendDelete,
      getType,
      takeDateState
    }
  }
}
</script>

<style scoped lang="less">
.content {
  overflow: scroll;
  position: absolute;
  left: 0;
  right: 0;
  top: 48px;
  bottom: 0;
  color: @color-content;
  .todos-item {
    padding: 5px 25px;
    margin-top: 15px;
    & + .todos-item {
      margin-top: 10px;
    }
    &.finished {
      background-color: #f2f3f5;
      .ctx {
        text-decoration: line-through;
      }
    }
    .ctx {
      padding: 5px 0px;
      color: @color-content;
    }
    .detalis {
      display: flex;
      align-items: center;
      padding: 10px 10px 10px 0;
      margin-top: 5px;
      border-top: 1px dashed @color-theme;
      border-bottom: 2px solid @color-border;
      .time {
        flex: 3;
        color: @color-subcolor;
        font-size: @fontsize-small-s;
      }
      .type {
        flex: 2;
        padding-left: 5px;
      }
      .completed {
        flex: 2;
        .check {
          --van-checkbox-label-color: #fff;
          --van-checkbox-checked-icon-color: @color-theme;
          --van-checkbox-border-color: @color-theme;
        }
      }
    }
  }
  .delete-button {
    height: 100%;
    // margin-left: 2px;
  }
}
</style>
