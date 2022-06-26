<template>
  <div class="home">
    <todo-list></todo-list>
    <!-- <bear-css></bear-css> -->
  </div>
</template>

<script>
import TodoList from '@/components/todo-list/TodoList.vue'
// import BearCss from '@/components/todo-list/BearCss.vue'

export default {
  components: { TodoList },
  name: 'HomeView'
}
</script>
