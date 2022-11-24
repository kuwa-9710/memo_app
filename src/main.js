import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// vuexをインストールすると追加される
import store from './store'

createApp(App).use(store).use(router).mount('#app')
