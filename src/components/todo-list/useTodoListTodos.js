import { reactive, computed, watchEffect } from 'vue'
import storage from 'good-storage'
import { Toast } from 'vant'

const TODO_LIST = '__TODO_LIST__'

export default function useTodoListTodos () {
  // tabs标识
  const tabs = reactive({
    active: 0,
    tabBar: ['全 部', '已完成', '进行中']
  })

  const changeTab = (index) => {
    tabs.active = index
  }

  // 列表数据
  const todos = reactive({
    todoList: storage.get(TODO_LIST, []),
    fliterList: computed(() => {
      let arry = []
      switch (tabs.active) {
        case 0:
          arry = todos.todoList
          break
        case 1:
          arry = todos.todoList.filter(todo => todo.completed)
          break
        case 2:
          arry = todos.todoList.filter(todo => !todo.completed)
          break
      }
      return arry
    })
  })
  // 操作(增加、编辑)框数据
  const checkedState = reactive({
    checkedShow: false, // 显示操作框
    isEdit: false, // 是否编辑
    selectedTodo: null, // 存放选中的todo
    checkedCtx: '', // v-model
    typeId: '1' // v-model
  })

  const getChecked = () => {
    if (!checkedState.checkedCtx) {
      Toast.fail('还没输入想要做的事!')
      return
    }
    if (!checkedState.isEdit) {
      addTodo()
    } else {
      saveEdit()
    }
    checkedState.checkedShow = false
  }

  const cancelChecked = () => {
    // 清空增加编辑内容
    checkedState.checkedCtx = ''
    checkedState.typeId = '1'
    checkedState.isEdit = false // 关闭编辑状态
  }

  const editTodo = (todo) => {
    if (todo.completed) {
      return
    }
    checkedState.isEdit = true // 开启编辑状态
    checkedState.selectedTodo = todo
    checkedState.checkedShow = true
    checkedState.checkedCtx = todo.ctx
    checkedState.typeId = todo.typeId
  }

  const doDelete = (todo) => {
    todos.todoList.splice(todos.todoList.indexOf(todo), 1)
  }

  const addTodo = () => {
    todos.todoList.push({
      id: new Date().getTime(),
      ctx: checkedState.checkedCtx,
      typeId: checkedState.typeId,
      completed: false,
      time: new Date().getTime()
    })
    // 清空增加内容
    checkedState.checkedCtx = ''
    checkedState.typeId = '1'
    Toast.success('添加成功!')
  }

  const saveEdit = () => {
    todos.todoList[todos.todoList.indexOf(checkedState.selectedTodo)].ctx = checkedState.checkedCtx
    todos.todoList[todos.todoList.indexOf(checkedState.selectedTodo)].typeId = checkedState.typeId
    // 清空增加内容
    checkedState.checkedCtx = ''
    checkedState.typeId = ''
    checkedState.selectedTodo = null
    checkedState.isEdit = false // 关闭编辑状态
    Toast.success('编辑成功!')
  }

  watchEffect(() => {
    storage.set(TODO_LIST, todos.todoList)
  })

  return {
    // tabs 标识
    tabs,
    changeTab,
    todos, // todos
    checkedState, // 操作(增加、编辑)框数据
    getChecked,
    cancelChecked,
    editTodo,
    doDelete
  }
}
