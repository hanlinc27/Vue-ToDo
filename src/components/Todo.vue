<template>
<div>
    
    {{todo.text}}
    <input type="checkbox" v-on:click="check(todo.id,todo.done)" :checked="done">
    
</div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import todoService, {ITODO} from "../services/todo"

@Component({
    props: {
        todo: Object,
        done: Boolean,
    }
})
export default class Todo extends Vue {

    public todo: String;
    public done: Boolean;

    constructor() {
        super();
    }

    public check(id:number, done:boolean){
        todoService.move(id, done);
    }

}

</script>