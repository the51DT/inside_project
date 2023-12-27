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
          note: 12,
          searchList: [
            { item: 'Product Idea', route: 'Home' },
            { item: 'Monthly Buying List', route: 'Home' }
          ]
        },
        {
          email: 'test@the-51.com',
          password: '1234',
          name: 'test',
          note: 0,
          searchList: [
            { item: 'test', route: 'Home' },
            { item: 'test132', route: 'Home' }
          ]
        }
      ]
    }
  },
  mutations: {
    settingNewName(state, settingNewName) {
      state.usersInfo.find((el) => el.email === state.loginEmail).name =
        settingNewName
    },
    settingNewImg(state, settingNewImg) {
      state.settingImg = settingNewImg
    },
    settingNewPW(state, settingNewPW) {
      state.usersInfo.find((el) => el.email === state.loginEmail).password =
        settingNewPW
    },
    forgotPW(state, { pw: newPW, email: useremail }) {
      state.usersInfo.find((el) => el.email === useremail).password = newPW
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
