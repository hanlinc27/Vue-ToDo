<template>
    <div>
        <h3>{{name}}</h3>
        <div>
            <div v-for="t in hold" :key="t.id">
                <Todo :todo="t" :done="done"></Todo>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import todoService, {ITODO} from "../services/todo"

@Component({
    props: {
        name: String,
        done: Boolean,
    }
})
export default class List extends Vue {

    public name: String;
    public done: Boolean;

    private hold=Vue.observable(todoService.taskList); 

    constructor() {
        super();
    }

    created() {
        if (this.done){
            this.hold = Vue.observable(todoService.doneList);
        }
        else{
            this.hold = Vue.observable(todoService.taskList);
        }
    }
}

</script>
