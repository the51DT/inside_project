/* eslint-disable no-undef */
/* eslint-disable space-before-function-paren */
// import VueCookies from 'vue-cookies'
export const users = {
  state() {
    return {
      userNum: 0,
      settingImg: '',
      usersInfo: [
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
    settingNewPW(state, { index, settingNewPW }) {
      state.users[index].password = settingNewPW
    },
    addUser(state, user) {
      state.usersInfo.push(user)
      console.table(state.usersInfo)
    }
  }
}
