import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import helpers from './assets/helpers.scss'

createApp(App).use(store).use(helpers).use(router).mount('#app')
