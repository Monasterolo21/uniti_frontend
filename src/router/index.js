import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
    {
        path: '/home',
        name: 'home',
        component: HomeView,
        meta: { transition: 'fade'  },
    },
    
    {
        path: '/balon',
        name: 'balon',
        component: () => import(/* webpackChunkName: "balon" */ '../views/BalonView.vue'),
        meta: { transition: 'fade'  },
    },
    {
        path: '/createads',
        name: 'createads',
        component: () => import(/* webpackChunkName: "balon" */ '../views/BalonCreateView.vue'),
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
    {
        path: '/products/:id',
        name: 'products',
        component: () => import('@/views/ProductDetailsView.vue'),
        meta: {transitionName: 'fade'}
    },
    {
        path:'/search',
        name:'search',
        component: () => import('@/views/SearchView.vue'),
        meta: {transitionName: 'fade'}
    },
    {
        path:'/profile',
        name:'profile',
        component: () => import('@/views/ProfileView.vue'),
        meta: {transitionName: 'fade'}
    },
    {
        path: '/group/:id',
        name:'group',
        component: () => import('@/views/BachecaView.vue'),
        meta: {transitionName: 'fade'}
    },
    {
        path: '/',
        name: 'login',
        component: () => import('@/views/LoginPage.vue'),
        meta: { 
            transition: 'fade', 
            hideNavbar: true,
        },
    },
    {
        path: '/error',
        name: 'error',
        component: () => import('@/views/ErrorView.vue'),
        meta: { 
            transition: 'fade',  
            hideNavbar: true,
        },
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
