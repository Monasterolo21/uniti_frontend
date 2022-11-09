import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {// TODO: Dynamic route
    path: '/chat',
    name: 'chat',
    component: () => import(/* webpackChunkName: "chat" */ '../views/ChatView.vue')
  },
  {
    path: '/balon',
    name: 'balon',
    component: () => import(/* webpackChunkName: "balon" */ '../views/BalonView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
