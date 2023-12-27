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
        v-model:defaultText="change"
        :caption="changeState.caption"
        :warn="changeState.warn"
      />
      <inputField
        type="password"
        title="Retype Password"
        id="retypePassword"
        name="retypePassword"
        placeholder="********"
        v-model:defaultText="retype"
        :caption="retypeState.caption"
        :warn="retypeState.warn"
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
import { useRouter, useRoute } from 'vue-router'
import { ref, reactive } from 'vue'
import { useStore } from 'vuex'

const router = useRouter()
const route = useRoute()
const store = useStore()

const change = ref('')
const retype = ref('')
const changeState = reactive({ caption: 'min. 8 character, combination of 0-9, A-Z, a-z', warn: false })
const retypeState = reactive({ caption: '', warn: false })

const useremail = route.query.email
// const users = computed(() => store.state.users.usersInfo)
// const loginUser = users.value.filter((el) => { return el.email === useremail })

const goUrl = (url) => {
  if (!change.value) {
    changeState.caption = 'please enter change password :)'
    changeState.warn = true
  } else {
    changeState.caption = ''
    changeState.warn = false
  }
  if (!retype.value) {
    retypeState.caption = 'please enter retype password :)'
    retypeState.warn = true
  } else {
    retypeState.caption = ''
    retypeState.warn = false
  }
  if (change.value === retype.value) {
    store.commit('forgotPW', { pw: change.value, email: useremail })
    if (url === 'home') {
      router.push({ name: 'LoginView' })
    }
  }
}
</script>

<style lang="scss">
</style>
