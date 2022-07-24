<template>
  <div class="container grid-xs py-2">
    <form @submit.prevent="add(todo)">
      <div class="input-group">
        <input type="text" v-model="todo.description" class="form-input" placeholder="Novo todo">
        <button type="submit" :class="{ loading }" class="btn btn-primary input-group-btn">Adicionar</button>
      </div>
    </form>
    <div class="todo-list">
      <TodoComponent @remove="removeTodo" @toggle="toggleTodo" v-for="todo in todos" :key="todo.id" :todo="todo" />
    </div>
  </div>
</template>

<script>
import TodoComponent from '@/components/TodoComponent.vue';
import { mapActions, mapState } from "vuex";

export default {
  name: 'HomePage',
  components: {
    TodoComponent
    //TodoComponent: () => import('../components/TodoComponent.vue')
  },
  data() {
    return {
      todo: {
        checked: false
      }
    }
  },
  computed: {
    ...mapState(['todos', 'loading']),
  },
  methods: {
    ...mapActions(['addTodo', 'toggleTodo', 'removeTodo']),

    async add(todo) {
      if (!todo.description || todo.description.trim() === '') return;
      // todo.id = Date.now();
      // this.todos.push(todo);
      await this.addTodo(todo);
      this.todo = { checked: false };
    },
  },
}
</script>

<style scoped>
.todo-list {
  padding-top: 2rem;
}
</style>