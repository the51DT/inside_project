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
        useUrl="login/loginDetail/loginForgot"
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
        @click="onClickGoogle()"
      />
      <ButtonCmp
        bdBtn="base"
        btnSize="large"
        btnTxt="Don’t have any account? Register here"
        :btnType="false"
        useUrl="login/loginDetail/loginRegister"
      />
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goUrl = (url) => {
  if (url === 'home') {
    router.push('home')
  } else if (url === 'register') {
    router.push('login/loginDetail/loginRegister')
  } else if (url === 'forgot') {
    router.push('login/loginDetail/loginForgot')
  }
}

const onClickGoogle = () => {
  // 구글 새 창 열기 (window.open 사용)
  window.open('http://google.com', '_blank')
}
</script>

<style lang="scss"></style>
