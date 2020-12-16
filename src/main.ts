import Vue from 'vue';
import App from './components/App.vue';
import Todo from './components/Todo.vue';
import List from './components/List.vue';

Vue.component('List', List);
Vue.component('Todo', Todo);

export default new Vue({
  render: (h) => h(App),
}).$mount('#app');
