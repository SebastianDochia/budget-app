<template>
  <div class="container">
    <div class="top-line">
      <graph></graph>
      <add-form></add-form>
    </div>
    <spending-list></spending-list>
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
  methods: {
    addExpense() {},
  },
  // test POST
  //   mounted() {
  //     axios
  //       .post("http://localhost:8070/api/categories", {
  //         body: { name: "test" },
  //       })
  //       .then((response) => {
  //         console.log(response);
  //       })
  //       .catch((e) => {
  //         this.errors.push(e);
  //       });
  //   },
};
</script>

<style scoped>
.container {
  max-width: 60vw;
  height: 40vh;
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
}
.top-line > * {
    width: 100%
}
</style>
