<template>
  <div class="tile" :class="{ checked: todo.checked }">
    <div class="tile-icon">
      <i class="icon icon-2x" :class="todo.checked ? 'icon-check' : 'icon-time'"></i>
    </div>
    <div class="tile-content">
      <p class="tile-subtitle">{{ todo.description }}</p>
      <div>
        <button @click="$emit('toggle', todo)" class="btn btn-link">
          <span v-if="todo.checked">Desmarcar</span>
          <span v-else>Concluir</span>
        </button>
        <button @click="$emit('remove', todo)" class="btn btn-link">
          <span class="text-error">Remover</span>
        </button>
      </div>
    </div>
    <div class="tile-action">

    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoComponent',
  props: {
    todo: { type: Object, required: true }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.checked {
  text-decoration: line-through;
  color: lightgray;
}

.tile {
  margin-top: 1rem;
  padding: 1rem;
  box-shadow: 0 0.25rem 1rem rgba(48, 55, 66, .15);
}
</style>
