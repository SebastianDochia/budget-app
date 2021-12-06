<template>
  <div id="app">
    <nav-bar title='Budget-App'></nav-bar>
    <router-view />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>
.container {
  box-sizing: border-box;
  max-width: 60vw;
  height: 80vh;
  margin: auto;
  margin-top: 40px;
  filter: drop-shadow(0 0 0.1rem black);
  background-color: white;
  border-radius: 10px;
  padding: 10px;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  margin: unset;
}
</style>
