<template >
  <div class="app">
    <h1 class="title">Vue Your Tasks</h1>

    <input class = "input" v-model="input" />
          <md-button class="md-raised">Default</md-button>

    <button v-on:click="add">Submit</button>
    <div class="tasks">
      <List name="Pending " :done="false"></List>
    </div>
    <div class="completed">
      <List name="Completed " :done="true"></List>
    </div>
  </div>
</template>
<style lang="scss" scoped>

</style>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=DM+Serif+Text&display=swap");

.app {
  margin: 0px !important;
  background: #ececec;
  width: 100%;
  height: 100%;
}
.title {
  position: absolute;
  font-family: "DM Serif Text", serif;
  text-align: left;
  left: 30%;
  top: 15%;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 49px;
  color: #393e41;
}

.tasks {
  position: absolute;
  left: 30%;
  top: 35%;
  font-family: "DM Serif Text", serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 25px;
  display: flex;
  align-items: left;
  text-align: left;
  color: #393e41;
}
.completed {
  position: absolute;
  left: 30%;
  top: 55%;
  font-family: "DM Serif Text", serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 25px;
  display: flex;
  align-items: left;
  text-align: left;
  color: #393e41;
}
.input{
    position: absolute;
    top: 25%;
    left: 30%;
    border: none;
    width: 385px;
height: 52px;
background: #FFFFFF;
box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
border-radius: 15px;

}

</style>



<script lang="ts">
import Vue from "vue";
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import Component from "vue-class-component";
import List from "./List.vue";
import todoService, { ITODO } from "../services/todo";

@Component({})
export default class App extends Vue {
  public input: string = "";

  constructor() {
    super();
  }

  public add() {
    let added = {
      text: this.input,
      id: todoService.taskList.length,
      done: false,
    };
    this.input = "";
    todoService.taskList.push(added);
  }
}
</script>
