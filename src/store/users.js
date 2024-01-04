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
    setUsersInfo(state, usersInfo) {
      state.usersInfo = usersInfo
    },
    loginInfo(state, email) {
      state.loginEmail = email
      console.table('로그인 된 이메일 : ' + state.loginEmail)
    }
  },
  actions: {
    fetchUsersInfo({ commit }, id) {
      console.log('사용자 데이터를 가져오는 중...')
      // 로컬 호스트의 API 호출
      axios
        .get('http://localhost:3001/users')
        .then((response) => {
          const usersInfo = response.data.users
          commit('setUsersInfo', usersInfo)
          commit('loginInfo', id)
          console.log(response.data)
        })
        .catch((error) => {
          console.error('Error fetching user data:', error)
        })
    }
  }
}
