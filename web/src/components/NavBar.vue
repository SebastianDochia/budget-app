<template>
  <div class='navbar'>
    <h2>{{ title }}</h2>
    <span class="links">
      <router-link to="/">Dashboard</router-link>
      <router-link to="/stats">Stats</router-link>
    </span>
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
.links > *, .links > *:visited {
  color: white;
  padding: 10px 30px;
  text-decoration: none;
  display: inline-block;
  font-weight: bold;
  font-size: 1.2rem;
}
.links > *:hover {
  color: gainsboro;
}
@media only screen and (max-width: 560px) {
  .links > *, .links > *:visited {
  padding: 5px 10px;
  font-weight: 400;
  font-size: 1rem;
}
}
</style>
