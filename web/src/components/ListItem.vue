<template>
  <div class="entry-line">
    <p>{{ "$" + this.value }}</p>
    <p>{{ this.name }}</p>
    <p>{{ this.date }}</p>
    <p>{{ this.category }}</p>
    <p class="red-x" @click="onDelete(id)">X</p>
  </div>
</template>

<script>
export default {
  name: "list-item",
  props: {
    id: { required: true, type: String },
    name: { required: true, type: String },
    value: { required: true, type: String },
    category: { required: true, type: String },
    date: { required: true, type: String },
  },
  methods: {
    onDelete(id) {
      this.$emit("expense-deleted", id);
    },
  },
};
</script>

<style>
.entry-line {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.entry-line p {
  width: 25%;
  text-overflow: ellipsis;
}
.entry-line .red-x {
  color: red;
  cursor: pointer;
  width: 5%;
}
</style>