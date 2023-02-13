import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import icons from 'primeicons/primeicons.css';
import helpers from './assets/helpers.scss'

createApp(App).use(store).use(icons).use(helpers).use(router).mount('#app')
