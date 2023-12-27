/* eslint-disable no-undef */
/* eslint-disable space-before-function-paren */
// import VueCookies from 'vue-cookies'
export const users = {
  state() {
    return {
      loginEmail: '',
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
    settingNewName(state, settingNewName) {
      state.usersInfo.find((el) => el.email === state.loginEmail).name = settingNewName
    },
    // settingNewEmail(state, settingNewEmail) {
    //   state.usersInfo.find((el) => el.email === state.loginEmail).email = settingNewEmail
    //   state.loginEmail = settingNewEmail
    // },
    settingNewImg(state, settingNewImg) {
      state.settingImg = settingNewImg
    },
    settingNewPW(state, settingNewPW) {
      state.usersInfo.find((el) => el.email === state.loginEmail).password = settingNewPW
    },
    addUser(state, user) {
      state.usersInfo.push(user)
      console.table(state.usersInfo)
    },
    loginInfo(state, email) {
      state.loginEmail = email
      console.table('로그인 된 이메일 : ' + state.loginEmail)
    }
  }
}
