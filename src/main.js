import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vue3GoogleLogin from 'vue3-google-login'

createApp(App).use(store).use(router).use(vue3GoogleLogin, {
  clientId: '41349424583-vl8ntu0lago0npiigpcfmctjjvl5mmvl.apps.googleusercontent.com'
}).mount('#app')
