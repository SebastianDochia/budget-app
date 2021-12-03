<template>
  <ul>
    <li v-for="spending in spendings" :key="spending.id">
      <list-item :name="spending.name" :value="spending.value" :category="spending.category" :date="spending.date"></list-item>
    </li>
  </ul>
</template>

<script>
import ListItem from "./ListItem.vue";

export default {
  name: "spendings-list",
  components: {
    ListItem
  },
  props: {
    spendings: {type: Array, required: true}
  },
};
</script>

<style>
</style>