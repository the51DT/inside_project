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
        v-model:defaultText="newName"
        :caption="nameState.caption"
        :warn="nameState.warn"
        @keyup.enter="goLogin()"
      />
      <inputField
        type="email"
        title="Email Address"
        id="email"
        name="email"
        placeholder="Example: johndoe@gmail.com"
        v-model:defaultText="newEmail"
        :caption="emailState.caption"
        :warn="emailState.warn"
        @keyup.enter="goLogin()"
      />
      <inputField
        type="password"
        title="Password"
        id="password"
        name="password"
        placeholder="********"
        v-model:defaultText="newPassword"
        :caption="passwordState.caption"
        :warn="passwordState.warn"
        @keyup.enter="goLogin()"
      />
      <inputField
        type="password"
        title="Retype Password"
        id="retypePassword"
        name="retypePassword"
        placeholder="********"
        v-model:defaultText="retypePassword"
        :caption="retypeState.caption"
        :warn="retypeState.warn"
        @keyup.enter="goLogin()"
      />
    </div>
    <div class="login__button">
      <ButtonCmp
        bgBtn="base"
        btnSize="large"
        icon2
        iconPosition
        btnTxt="Register"
        @click=";[goLogin()]"
      />
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { ref, reactive, computed } from 'vue'

const router = useRouter()

const store = useStore()
const newName = ref('')
const newEmail = ref('')
const newPassword = ref('')
const retypePassword = ref('')
const nameState = reactive({ caption: '', warn: false })
const emailState = reactive({ caption: '', warn: false })
const passwordState = reactive({ caption: '', warn: false })
const retypeState = reactive({ caption: '', warn: false })
const users = computed(() => store.state.users.usersInfo)

const registerUser = () => {
  const newUser = {
    email: newEmail.value,
    password: newPassword.value,
    name: newName.value,
    note: 0,
    searchList: []
  }
  if (newName.value && newEmail.value && newPassword.value) {
    goUrl('login')
    if (newPassword.value === retypePassword.value) {
      store.commit('addUser', newUser)
    }
  }
}

const goLogin = () => {
  const checkID = users.value
    .filter((id) => id.email === newEmail.value)
    .map((email) => email.email)
    .toString()
  if (!newName.value) {
    nameState.caption = 'please enter your name :)'
    nameState.warn = true
  } else {
    nameState.caption = ''
    nameState.warn = false
  }
  if (!newEmail.value) {
    emailState.caption = 'please enter your email :)'
    emailState.warn = true
  } else {
    if (!/^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(newEmail.value)) {
      emailState.caption = 'please enter right email include @ :)'
      emailState.warn = true
    } else {
      emailState.caption = ''
      emailState.warn = false
    }
  }
  if (!newPassword.value) {
    passwordState.caption = 'please enter your password :)'
    passwordState.warn = true
  } else {
    if (!/^[A-Za-z0-9]{8,}$/.test(newPassword.value)) {
      passwordState.caption = 'min. 8 character, combination of 0-9, A-Z, a-z'
      passwordState.warn = true
    } else {
      passwordState.caption = ''
      passwordState.warn = false
    }
  }
  if (!retypePassword.value) {
    retypeState.caption = 'please enter retype password :)'
    retypeState.warn = true
  } else {
    if (newPassword.value !== retypePassword.value) {
      retypeState.caption = 'please check retype password :('
      retypeState.warn = true
    } else {
      retypeState.caption = ''
      retypeState.warn = false
    }
  }
  if (
    checkID !== newEmail.value &&
    newName.value &&
    newEmail.value &&
    newPassword.value
  ) {
    console.log(checkID, newEmail.value)
    if (newPassword.value === retypePassword.value) {
      registerUser()
      goUrl('login')
    }
  }
}

const goUrl = (url) => {
  if (url === 'login') {
    router.push({ name: 'LoginView' })
  }
}
</script>

<style lang="scss"></style>
