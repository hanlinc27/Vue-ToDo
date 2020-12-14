<template>
    <div>
        <h1>Vue Your Tasks</h1>
        <input v-model="input" />
        <button v-on:click="add">Submit</button>
        <List name="Tasks " :done="false"></List>
        <List name="Completed " :done="true"></List>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import List from "./List.vue";
import todoService, {ITODO} from "../services/todo"

@Component({})
export default class App extends Vue {

    public input: string = "";

    constructor() {
        super();
    }

    public add() {
        let added = {text:this.input, id:todoService.taskList.length, done:false};
        this.input = "";
        todoService.taskList.push(added);
    }
}

</script>
