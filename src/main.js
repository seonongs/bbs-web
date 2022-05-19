import { createApp } from 'vue'
import router from './router'
import store from "./store";
import App from './App.vue'

import WaveUI from 'wave-ui'
import 'wave-ui/dist/wave-ui.css'
import '@mdi/font/css/materialdesignicons.min.css'

createApp(App).use(router).use(store).use(WaveUI).mount('#app')
