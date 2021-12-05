<template>
  <div class="container">
    <div class="top-line">
      <graph></graph>
      <add-form @expense-added="addExpense" :arrayOfCategories="categories"></add-form>
    </div>
    <spending-list
      @expense-deleted="deleteExpense"
      :spendings="expenses"
    ></spending-list>
  </div>
</template>

<script>
import Graph from "./Graph.vue";
import AddForm from "./AddForm.vue";
import SpendingList from "./SpendingsList.vue";
import axios from "axios";

export default {
  name: "dashboard",
  components: {
    Graph,
    AddForm,
    SpendingList,
  },
  data() {
    return {
      expenses: [],
      categories: [],
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
      });
    },
    addExpense(expense) {
      this.expenses.push(expense);

      axios
        .post("http://localhost:8070/api/expenses", {
          body: expense,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },
    deleteExpense(id) {
      const itemIndex = this.expenses.findIndex(item => item.id === id);
      this.expenses.splice(itemIndex, 1);
      
      axios
        .delete(`http://localhost:8070/api/expenses/${id}`)
        .then((response) => {
          console.log(response);
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },
  },
  created() {
    this.getExpenses();
    this.getCategories()
  },
};
</script>

<style scoped>
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
.top-line {
  display: flex;
  padding: 10px;
  margin-bottom: 30px;
}
.top-line > * {
  width: 100%;
}
</style>
