import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

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
    component: () =>
      import(/* webpackChunkName: "button" */ '../views/ButtonView.vue')
  },
  {
    path: '/overlays',
    name: 'overlays',
    component: () =>
      import(/* webpackChunkName: "overlays" */ '../views/OverlaysView.vue')
  },
  {
    path: '/main/home',
    name: 'HomeView',
    component: () =>
      import(/* webpackChunkName: "main" */ '../views/main/HomeView.vue')
  },
  {
    path: '/main/finished',
    name: 'FinishedView',
    component: () =>
      import(/* webpackChunkName: "main" */ '../views/main/FinishedView.vue')
  },
  {
    path: '/main/create',
    name: 'CreateView',
    component: () =>
      import(/* webpackChunkName: "main" */ '../views/main/CreateView.vue')
  },
  {
    path: '/main/search',
    name: 'SearchView',
    component: () =>
      import(/* webpackChunkName: "main" */ '../views/main/SearchView.vue')
  },
  {
    path: '/main/setting',
    name: 'SettingsView',
    component: () =>
      import(/* webpackChunkName: "main" */ '../views/main/SettingsView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
