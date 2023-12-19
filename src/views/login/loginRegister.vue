<template>
  <div class="login__wrap login__wrap--detail">
    <TitleInput title="Register" sub="And start taking notes"></TitleInput>
    <div class="login__input">
      <inputField
        type="text"
        title="Full Name"
        id="name"
        name="name"
        placeholder="Example: John Doe"
      />
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
      <inputField
        type="password"
        title="Retype Password"
        id="retypePassword"
        name="retypePassword"
        placeholder="********"
      />
    </div>
    <div class="login__button">
      <ButtonCmp
        bgBtn="base"
        btnSize="large"
        icon2
        iconPosition
        btnTxt="Register"
        @click="goUrl('login')"
      />
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goUrl = (url) => {
  if (url === 'login') {
    router.push({ name: 'LoginView' })
  }
}
</script>

<style lang="scss">
</style>
