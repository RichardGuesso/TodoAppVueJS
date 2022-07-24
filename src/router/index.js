import Router from "vue-router";
import HomePage from "@/views/HomePage"
import KanbanPage from "@/views/KanbanPage"
import Vue from "vue";

Vue.use(Router);

const routes = [
  {
    name: 'home',
    path: '/',
    component: HomePage,
  },
  {
    name: 'kanban',
    path: '/kanban',
    component: KanbanPage,
  }
]

const router = new Router({ routes });

export default router;