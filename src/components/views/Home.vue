<template>
  <div class="homepage container">
    <div class="row">
      <div class="col-md-4 mx-auto">
        <TodosApp />
      </div>
    </div>
  </div>
</template>

<script>
import TodosApp from '../Todos/Todos'
export default {
  name: 'Home-View',
  components: {
    TodosApp,
  },
}
</script>

<style>
</style>