<template>
  <div class="add-form">
    <h2>New Category</h2>
    <form @submit.prevent="onSubmit">
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" v-model.lazy="name" />
      </div>
      <button>Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "new-category",
  data() {
    return {
        name: ""
    };
  },
  methods: {
    onSubmit() {
      if (!this.name) {
        alert("All fields are required.");
        return;
      }

      this.$emit("category-added", {
        id: Math.floor(Math.random() * 1000000001).toString(),
        name: this.name,
      });

      this.name = "";
    },
  },
};
</script>

<style>
form {
  display: flex;
  flex-direction: column;
}
.add-form form > div {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
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
</style>