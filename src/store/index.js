import { createStore } from 'vuex'
import { users } from './users'
import persistedstate from 'vuex-persistedstate'

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    users: users
  },
  plugins: [persistedstate({ paths: ['users.usersInfo', 'users.loginEmail'] })]
})
