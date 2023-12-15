import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ButtonView from '../views/ButtonView.vue'
import OverlaysView from '../views/OverlaysView.vue'
import ListView from '../views/ListView.vue'
import MainHomeView from '../views/main/HomeView.vue'
import FinishedView from '../views/main/FinishedView.vue'
import CreateView from '../views/main/CreateView.vue'
import SearchView from '../views/main/SearchView.vue'
import SettingsView from '../views/main/SettingsView.vue'
import LoginView from '../views/main/LoginView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/button',
    name: 'button',
    // route level code-splitting
    // this generates a separate chunk (button.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: ButtonView
  },
  {
    path: '/overlays',
    name: 'overlays',
    component: OverlaysView
  },
  {
    path: '/list',
    name: 'list',
    component: ListView
  },
  {
    path: '/main/home',
    name: 'HomeView',
    component: MainHomeView
  },
  {
    path: '/main/finished',
    name: 'FinishedView',
    component: FinishedView
  },
  {
    path: '/main/create',
    name: 'CreateView',
    component: CreateView
  },
  {
    path: '/main/search',
    name: 'SearchView',
    component: SearchView
  },
  {
    path: '/main/setting',
    name: 'SettingsView',
    component: SettingsView
  },
  {
    path: '/main/login',
    name: 'LoginView',
    component: LoginView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
