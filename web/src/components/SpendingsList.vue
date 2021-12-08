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
      <li v-for="spending in paginatedSpendings" :key="spending.id">
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
    <div class="paginator">
      <p @click="onPageBack()">&lt;</p>
      <p>{{ currentPage + "/" + totalPages }}</p>
      <p @click="onPageForward()">></p>
    </div>
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
  props: {
    spendings: { type: Array, required: true },
  },
  data() {
    return {
      filterOptions: [
        { name: "Ascending Price" },
        { name: "Descending Price" },
      ],
      paginatedSpendings: [],
      object: {
        name: "Filter Price",
      },
      currentPage: 1,
      totalPages: 2,
    };
  },
  watch: {
    deep: true,
    imediate: true,
    spendings() {
      this.paginate();
    },
  },
  methods: {
    deleteExpense(id) {
      this.$emit("expense-deleted", id);
    },
    onSelect(payload) {
      if (payload.name == "Ascending Price") {
        this.spendings.sort((a, b) => a.value - b.value);
      } else if (payload.name == "Descending Price") {
        this.spendings.sort((a, b) => b.value - a.value);
      }
    },
    onPageForward() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        this.paginate();
      }
    },
    onPageBack() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.paginate();
      }
    },
    partition(array, size, offset) {
      offset |= 0;
      var result = [];

      while (offset < array.length) {
        result.push(array.slice(offset, (offset += size)));
      }

      return result;
    },
    paginate() {
      this.totalPages = Math.ceil(this.spendings.length / 10);

      const partitions = this.partition(this.spendings, 10);
      this.paginatedSpendings = partitions[this.currentPage - 1];
      console.log("Pagination Ran");
    },
  },
};
</script>

<style>
.table-header {
  display: flex;
  justify-content: space-between;
  margin-right: 60px;
  font-weight: 900;
}
.table-header p {
  width: 25%;
  text-align: center;
}
.filter-dropdown {
  margin-left: 60px;
}
.paginator {
  display: flex;
  justify-content: space-between;
  margin-left: 40px;
  margin-right: 40px;
}
.paginator p:nth-child(odd) {
  cursor: pointer;
}
@media only screen and (max-width: 440px) {
  ul {
    padding: 0;
    list-style-type: none;
  }
}
@media only screen and (max-width: 650px) {
  .table-header {
    margin-right: 40px;
  }
}
@media only screen and (max-width: 380px) {
  .table-header {
    margin-right: 0px;
  }
}
</style>