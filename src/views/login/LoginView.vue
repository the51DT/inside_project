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
// axios : 비동기 통신 JavaScript 라이브러리
// axios를 이용하여 API 호출하는 경우 바로 응답이 오지 않기 때믄에 일반적으로 비동기 방식 사용
// 요청과 응답을 모두 JSON 형식으로 자동 변환시켜줌
// then (응답 성공) - catch (응답 실패) - then(응답 항상 실행)
// async, await : promise를 편하게 사용 가능 (JavaScript에서 가장 최근에 등장한 비동기 처리 패턴)
// async/ await 해당 구문은 : try (응답 성공) - catch (응답 실패)
// 1. get : 서버로부터 데이터 받아옴 (url에 변수를 포함시켜 요청)
// 2. post : 서버로부터 데이터를 전송하여 자원을 생성
// 3. put : 서번에 존재하는 database 자원을 수정
// 4. delete : 서버에 존재하는 database 자원을 삭제
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
      const userFromDb = response.data[0]
      if (userFromDb) {
        if (
          userFromDb.email === userEmail.value &&
          userFromDb.password === userPassword.value
        ) {
          // 성공 시
          await store.dispatch('fetchUsersInfo')
          router.push('/home')
        } else {
          //  email 혹은 password 다를 때
          console.error('로그인 실패: 올바르지 않은 아이디 또는 비밀번호')
        }
      } else {
        // 실패 시
        console.error('로그인 실패: 사용자를 찾을 수 없음')
      }
    } catch (error) {
      console.error('error')
    }
  } else {
    // 입력하지 않았을 때
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
