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
  // guide
  {
    path: '/guide/input',
    name: 'inputView',
    component: () =>
      import(
        /* webpackChunkName: "components" */ '../views/guide/inputView.vue'
      )
  },
  {
    path: '/guide/button',
    name: 'ButtonView',
    component: () =>
      import(
        /* webpackChunkName: "components" */ '../views/guide/ButtonView.vue'
      )
  },
  {
    path: '/guide/overlays',
    name: 'OverlaysView',
    component: () =>
      import(
        /* webpackChunkName: "components" */ '../views/guide/OverlaysView.vue'
      )
  },
  // main
  {
    path: '/main/home',
    name: 'MainHomeView',
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
  // onboarding
  {
    path: '/start',
    name: 'OnBoarding',
    component: () =>
      import(
        /* webpackChunkName: "onboarding" */ '../views/onboarding/OnBoarding.vue'
      )
  },
  // login
  {
    path: '/login',
    name: 'LoginView',
    component: () =>
      import(/* webpackChunkName: "login" */ '../views/login/LoginView.vue')
  },
  {
    path: '/signup',
    name: 'loginRegister',
    component: () =>
      import(/* webpackChunkName: "login" */ '../views/login/loginRegister.vue')
  },
  {
    path: '/login/reset',
    name: 'loginReset',
    component: () =>
      import(/* webpackChunkName: "login" */ '../views/login/loginReset.vue')
  },
  {
    path: '/login/forot',
    name: 'loginForgot',
    component: () =>
      import(/* webpackChunkName: "login" */ '../views/login/loginForgot.vue')
  },
  {
    path: '/login/detail',
    name: 'LoginDetail',
    component: () =>
      import(/* webpackChunkName: "login" */ '../views/login/LoginDetail.vue')
  },
  // setting
  {
    path: '/main/settings/edit',
    name: 'SettingsEdit',
    component: () =>
      import(
        /* webpackChunkName: "settings" */ '../views/setting/settingsEdit.vue'
      )
  },
  {
    path: '/main/settings/change',
    name: 'SettingsChange',
    component: () =>
      import(
        /* webpackChunkName: "settings" */ '../views/setting/settingsChange.vue'
      )
  }
  // home
  // creative
  // finish
  // search
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
