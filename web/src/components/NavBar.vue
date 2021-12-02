<template>
  <div class='navbar'>
    <h2>{{ title }}</h2>
    <span>
      <span>Log-In</span>
      <span>Sign-Up</span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'nav-bar',
  props: {
    title: {type: String},
    isAuth: {default: false, type: Boolean}
  }
}
</script>

<style scoped>
.navbar {
  background-color: blueviolet;
  width: 100%;
  height: 50px;
  display: flex;
  color: white;
  align-items: center;
  justify-content: space-between;
}
span {
  text-align: center;
  padding-right: 10px;
}
h2 {
  padding-left: 15px;
}
</style>
