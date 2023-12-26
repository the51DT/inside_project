/* eslint-disable no-undef */
/* eslint-disable space-before-function-paren */
// import VueCookies from 'vue-cookies'
export const users = {
  state() {
    return {
      settingImg: '',
      usersInfo: [
        {
          email: 'the51@the-51.com',
          password: 'qwer1234',
          name: 'the51'
        },
        {
          email: 'test@the-51.com',
          password: '1234',
          name: 'test'
        }
      ]
    }
  },
  mutations: {
    settingNewName(state, { index, settingNewName }) {
      state.users[index].name = settingNewName
    },
    settingNewEmail(state, { index, settingNewEmail }) {
      state.users[index].email = settingNewEmail
    },
    settingNewImg(state, settingNewImg) {
      state.settingImg = settingNewImg
    },
    addUser(state, user) {
      state.usersInfo.push(user)
      console.table(state.usersInfo)
    }
  }
}
