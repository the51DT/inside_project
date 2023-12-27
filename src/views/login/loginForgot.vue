<template>
  <div class="login__wrap login__wrap--detail">
    <TitleInput title="Forgot Password" sub="Insert your email address to receive a code for creating a new password"></TitleInput>
    <div class="login__input">
      <inputField
        type="email"
        title="Email Address"
        id="email"
        name="email"
        placeholder="Example: johndoe@gmail.com"
        v-model:defaultText="email"
        :caption="emailState.caption"
        :warn="emailState.warn"
        @keyup.enter="goUrl('reset')"
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
import { ref, reactive, computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const router = useRouter()

const users = computed(() => store.state.users.usersInfo)
const email = ref('')
const emailState = reactive({ caption: '', warn: false })

const goUrl = (url) => {
  const isID = users.value
    .filter((id) => id.email === email.value)
    .map((email) => email.email)
    .toString()
  if (isID !== email.value || email.value === '') {
    emailState.warn = true
    emailState.caption = 'please check your ID :)'
  } else {
    if (url === 'reset') {
      router.push({ name: 'LoginReset', query: { email: isID } })
    }
  }
}
</script>

<style lang="scss">
</style>
