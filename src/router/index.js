import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
// import ButtonView from '../views/ButtonView.vue'
// import OverlaysView from '../views/OverlaysView.vue'
// import MainHomeView from '../views/main/HomeView.vue'
// import FinishedView from '../views/main/FinishedView.vue'
// import CreateView from '../views/main/CreateView.vue'
// import SearchView from '../views/main/SearchView.vue'
// import SettingsView from '../views/main/SettingsView.vue'
// import LoginView from '../views/main/LoginView.vue'
// import LoginDetail from '../views/main/LoginDetail.vue'
// import OnBoarding from '../views/main/OnBoarding.vue'

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: () =>
      import(/* webpackChunkName: "components" */ '../views/HomeView.vue')
  },
  {
    path: '/button',
    name: 'ButtonView',
    component: () =>
      import(/* webpackChunkName: "components" */ '../views/ButtonView.vue')
  },
  {
    path: '/overlays',
    name: 'OverlaysView',
    component: () =>
      import(/* webpackChunkName: "components" */ '../views/OverlaysView.vue')
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
    path: '/main/settings',
    name: 'SettingsView',
    component: () =>
      import(/* webpackChunkName: "main" */ '../views/main/SettingsView.vue')
  },
  {
    path: '/main/settings/edit',
    name: 'SettingsEdit',
    component: () =>
      import(
        /* webpackChunkName: "settings" */ '../components/fragments/settingsEdit.vue'
      )
  },
  {
    path: '/main/settings/change',
    name: 'SettingsChange',
    component: () =>
      import(
        /* webpackChunkName: "settings" */ '../components/fragments/settingsChange.vue'
      )
  },
  {
    path: '/main/login',
    name: 'LoginView',
    component: () =>
      import(/* webpackChunkName: "login" */ '../views/main/LoginView.vue')
  },
  {
    path: '/main/login/logindetail',
    name: 'LoginDetail',
    children: [
      {
        path: 'loginRegister',
        name: 'loginRegister',
        component: () => import('@/components/fragments/loginRegister.vue')
      },
      {
        path: 'loginForgot',
        name: 'loginForgot',
        component: () => import('@/components/fragments/loginForgot.vue')
      },
      {
        path: 'loginReset',
        name: 'loginReset',
        component: () => import('@/components/fragments/loginReset.vue')
      }
    ],
    component: () =>
      import(/* webpackChunkName: "login" */ '../views/main/LoginDetail.vue')
  },
  {
    path: '/main/start',
    name: 'OnBoarding',
    component: () =>
      import(
        /* webpackChunkName: "onboarding" */ '../views/main/OnBoarding.vue'
      )
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
