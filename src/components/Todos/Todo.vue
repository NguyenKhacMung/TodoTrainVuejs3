<template>
  <div class="form-check">
    <input
      class="form-check-input"
      type="checkbox"
      :id="todo.id"
      v-model="complete"
      @change="$emit('toggleTodo', todo.id)"
    />
    <label
      :class="[{ complete: todo.completed }, 'form-check-label']"
      for="flexCheckChecked"
    >
      {{ index + 1 }} - {{ todo.title }}
    </label>
  </div>
  <span>| {{ todo.tag }}</span>
</template>

<script>
export default {
  name: 'TodoItem',
  props: ['todo', 'index'],
  emits: ['toggleTodo'],
  data() {
    return {
      complete: this.todo.completed,
    }
  },
}
</script>

<style scoped>
.complete {
  text-decoration: line-through;
}
</style>