import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import store from './store'

const app = createApp(App)

app.use(store)

app.mount('#app')
