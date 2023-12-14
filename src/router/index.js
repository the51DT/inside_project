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
      import(/* webpackChunkName: "about" */ '../views/OverlaysView.vue')
  },
  {
    path: '/list',
    name: 'list',
    // route level code-splitting
    // this generates a separate chunk (button.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "list" */ '../views/ListView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
