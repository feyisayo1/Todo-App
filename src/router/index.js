import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddTodo from '../views/AddTodo.vue'
import EditTodo from '../views/EditTodo.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path:'/add',
    name: 'AddTodo',
    component: AddTodo

  },
  {
    path: '/project/:id',
    name: 'EditTodo',
    component: EditTodo,
    props:true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
