import { createStore } from 'vuex'

export default createStore({
  state: {
    settingName: 'Michael Antonio',
    settingEmail: 'anto_michael@gmail.com',
    settingImg: ''
  },
  getters: {
  },
  mutations: {
    settingNewName (state, settingNewName) {
      state.settingName = settingNewName
    },
    settingNewEmail (state, settingNewEmail) {
      state.settingEmail = settingNewEmail
    },
    settingNewImg (state, settingNewImg) {
      state.settingImg = settingNewImg
    }
  },
  actions: {
  },
  modules: {
  }
})
