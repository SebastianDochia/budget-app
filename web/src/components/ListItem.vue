<template>
  <div class="entry-line">
      <p>{{ this.value }}</p>
      <p>{{ this.name }}</p>
      <p>{{ this.date }}</p>
      <p>{{ this.category }}</p>
  </div>
</template>

<script>
export default {
  name: "list-item",
  props: {
    name: { required: true, type: String },
    value: { required: true, type: String },
    category: { required: true, type: String },
    date: { required: true, type: String },
  },
};
</script>

<style>
.entry-line {
    display: flex;
    width: 100%;
    justify-content: space-between;
}
</style>