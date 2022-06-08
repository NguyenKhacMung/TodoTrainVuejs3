<template>
  <NavBar />
  <router-view />
</template>

<script>
import NavBar from './Nav'
export default {
  name: 'HomePage',
  components: {
    NavBar,
  },
}
</script>

<style>
</style>