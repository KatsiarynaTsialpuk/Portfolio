<template lang="pug">
    div
        input(type="text" placeholder="Название проекта" v-model="work.title")
        br
        input(type="text" placeholder="Технологии" v-model="work.techs")
        br
        input(type="text" placeholder="Ссылка" v-model="work.link")
        br
        input(type="file" @change="addPhoto")
        br
        hr
        button(@click="addNewWork") Добавить работу
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      work: {
        title: "",
        techs: "",
        link: "",
        photo: ""
      }
    };
  },
  methods: {
    ...mapActions(["addWork"]),
    addPhoto(e) {
      const files = e.target.files;
      if (files.length === 0) return;
      this.work.photo = files[0];
    },
    addNewWork() {
      const formData = new FormData();
      Object.keys(this.work).forEach(prop => {
        formData.append(prop, this.work[prop]);
      });
      this.addWork(formData);
    }
  }
};
</script>

<style lang="scss" scoped>
.works__head {
  margin: 0;
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: 500;
}
.works__form {
  display: flex;
  flex-direction: column;
}
.works__row {
  max-width: 300px;
  margin-bottom: 25px;
}
.works__input {
  padding: 15px 20px;
  border: none;
  border-radius: 5px;
  outline: none;
  font-family: "Roboto", Helvetica, sans-serif;
  width: -webkit-fill-available;
}
.works__file {
  display: none;
}
.works__desc {
  color: #00bfa5;
  margin-left: 50px;
  font-weight: 500;
  display: flex;
  &::after {
    position: absolute;
    left: 24px;
    content: "";
    background: url("../img/load.png") center center no-repeat;
    width: 35px;
    height: 34px;
  }
}
.works__list {
  margin-top: 20px;
}
.works__item {
  margin-bottom: 20px;
  display: flex;
}
.work__text {
  margin-right: 30px;
  width: 100px;
}
</style>
