import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'; // 引入 Element Plus 样式

createApp(App).use(store).use(router).use(ElementPlus).mount('#app')
