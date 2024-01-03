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
const router = useRouter()
const store = useStore()

// const users = computed(() => store.state.users.usersInfo)
const userEmail = ref('')
const userPassword = ref('')
const userEmailState = reactive({ caption: '', warn: true })
const userPasswordState = reactive({ caption: '', warn: true })
const goLogin = () => {
  // 여기에 로그인 로직을 추가
  // 유효성 검사 및 서버로의 로그인 요청을 수행할 수 있습니다.
  if (userEmail.value && userPassword.value) {
    // 여기에 로그인 성공 시 실행할 로직을 추가
    store.dispatch('fetchUsersInfo')
    // 로그인 후의 리다이렉션을 원하는 경로로 지정
    router.push('/home')
    // 예: 로그인 후 이동할 경로
  } else {
    // 로그인 실패 시 실행할 로직을 추가
    console.error('Invalid email or password')
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
