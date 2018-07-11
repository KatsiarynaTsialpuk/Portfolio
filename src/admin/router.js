import Vue from "vue";
import VueRouter from "vue-router";
import axios from "axios";

Vue.use(VueRouter);

const guard = axios.create({
  baseURL: "http://webdev-api.loftschool.com"
});

import skills from "./components/skills.vue";
import header from "./components/header.vue";
import tabs from "./components/tabs.vue";
import works from "./components/works.vue";

const routes = [
  {
    path: "/portfolio/admin",
    components: {
      header: header,
      tabs: tabs
    }
  },
  {
    path: "/portfolio/admin/skills",
    components: {
      default: skills,
      header: header,
      tabs: tabs
    }
  },
  {
    path: "/portfolio/admin/works",
    components: {
      default: works,
      header: header,
      tabs: tabs
    }
  }
];

const router = new VueRouter({ routes, mode: "history" });

router.beforeEach((to, from, next) => {
  guard
    .get("/user", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
    .then(response => {
      next();
    })
    .catch(error => {
      console.log("error in router");
      localStorage.removeItem("token");
      window.location.href = "../";
    });
});

export default router;
