<template>
  <div>
    <dropdown
      class="filter-dropdown"
      :options="filterOptions"
      :selected="object"
      @updateOption="onSelect"
    ></dropdown>
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
import dropdown from "vue-dropdowns";

export default {
  name: "spendings-list",
  components: {
    ListItem,
    dropdown: dropdown,
  },
  data() {
    return {
      filterOptions: [
        { name: "Ascending Price" },
        { name: "Descending Price" }
      ],
      object: {
        name: "Filter Price",
      },
    };
  },
  props: {
    spendings: { type: Array, required: true },
  },
  methods: {
    deleteExpense(id) {
      this.$emit("expense-deleted", id);
    },
    onSelect(payload) {
      if(payload.name == "Ascending Price") {
        this.spendings.sort((a, b) => a.value - b.value);
      } else if(payload.name == "Descending Price") {
        this.spendings.sort((a, b) => b.value - a.value);
      }
    }
  },
};
</script>

<style>
.table-header {
  display: flex;
  justify-content: space-between;
  margin-right: 80px;
  font-weight: 900;
}
.table-header p {
  width: 25%;
  text-align: center;
}
.filter-dropdown {
  margin-left: 55px;
}
</style>