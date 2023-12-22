import { createStore } from 'vuex'

export default createStore({
  state: {
    userNum: 0,
    users: [
      {
        email: 'the51@the-51.com',
        password: 'qwer1234',
        name: 'the51',
        img: '/'
      },
      {
        email: 'test@the-51.com',
        password: '1234',
        name: 'test',
        img: '/'
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
    settingNewImg (state, { index, settingNewImg }) {
      console.log(index, settingNewImg)
      state.users[index].img = settingNewImg
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
