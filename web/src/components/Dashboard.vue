<template>
  <div class="container">
      <graph></graph>
  </div>
</template>

<script>
import Graph from './Graph.vue';

export default {
    name: 'dashboard',
    components: {
        Graph
    }
}
</script>

<style scoped>
.container {
    max-width: 60vw;
    height: 40vh;
    margin: auto;
    margin-top: 40px;
    filter: drop-shadow(0 0 0.1rem black);
    background-color: white;
    border-radius: 10px;
    padding: 10px;
}
</style>