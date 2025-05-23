import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './config/router'
import 'vant/es/toast/style';


const app = createApp(App)

app.use(router)
app.mount('#app')
