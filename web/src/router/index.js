import Vue from "vue";

import Router from "vue-router";

import Dashboard from "../components/Dashboard.vue";
import Stats from "../components/Stats.vue";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/stats',
      name: 'Stats',
      component: Stats
    }
  ]
})
