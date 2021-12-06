<template>
  <div class="container">
    <div class="top-line">
      <add-form
        @expense-added="addExpense"
        @adding-category="addingCategory"
        :arrayOfCategories="categories"
      ></add-form>
      <div>
        <new-category
          v-if="isAddingCategory"
          @category-added="addCategory"
        ></new-category>
      </div>
    </div>
    <spending-list
      @expense-deleted="deleteExpense"
      :spendings="expenses"
    ></spending-list>
  </div>
</template>

<script>
import AddForm from "./AddForm.vue";
import NewCategory from "./NewCategory.vue";
import SpendingList from "./SpendingsList.vue";
import axios from "axios";

export default {
  name: "dashboard",
  components: {
    AddForm,
    SpendingList,
    NewCategory,
  },
  data() {
    return {
      expenses: [],
      categories: [],
      isAddingCategory: false,
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
    addingCategory() {
      console.log("BOSS");
      this.isAddingCategory = true;
    },
    addCategory(category) {
      this.isAddingCategory = false;
      this.categories.push(category);

      axios
        .post("http://localhost:8070/api/categories", {
          body: category,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((e) => {
          this.errors.push(e);
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
      const itemIndex = this.expenses.findIndex((item) => item.id === id);
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
    this.getCategories();
  },
};
</script>

<style scoped>
.top-line {
  display: flex;
  padding: 10px;
  margin-bottom: 30px;
}
.top-line > * {
  width: 100%;
  margin: 20px;
}
</style>
