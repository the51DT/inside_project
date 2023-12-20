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
    path: '/login/detail',
    name: 'LoginDetail',
    component: () =>
      import(/* webpackChunkName: "login" */ '../views/login/LoginDetail.vue'),
    children: [
      {
        path: '/login/detail/signup',
        name: 'LoginRegister',
        component: () => import('../views/login/loginRegister.vue')
      },
      {
        path: '/login/detail/forgot',
        name: 'LoginForgot',
        component: () => import('../views/login/loginForgot.vue')
      },
      {
        path: '/login/detail/reset',
        name: 'LoginReset',
        component: () => import('../views/login/loginReset.vue')
      }
    ]
  },
  // setting
  {
    path: '/settings',
    name: 'SettingsView',
    component: () =>
      import(
        /* webpackChunkName: "settings" */ '../views/setting/SettingsView.vue'
      )
  },
  {
    path: '/settings/edit',
    name: 'SettingsEdit',
    component: () =>
      import(
        /* webpackChunkName: "settings" */ '../views/setting/settingsEdit.vue'
      )
  },
  {
    path: '/settings/change',
    name: 'SettingsChange',
    component: () =>
      import(
        /* webpackChunkName: "settings" */ '../views/setting/settingsChange.vue'
      )
  },
  {
    path: '/settings/complete',
    name: 'SettingsComplete',
    component: () =>
      import(
        /* webpackChunkName: "settings" */ '../views/setting/settingsComplete.vue'
      )
  },
  // home
  {
    path: '/home/default',
    name: 'defaultHome',
    component: () =>
      import(/* webpackChunkName: "settings" */ '../views/home/defaultHome.vue')
  },
  // create
  {
    path: '/create/default',
    name: 'DefaultList',
    component: () =>
      import(
        /* webpackChunkName: "settings" */ '../views/create/DefaultList.vue'
      )
  },
  {
    path: '/create/buying',
    name: 'ListBuying',
    component: () =>
      import(
        /* webpackChunkName: "settings" */ '../views/create/ListBuying.vue'
      )
  },
  {
    path: '/create/goals',
    name: 'ListGoals',
    component: () =>
      import(/* webpackChunkName: "settings" */ '../views/create/ListGoals.vue')
  },
  {
    path: '/create/guidance',
    name: 'ListGuidance',
    component: () =>
      import(
        /* webpackChunkName: "settings" */ '../views/create/ListGuidance.vue'
      )
  },
  {
    path: '/create/idea',
    name: 'ListIdea',
    component: () =>
      import(/* webpackChunkName: "settings" */ '../views/create/ListIdea.vue')
  },
  {
    path: '/create/tasks',
    name: 'ListTasks',
    component: () =>
      import(/* webpackChunkName: "settings" */ '../views/create/ListTasks.vue')
  },
  // finish
  {
    path: '/finished/default',
    name: 'defaultFinished',
    component: () =>
      import(/* webpackChunkName: "settings" */ '../views/finished/defaultFinished.vue')
  },
  // search
  {
    path: '/search',
    name: 'searchView',
    component: () =>
      import(/* webpackChunkName: "settings" */ '../views/search/searchView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
