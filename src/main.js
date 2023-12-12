import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ModalCenter from '@/components/fragments/ModalCenter.vue'
import ModalBottom from '@/components/fragments/ModalBottom.vue'
import common from './assets/js/common'

const app = createApp(App)
app.use(store)
app.use(router)
app.mixin(common)
app.component('ModalCenter', ModalCenter)
app.component('ModalBottom', ModalBottom)
app.mount('#app')
