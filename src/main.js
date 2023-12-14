import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import TitleInput from '@/components/fragments/TitleInput.vue'
import ModalCenter from '@/components/layouts/ModalCenter.vue'
import ModalBottom from '@/components/layouts/ModalBottom.vue'
import ButtonCmp from '@/components/fragments/ButtonCmp.vue'
import listCmp from '@/components/fragments/listCmp.vue'
import common from './assets/js/common'

const app = createApp(App)
app.use(store)
app.use(router)
app.mixin(common)
app.component('TitleInput', TitleInput)
app.component('ModalCenter', ModalCenter)
app.component('ModalBottom', ModalBottom)
app.component('ButtonCmp', ButtonCmp)
app.component('listCmp', listCmp)
app.mount('#app')
