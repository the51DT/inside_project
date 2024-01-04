<template>
  <div class="login__wrap">
    <TitleInput title="Let’s Login" sub="And notes your idea"></TitleInput>
    <div class="login__input">
      <inputField
        type="email"
        title="Email Address"
        id="email"
        name="email"
        placeholder="Example: johndoe@gmail.com"
        v-model:defaultText="userEmail"
        :caption="userEmailState.caption"
        :warn="userEmailState.warn"
        @keyup.enter="goLogin()"
      />
      <inputField
        type="password"
        title="Password"
        id="password"
        name="password"
        placeholder="********"
        v-model:defaultText="userPassword"
        :caption="userPasswordState.caption"
        :warn="userPasswordState.warn"
        @keyup.enter="goLogin()"
      />
      <ButtonCmp
        bgBtn="base"
        btnSize="large"
        btnTxt="Forgot Password"
        :btnType="false"
        useUrl="login/detail/forgot"
        @click="goUrl('forgot')"
      />
    </div>
    <div class="login__button">
      <ButtonCmp
        bgBtn="base"
        btnSize="large"
        iconPositionRight="right"
        btnTxt="Login"
        @click="goLogin()"
      />
      <div class="login__button__line">Or</div>
      <ButtonCmp
        bdBtn="google"
        btnSize="large"
        iconPositionCenter="center"
        btnTxt="Login with Google"
        @click="openBtn('google')"
      />
      <ButtonCmp
        bdBtn="base"
        btnSize="large"
        btnTxt="Don’t have any account? Register here"
        :btnType="false"
        useUrl="login/detail/signup"
        @click="goUrl('register')"
      />
    </div>
  </div>

  <modal-center id="google">
    <template v-slot:title>
      <h4>X</h4>
    </template>
    <template v-slot:body>
      <div class="popup--body__contnet">기능 구현 준비중</div>
    </template>
    <template v-slot:footer>
      <ButtonCmp
        bgBtn="base"
        btnSize="small"
        btnTxt="close"
        @click="closeBtn($event)"
      />
    </template>
  </modal-center>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ref, reactive } from 'vue'
import { useStore } from 'vuex'
import axios from 'axios'
const router = useRouter()
const store = useStore()
// const users = computed(() => store.state.users.usersInfo)
const userEmail = ref('')
const userPassword = ref('')
const userEmailState = reactive({ caption: '', warn: true })
const userPasswordState = reactive({ caption: '', warn: true })
const goLogin = async () => {
  if (userEmail.value && userPassword.value) {
    try {
      const response = await axios.get('http://localhost:3001/users', {
        // 매개변수 설정
        params: {
          email: userEmail.value,
          password: userPassword.value
        }
      })
      if (response.status) {
        const userFromDb = response.data[0]
        console.log(userFromDb)
        if (userFromDb.email === userEmail.value) {
          // 로그인 성공 시 실행할 로직
          await store.dispatch('fetchUsersInfo')
          router.push('/home')
        } else {
          // 비밀번호가 일치하지 않음
          console.error('로그인 실패: 올바르지 않은 비밀번호')
        }
      } else {
        // 제공된 이메일과 일치하는 사용자를 찾을 수 없음
        console.log(userPassword.value)
        console.error('Login failed: Unknown error')
      }
    } catch (error) {
      // 네트워크 또는 서버 오류
      console.error('로그인 중 오류 발생:', error.message || '알 수 없는 오류')
    }
  } else {
    console.error('이메일과 비밀번호는 필수 입력 사항입니다.')
  }
}

// const goLogin = () => {
//   const isID = users.value
//     .filter((id) => id.email === userEmail.value)
//     .map((email) => email.email)
//     .toString()
//   const isPassword = users.value
//     .filter((id) => id.email === userEmail.value)
//     .map((pw) => pw.password)
//     .toString()
//   console.log(isID, isPassword)
//   if (isID !== userEmail.value || userEmail.value === '') {
//     userEmailState.warn = true
//     userEmailState.caption = 'please check your ID :)'
//   } else {
//     userEmailState.warn = false
//     userEmailState.caption = ''
//   }
//   if (isPassword !== userPassword.value || userPassword.value === '') {
//     userPasswordState.warn = true
//     userPasswordState.caption = 'please check your Password :)'
//   } else {
//     userPasswordState.warn = false
//     userPasswordState.caption = ''
//   }
//   if (userEmailState.warn === false && userPasswordState.warn === false) {
//     router.push({ name: 'Home' })
//     store.commit('loginInfo', isID)
//   }
// }
const goUrl = (url) => {
  if (url === 'home') {
    router.push({ name: 'Home' })
  } else if (url === 'register') {
    router.push({ name: 'LoginRegister' })
  } else if (url === 'forgot') {
    router.push({ name: 'LoginForgot' })
  }
}
</script>

<style lang="scss">
.login {
  &__wrap {
    display: flex;
    flex-direction: column;
    justify-content: end;
    margin: 0 auto;
    padding: 0 rem(16px) rem(48px);
    height: 100vh;
    &--detail {
      padding: rem(54px) rem(16px) rem(32px);
      height: calc(100% - rem(54px));
      overflow-y: scroll;
    }
  }
  &__input {
    margin-top: rem(32px);
    & .btn {
      margin-top: rem(12px);
    }
  }
  &__button {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: rem(16px);
    margin-top: rem(40px);
    &__line {
      position: relative;
      font-size: rem(12px);
      font-weight: 500;
      color: $neutral-darkgrey;
      width: 100%;
      text-align: center;
      &::before,
      &::after {
        content: '';
        display: block;
        position: absolute;
        top: 50%;
        width: rem(141px);
        border-top: solid rem(1px) $neutral-lightgrey;
      }
      &::before {
        left: 0;
      }
      &::after {
        right: 0;
      }
    }
  }
}
#google {
  .btn {
    margin-left: 0;
  }
}
</style>
