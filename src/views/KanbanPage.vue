<template>
  <div class="container-board mb-2">
    <div class="columns">
      <div class="column col-5">
        <div class="panel">
          <div class="panel-header">
            <div class="panel-title">Todo</div>
          </div>
          <div class="panel-body">
            <TodoComponent @remove="removeTodo" @toggle="toggleTodo" v-for="todo in uncheckeds" :key="todo.id"
              :todo="todo" />
          </div>
          <div class="panel-footer">
            <button @click="checkAllTodos" v-if="uncheckeds.length > 0" class="btn btn-link float-right">Concluir
              tudo</button>
            <button @click="removeAllUncheckeds" v-if="uncheckeds.length > 0"
              class="btn btn-link float-right text-error">Remover
              tudo</button>
          </div>
        </div>
      </div>

      <div class="column col-5">
        <div class="panel">
          <div class="panel-header">
            <div class="panel-title">Done</div>
          </div>
          <div class="panel-body">
            <TodoComponent @remove="removeTodo" @toggle="toggleTodo" v-for="todo in checkeds" :key="todo.id"
              :todo="todo" />
          </div>
          <div class="panel-footer">
            <button @click="unCheckAllTodos" v-if="checkeds.length > 0" class="btn btn-link float-right">Desmarcar
              tudo</button>
            <button @click="removeAllCheckeds" v-if="checkeds.length > 0"
              class="btn btn-link float-right text-error">Remover
              tudo</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TodoComponent from '@/components/TodoComponent.vue';
import { mapGetters, mapActions } from "vuex";

export default {
  name: 'KanbanPage',
  components: { TodoComponent },
  computed: {
    ...mapGetters(['uncheckeds', 'checkeds'])
  },
  methods: {
    ...mapActions(['toggleTodo', 'removeTodo', 'checkAllTodos', 'unCheckAllTodos', 'removeAllCheckeds', 'removeAllUncheckeds'])
  }
}
</script>

<style scoped>
.container-board {
  max-height: calc(100vh - 116px);
  padding: 10px;
}

.columns .column .panel {
  height: calc(100vh - 144px);
  border: 0;
  box-shadow: 0 0.25rem 1rem rgba(48, 55, 66, .15);
}
</style>