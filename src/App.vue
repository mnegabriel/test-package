<template>
  <div id="app">
    <InputButton/>
  </div>
</template>

<script>
import InputButton from './components/InputButton.vue'

export default {
  name: 'App',
  components: {
    InputButton
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
