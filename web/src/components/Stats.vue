<template>
  <div class="container">
    <div>
      <h2>Totals</h2>
      <p>Total Spent: ${{ totalSpent }}</p>
      <p>Transactions Count: {{ expenses.length }}</p>
      <p>Average Transaction Value: ${{ averageTransaction }}</p>
      <p>Largest Transaction: ${{ largestTransaction }}</p>
    </div>
    <div class="totals-box">
      <h2>Totals by Category</h2>
      <dropdown
        :options="categories"
        :selected="object"
        @updateOption="methodToRunOnSelect"
      ></dropdown>
      <p>Total Spent: ${{ categoryTotalSpent }}</p>
      <p>Transactions Count: {{ categoryExpenses.length }}</p>
      <p>Average Transaction Value: ${{ categoryAverageTransaction }}</p>
      <p>Largest Transaction: ${{ categoryLargestTransaction }}</p>
    </div>
  </div>
</template>

<script>
import dropdown from "vue-dropdowns";
import axios from "axios";

export default {
  name: "stats",
  components: {
    dropdown: dropdown,
  },
  data() {
    return {
      categories: [],
      expenses: [],
      categoryExpenses: [],
      totalSpent: 0,
      averageTransaction: 0,
      largestTransaction: 0,
      selectedCategory: "",
      categoryTotalSpent: 0,
      categoryAverageTransaction: 0,
      categoryLargestTransaction: 0,
      object: {
        name: "Category",
      },
    };
  },
  methods: {
    getCategories() {
      axios.get("http://localhost:8070/api/categories").then((response) => {
        this.categories = response.data;
      });
    },
    getExpenses() {
      axios.get("http://localhost:8070/api/expenses").then((response) => {
        this.expenses = response.data;
        this.getFigures();
      });
    },
    getFigures() {
      let total = 0;
      let largest = 0;

      for (let i = 0; i < this.expenses.length; i++) {
        const current = parseInt(this.expenses[i].value);

        total += current;
        if (current > largest) {
          largest = current;
        }
      }

      this.largestTransaction = largest;
      this.averageTransaction =
        Math.round((total / this.expenses.length + Number.EPSILON) * 100) / 100;
      this.totalSpent = total;
    },
    getCategoryFigures() {
      let total = 0;
      let largest = 0;

      for (let i = 0; i < this.categoryExpenses.length; i++) {
        const current = parseInt(this.categoryExpenses[i].value);

        total += current;
        if (current > largest) {
          largest = current;
        }
      }

      this.categoryLargestTransaction = largest;
      this.categoryAverageTransaction =
        Math.round((total / this.expenses.length + Number.EPSILON) * 100) / 100;
      this.categoryTotalSpent = total;
    },
    methodToRunOnSelect(payload) {
      this.object = payload;
      this.selectedCategory = this.object.name;

      this.categoryExpenses = this.expenses.filter(
        (expense) => expense.category == this.selectedCategory
      );

      this.getCategoryFigures();
    },
  },
  created() {
    this.getExpenses();
    this.getCategories();
  },
};
</script>

<style scoped>
.container {
  padding: 40px;
  height: unset;
}
.totals-box {
  margin-top: 40px;
}
</style>