<template>
  <div class="login__wrap login__wrap--detail">
    <TitleInput title="Create a New Password" sub="Your new password should be different from the previous password"></TitleInput>
    <div class="login__input">
      <inputField
        type="password"
        title="New Password"
        id="password"
        name="password"
        placeholder="********"
        caption="min. 8 character, combination of 0-9, A-Z, a-z"
      />
      <inputField
        type="password"
        title="New Password"
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
        btnTxt="Create Password"
        @click="goUrl('home')"
      />
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goUrl = (url) => {
  if (url === 'home') {
    router.push({ name: 'LoginView' })
  }
}
</script>

<style lang="scss">
</style>
