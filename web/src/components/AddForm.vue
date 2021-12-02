<template>
  <div>
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
        <label for="category">Category:</label>
        <input type="text" id="category" v-model.lazy="category" />
      </div>
      <div>
        <label for="date">Date:</label>
        <input type="date" id="date" v-model.lazy="date" />
      </div>
      <button>Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "add-form",
  methods: {
    onSubmit() {
      console.log(this.name);
    },
  },
  data() {
    return {
      name: "",
      value: "",
      category: "",
      date: "",
    };
  },
};
</script>

<style>
</style>