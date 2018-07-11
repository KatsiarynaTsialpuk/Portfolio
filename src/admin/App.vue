<template lang="pug">
    #root
        header.header
            router-view(name="header")
        nav.tabs
            router-view(name="tabs")
        main.main-content
            router-view
</template>

<script>
import header from "./components/header";
import tabs from "./components/tabs";
import skills from "./components/skills";
const data = [
  { id: 1, title: "Html", percent: 20, category: 0 },
  { id: 2, title: "PHP", percent: 20, category: 1 },
  { id: 3, title: "CSS", percent: 20, category: 0 },
  { id: 4, title: "Node.js", percent: 20, category: 1 },
  { id: 5, title: "Mongo", percent: 20, category: 1 },
  { id: 6, title: "Git", percent: 20, category: 2 },
  { id: 7, title: "Gulp", percent: 20, category: 2 }
];
import { mapActions, mapState, mapGetters } from "vuex";
export default {
  components: {
    appHeader: header,
    tabs,
    skills
  },
  methods: {
    ...mapActions(["getUserInfo"])
  }
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Roboto:200,300,400,500,700&subset=cyrillic");
:root {
  font-size: 16px;
}

@media (max-width: 768px) {
  :root {
    font-size: 14px;
  }
}

body,
html {
  margin: 0;
  padding: 0;
  height: 100%;
}

body {
  font-family: "Roboto", Helvetica, sans-serif;
  font-weight: 300;
  line-height: 1.42;
  color: #455a64;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.wrapper,
#root {
  height: 100%;
}

#root {
  background: url("../assets/images/bg/admin_bg.jpg") center center / cover
    no-repeat;
  display: flex;
  flex-flow: column;
}

.header {
  height: 80px;
}

ul {
  padding: 0;
  margin: 0;

  li {
    list-style: none;
  }
}

::selection {
  background-color: rgba(#00bfa5, 0.7);
}
label,
button,
input,
textarea,
select {
  cursor: pointer;
}
.nav {
  background-color: #f0efe9;
}
.main-content {
  padding: 0 25px;
}
.page {
  height: 100%;
  padding-top: 45px;
}
.title {
  font-size: 21px;
  font-weight: 500;
  margin: 0 0 45px;
}
.btn {
  background-color: #00bfa5;
  color: white;
  padding: 12px 15px;
  font-weight: 500;
  border: none;
  border-radius: 5px;
  transition: 0.3s;
  margin: 25px 0 0 25px;
  &:hover {
    background-color: #008b79;
  }
  &--delete {
    background-color: lightcoral;
    font-weight: 300;
    padding: 5px;
    margin-top: 0;
    &:hover {
      background-color: red;
    }
  }
}

* {
  box-sizing: border-box;
}
.tabs {
  height: 60px;
}
.main-content {
  flex: 1;
  padding: 20px;
}
</style>
