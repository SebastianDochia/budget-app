<template>
  <div class="entry-line">
    <p>{{ "$" + this.value }}</p>
    <p class="name">{{ this.name }}</p>
    <p>{{ this.date }}</p>
    <p class="category">{{ this.category }}</p>
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
  height: 40px;
  align-items: center;
}
.entry-line p {
  width: 25%;
  text-overflow: ellipsis;
}
.entry-line p:first-of-type {
  width: 17%;
}
p.name {
  width: 35%;
}
p.category {
  width: 20%;
}
.entry-line .red-x {
  color: red;
  cursor: pointer;
  width: 5%;
}
@media only screen and (max-width: 440px) {
  .entry-line {
    height: 70px;
    border-style: solid;
    border-width: 1px;
  }
  p.name {
    padding-left: 10px;
  }
}
</style>