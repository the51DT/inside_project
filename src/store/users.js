/* eslint-disable no-undef */
/* eslint-disable space-before-function-paren */
// import VueCookies from 'vue-cookies'
import axios from 'axios'

export const users = {
  state() {
    return {
      loginEmail: '',
      settingImg: '',
      usersInfo: []
    }
  },
  // mutations: {
  //   settingNewName(state, settingNewName) {
  //     state.usersInfo.find((el) => el.email === state.loginEmail).name =
  //       settingNewName
  //   },
  //   settingNewImg(state, settingNewImg) {
  //     state.settingImg = settingNewImg
  //   },
  //   settingNewPW(state, settingNewPW) {
  //     state.usersInfo.find((el) => el.email === state.loginEmail).password =
  //       settingNewPW
  //   },
  //   forgotPW(state, { pw: newPW, email: useremail }) {
  //     state.usersInfo.find((el) => el.email === useremail).password = newPW
  //   },
  //   addUser(state, user) {
  //     state.usersInfo.push(user)
  //     console.table(state.usersInfo)
  //   },
  //   loginInfo(state, email) {
  //     state.loginEmail = email
  //     console.table('로그인 된 이메일 : ' + state.loginEmail)
  //   }
  // },
  mutations: {
    setUsersInfo(state, usersInfo) {
      state.usersInfo = usersInfo
    }
  },
  actions: {
    fetchUsersInfo({ commit }) {
      console.log('사용자 데이터를 가져오는 중...')
      // 로컬 호스트의 API 호출
      axios
        .get('http://localhost:3001/users')
        .then((response) => {
          const usersInfo = response.data.users
          commit('setUsersInfo', usersInfo)
          conole.log(response.data)
        })
        .catch((error) => {
          console.error('Error fetching user data:', error)
        })
    }
  }
}
