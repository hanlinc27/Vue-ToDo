<template>
  <div class="app">
    <h1 class="title">Vue Your Tasks</h1>
    <input class="input" v-model="input" placeholder="My first task..." />
    <button class="submit" v-on:click="add">Submit</button>
    <div class="container">
      <div class="tasks">
        <List name="Pending " :done="false"></List>
      </div>
      <div class="completed">
        <List name="Completed " :done="true"></List>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Text&display=swap');
@import url('https://fonts.googleapis.com/css2?family=DM+Sans&display=swap');
.app {
  margin: 0px !important;
  background: #ececec;
  width: 100%;
  height: 100%;
}
.title {
  position: absolute;
  font-family: 'DM Serif Text', serif;
  text-align: left;
  left: 30%;
  top: 15%;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 49px;
  color: #393e41;
}

.container {
  flex-direction: column;
}
.tasks {
  position: flex;
  margin-left: 30%;
  padding-top: 20%;
  font-family: 'DM Serif Text', serif;
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
  position: flex;
  margin-left: 30%;
  font-family: 'DM Serif Text', serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 25px;
  display: flex;
  align-items: left;
  text-align: left;
  color: #393e41;
}
.input {
  position: absolute;
  outline: none;
  top: 25%;
  left: 30%;
  border: none;
  width: 385px;
  height: 52px;
  background: #ffffff;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 15px;

  font-family: 'DM Sans', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 20px;
  display: flex;
  align-items: center;
  padding-left: 10px;
}

.submit {
  position: absolute;
  width: 124px;
  height: 51px;
  left: 50.5%;
  top: 25%;

  background: #bf4342;
  opacity: 87%;

  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  border: none;
  padding-left: 30px;
  font-family: 'DM Sans', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 23px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #ffffff;
}
.submit:hover {
  cursor: pointer;

  background-color: #bf4342;
  opacity: 95%;
}
.submit:active {
  background-color: #bf4342;
  opacity: 100%;
}
</style>

<script lang="ts">
import Vue from 'vue';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.css';
import Component from 'vue-class-component';
import List from './List.vue';
import todoService, { ITODO } from '../services/todo';

@Component({})
export default class App extends Vue {
  public input: string = '';

  constructor() {
    super();
  }

  public add() {
    let added = {
      text: this.input,
      id: todoService.taskList.length,
      done: false,
    };
    this.input = '';
    todoService.taskList.push(added);
  }
}
</script>
