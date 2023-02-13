import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vue3GoogleLogin from 'vue3-google-login'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

// Vue.config.productionTip = false

// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')


createApp(App).use(store).use(router).use(VueSweetalert2).use(vue3GoogleLogin, {
  clientId: '41349424583-vl8ntu0lago0npiigpcfmctjjvl5mmvl.apps.googleusercontent.com'
}).mount('#app')
