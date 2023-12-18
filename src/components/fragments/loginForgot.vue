<template>
  <div>
    <TitleInput title="Forgot Password" sub="Insert your email address to receive a code for creating a new password"></TitleInput>
    <div class="login__input">
      <inputField
        type="email"
        title="Email Address"
        id="email"
        name="email"
        placeholder="Example: johndoe@gmail.com"
      />
    </div>
    <div class="login__button">
      <ButtonCmp
        bgBtn="base"
        btnSize="large"
        icon2
        iconPosition
        btnTxt="Send Code"
        @click="goUrl('reset')"
      />
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goUrl = (url) => {
  if (url === 'reset') {
    router.push('loginReset')
  }
}
</script>

<style lang="scss">
</style>
