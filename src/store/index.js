import { createStore } from 'vuex'

export default createStore({
  state: {
    userNum: 0,
    settingImg: '',
    users: [
      {
        email: 'the51@the-51.com',
        password: 'qwer1234',
        name: 'the51',
        note: 12
      },
      {
        email: 'test@the-51.com',
        password: '1234',
        name: 'test',
        note: 0
      }
    ]
  },
  getters: {
  },
  mutations: {
    settingNewName (state, { index, settingNewName }) {
      state.users[index].name = settingNewName
    },
    settingNewEmail (state, { index, settingNewEmail }) {
      state.users[index].email = settingNewEmail
    },
    settingNewImg (state, settingNewImg) {
      state.settingImg = settingNewImg
    },
    addUser (state, user) {
      state.users.push(user)
    },
    userNumber (state, usernum) {
      state.userNum = usernum
    }
  },
  actions: {
  },
  modules: {
  }
})
