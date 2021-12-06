<template>
  <div class="add-form">
    <h2>New Expense</h2>
    <form @submit.prevent="onSubmit">
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" v-model.lazy="name" />
      </div>
      <div>
        <label for="value">Value:</label>
        <input type="text" id="value" v-model.lazy="value" />
      </div>
      <div>
        <label for="date">Date:</label>
        <input type="date" id="date" v-model.lazy="date" />
      </div>
      <div class="category-field">
        <p class="add-category-btn" v-on:click="onAddCategory">(+)</p>
        <label for="category">Category:</label>
        <dropdown
          id="category"
          :options="arrayOfCategories"
          :selected="object"
          :updateOption="methodToRunOnSelect"
        ></dropdown>
      </div>
      <button>Submit</button>
    </form>
  </div>
</template>

<script>
import dropdown from "vue-dropdowns";

export default {
  name: "add-form",
  components: {
    dropdown: dropdown,
  },
  methods: {
    methodToRunOnSelect(payload) {
      this.object = payload;
    },
    onAddCategory() {
      this.$emit("adding-category");
    },
    onSubmit() {
      if (!this.name || !this.value || this.object.name == "Category" || !this.date) {
        alert("All fields are required.");
        return;
      }
      if (Number.isInteger(this.value)) {
        alert("Value should be a number.");
        return;
      }

      this.$emit("expense-added", {
        id: Math.floor(Math.random() * 1000000001).toString(),
        name: this.name,
        value: this.value,
        category: this.object.name,
        date: this.date,
      });

      this.name = "";
      this.value = "";
      this.date = "";
      this.object.name = "Category";
    },
  },
  data() {
    return {
      name: "",
      value: "",
      category: "",
      date: "",
      object: {
        name: "Category",
      },
    };
  },
  props: {
    arrayOfCategories: {type: Array, required: true},
  }
};
</script>

<style scoped>
.add-form form > div {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}
form {
  display: flex;
  flex-direction: column;
}
form > button {
  -webkit-appearance: none;
  -moz-appearance: none;
  margin-top: 20px;
  align-self: flex-end;
  border: none;
  padding: 1rem 2rem;
  text-decoration: none;
  background: blueviolet;
  color: #ffffff;
  font-size: 1rem;
  text-align: center;
  transition: background 250ms ease-in-out;
}
button:hover {
  background: #0053ba;
  cursor: pointer;
}
.category-field {
  display: flex;
  align-items: center;
}
.add-category-btn {
  cursor: pointer;
  color: blueviolet;
}
</style>