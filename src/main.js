import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import TitleInput from '@/components/fragments/TitleInput.vue'
import ModalCenter from '@/components/layouts/ModalCenter.vue'
import ModalBottom from '@/components/layouts/ModalBottom.vue'
import ButtonCmp from '@/components/fragments/ButtonCmp.vue'
import listCmp from '@/components/fragments/listCmp.vue'
import inputField from '@/components/fragments/inputField.vue'
import tagCmp from '@/components/fragments/TagCmp.vue'
import noteCmp from '@/components/fragments/noteCmp.vue'
import TabBar from '@/components/fragments/TabBar.vue'
import TaskBar from '@/components/fragments/TaskBar.vue'
import NavBar from '@/components/fragments/NavBar.vue'
import common from './assets/js/common'
import '@/assets/scss/index.scss'

const app = createApp(App)
app.use(store)
app.use(router)
app.mixin(common)
app.component('TitleInput', TitleInput)
app.component('ModalCenter', ModalCenter)
app.component('ModalBottom', ModalBottom)
app.component('ButtonCmp', ButtonCmp)
app.component('listCmp', listCmp)
app.component('inputField', inputField)
app.component('tagCmp', tagCmp)
app.component('noteCmp', noteCmp)
app.component('TabBar', TabBar)
app.component('TaskBar', TaskBar)
app.component('NavBar', NavBar)
app.mount('#app')
