<template>
  <div class="task">
    {{ todo.text }}
    <input type="button" class="checkbox" v-on:click="check(todo.id, todo.done)" :checked="done" />
  </div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans&display=swap');

.checkbox {
  cursor: pointer;
  position: absolute;
  border: 3px solid #cba328;
  box-sizing: border-box;
  filter: drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.05));
  width: 20px;
  height: 20px;
  border-radius: 100px;
  outline: none;
  left: 1000px;
  margin-bottom: 14px;
  background: #e5e5e5;
}

.task {
  font-family: 'DM Sans', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 20px;
  align-items: center;
padding-top: 14px;
  padding-left: 9px;
  margin-top: 9px;
  width: 385px;
  height: 52px;
  background: #ffffff;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
}

.checkbox:active {
  background: #cba328;
}
</style>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import todoService, { ITODO } from '../services/todo';

@Component({
  props: {
    todo: Object,
    done: Boolean,
  },
})
export default class Todo extends Vue {
  public todo: String;
  public done: Boolean;

  constructor() {
    super();
  }

  public check(id: number, done: boolean) {
    todoService.move(id, done);
  }
}
</script>
