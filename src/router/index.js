import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { transition: 'fade'  },
  },
  {// TODO: Dynamic route
    path: '/chat',
    name: 'chat',
    component: () => import(/* webpackChunkName: "chat" */ '../views/ChatView.vue'),
    meta: { transition: 'fade'  },
  },
  {
    path: '/balon',
    name: 'balon',
    component: () => import(/* webpackChunkName: "balon" */ '../views/BalonView.vue'),
    meta: { transition: 'fade'  },
  },
  {
    path: '/subscription',
    name: 'subscription',
    component: () => import(/* webpackChunkName: "subscription" */ '../views/SubscriptionView.vue'),
    meta: { transition: 'fade'  },
  },
  {
    path: '/friends',
    name: 'friends',
    component: () => import(/* webpackChunkName: "friends" */ '../views/FriendsView.vue'),
    meta: { transition: 'fade'  },
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
