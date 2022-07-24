import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  todos: [],
  loading: false,
}

const actions = {
  addTodo({ commit }, todo) {
    commit('setLoading', true);
    return new Promise((resolve) => {
      setTimeout(() => {
        todo.id = Date.now();
        commit('addTodo', todo);
        commit('setLoading', false);
        resolve(todo);
      }, 500);
    });
  },
  toggleTodo({ commit }, todo) {
    commit('toggleTodo', todo);
  },
  removeTodo({ commit }, todo) {
    commit('removeTodo', todo);
  },
  checkAllTodos({ commit, state }) {
    const ids = state.todos.filter(i => !i.checked).map(i => i.id);
    commit('toggleAllTodos', ids);
  },
  unCheckAllTodos({ commit, state }) {
    const ids = state.todos.filter(i => i.checked).map(i => i.id);
    commit('toggleAllTodos', ids);
  },
  removeAllCheckeds({ commit, state }) {
    const ids = state.todos.filter(i => i.checked).map(i => i.id);
    commit('removeAll', ids);
  },
  removeAllUncheckeds({ commit, state }) {
    const ids = state.todos.filter(i => !i.checked).map(i => i.id);
    commit('removeAll', ids);
  }
}

const mutations = {
  addTodo(state, payload) {
    state.todos.push(payload);
  },
  setLoading(state, payload) {
    state.loading = payload;
  },
  toggleTodo(state, payload) {
    // state.todos = state.todos.map(todo => {
    //   if (todo.id !== payload.id) todo.checked = false;
    //   return todo;
    // });
    const index = state.todos.findIndex(item => item.id === payload.id);
    if (index > -1) {
      const checked = !state.todos[index].checked;
      Vue.set(state.todos, index, { ...state.todos[index], checked })
    }
  },
  removeTodo(state, payload) {
    state.todos = state.todos.filter(todo => todo.id !== payload.id);
    // const index = state.todos.findIndex(item => item.id === payload.id);
    // if (index > -1) {
    //   Vue.delete(state.todos, index);
    // }
  },
  toggleAllTodos(state, todosIds) {
    state.todos = state.todos.map(item => {
      return todosIds.includes(item.id) ? { ...item, checked: !item.checked } : item;
    });
  },
  removeAll(state, todosIds) {
    state.todos = state.todos.filter(item => !todosIds.includes(item.id));
  }
}

const getters = {
  uncheckeds(state) {
    return state.todos.filter(todo => todo.checked === false);
  },
  checkeds(state) {
    return state.todos.filter(todo => todo.checked === true);
  }
}

const store = new Vuex.Store({ state, actions, mutations, getters });

export default store;