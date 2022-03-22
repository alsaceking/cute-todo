<template>
  <div class="home">
    <todo-list></todo-list>
  </div>
</template>

<script>
import TodoList from '@/components/todo-list/TodoList.vue'

export default {
  components: { TodoList },
  name: 'HomeView'
}
</script>
