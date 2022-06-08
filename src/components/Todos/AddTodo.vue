<template>
  <form @submit="addTodo">
    <div class="mb-3 mt-5">
      <input type="text" class="form-control" v-model="newTodoText" />
    </div>
    <div class="mb-3">
      <select id="disabledSelect" class="form-select" v-model="select">
        <!-- <option disabled value="">Please select one</option> -->
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
    </div>
    <div class="mb-3">
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          id="cc"
          v-model="completed"
        />
        <label class="form-check-label" for="cc"> Completed </label>
      </div>
    </div>
    <button type="submit" class="btn btn-primary">Add todo</button>
  </form>
</template>

<script>
export default {
  name: 'AddTodo',
  emits: ['addTodo'],
  data() {
    return {
      newTodoText: '',
      completed: false,
      select: 'A'
    }
  },
  methods: {
    addTodo(e) {
      e.preventDefault()
      const newTodo = {
        id: Math.random(),
        title: this.newTodoText,
        completed: this.completed,
        tag: this.select
      }
      if (this.newTodoText && this.newTodoText.trim() !== '') {
        this.$emit('addTodo', newTodo)
        this.newTodoText = ''
        this.completed = false
        this.select = 'A'
      } else {
        alert('Please enter a todo!')
      }
    }
  }
}
</script>

<style>
</style>