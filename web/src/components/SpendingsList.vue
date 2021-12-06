<template>
  <div>
    <div class="table-header">
      <p>Value</p>
      <p>Name</p>
      <p>Date</p>
      <p>Category</p>
    </div>
    <ul>
      <li v-for="spending in spendings" :key="spending.id">
        <list-item
          @expense-deleted="deleteExpense"
          :id="spending.id"
          :name="spending.name"
          :value="spending.value"
          :category="spending.category"
          :date="spending.date"
        ></list-item>
      </li>
    </ul>
  </div>
</template>

<script>
import ListItem from "./ListItem.vue";

export default {
  name: "spendings-list",
  components: {
    ListItem,
  },
  props: {
    spendings: { type: Array, required: true },
  },
  methods: {
    deleteExpense(id) {
      this.$emit("expense-deleted", id);
    },
  },
};
</script>

<style>
.table-header {
  display: flex;
  justify-content: space-between;
  margin-right: 100px;
  margin-left: 40px;
  font-weight: 900;
}
</style>