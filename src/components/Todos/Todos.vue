<template>
  <div class="todos">
    <h1>Todos: {{ countTotalTodos }}</h1>
    <ul class="list-group">
      <li
        v-for="(todo, index) in todos"
        :key="todo.id"
        class="list-group-item d-flex justify-content-between"
      >
        <TodoItem :todo="todo" :index="index" @toggleTodo="toggleTodo" />
        <div class="btn btn-primary" @click="deleteTodo(todo.id)">X</div>
      </li>
    </ul>
    <AddTodo @addTodo="addTodo" />
  </div>
</template>

<script>
import TodoItem from './Todo'
import AddTodo from './AddTodo'
import axios from 'axios'
export default {
  name: 'TodosApp',
  components: {
    TodoItem,
    AddTodo,
  },
  data() {
    return {
      todos: [],
    }
  },
  created() {
    this.getTodos()
  },
  computed: {
    countTotalTodos() {
      return this.todos.length
    },
  },
  methods: {
    async getTodos() {
      try {
        const response = await axios.get('/todos/')
        this.todos = response.data
      } catch (error) {
        console.log(error)
      }
    },
    async addTodo(todo) {
      try {
        const response = await axios.post('/todos/', todo)
        this.todos.push(response.data)
      } catch (error) {
        console.log(error)
      }
    },
    async deleteTodo(id) {
      try {
        const response = await axios.delete(`/todos/${id}`)
        console.log('deleteTodo', response)
        this.todos = this.todos.filter((todo) => todo.id !== id)
      } catch (error) {
        console.log(error)
      }
    },
    async toggleTodo(id) {
      try {
        const response = await axios.patch(`/todos/${id}`, {
          completed: !this.todos.find((todo) => todo.id === id).completed,
        })
        const todo = this.todos.find((todo) => todo.id === response.data.id)
        todo.completed = !todo.completed
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>

<style scoped>
.todos {
  margin-top: 60px;
  text-align: center;
  color: #2c3e50;
}
ul {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
</style>