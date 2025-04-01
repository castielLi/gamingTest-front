import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/main.css'
import './assets/css/template.css'



const app = createApp(App)// 注册Font Awesome组件
app.use(router)
app.mount('#app')
