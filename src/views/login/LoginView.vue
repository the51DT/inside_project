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
      />
      <inputField
        type="password"
        title="Password"
        id="password"
        name="password"
        placeholder="********"
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
        @click="goUrl('home')"
      />
      <div class="login__button__line">Or</div>
      <ButtonCmp
        bdBtn="google"
        btnSize="large"
        iconPositionCenter="center"
        btnTxt="Login with Google"
        @click="alertText('기능 구현 준비중')"
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
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goUrl = (url) => {
  if (url === 'home') {
    router.push({ name: 'defaultHome' })
  } else if (url === 'register') {
    router.push({ name: 'LoginRegister' })
  } else if (url === 'forgot') {
    router.push({ name: 'LoginForgot' })
  }
}

const alertText = (text) => {
  alert(text)
}

// const onClickGoogle = () => {
//   // 구글 새 창 열기 (window.open 사용)
//   window.open('http://google.com', '_blank')
// }
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
        height: calc(100vh - rem(54px));
      }
    }
    &__input {
      margin-top: rem(32px);
      & .btn {
        display: block;
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
</style>
