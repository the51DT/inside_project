<template>
  <div class="nav-bar__fixed">
    <NavBar back="Settings" title="Edit Profile" />
  </div>
  <div class="setting__wrap setting__wrap--edit">
    <div class="setting__top">
      <div class="setting__profile">
        <div class="profile__img" :style="{backgroundImage : `url(${previewImage})`}" ref="profile_img"></div>
      </div>
      <inputField
        type="file"
        id="file_change"
        chooseFileLabel="Change Image"
        icon
        @change="changeImage"
      ></inputField>
    </div>
    <div class="setting__bottom">
      <div>
        <inputField
          type="text"
          title="Full Name"
          id="name"
          name="name"
          placeholder="Full Name"
          :defaultText="name"
          :caption="nameState.caption"
          :warn="nameState.warn"
          v-model:defaultText="name"
          @keyup.enter="goLogin"
        ></inputField>
        <inputField
          type="password"
          title="Current Password"
          id="password"
          name="password"
          placeholder="Current Password"
          :caption="passwordState.caption"
          :warn="passwordState.warn"
          v-model:defaultText="password"
          @keyup.enter="goLogin"
        ></inputField>
      </div>
      <ButtonCmp
        :class="'setting__submit'"
        bgBtn="base"
        btnSize="large"
        iconPositionLeft="left"
        btnTxt="Save Changes"
        @click="[goLogin()]"
      />
    </div>
  </div>
</template>

<script setup>
import { computed, ref, reactive } from 'vue'
import router from '@/router'
import { useStore } from 'vuex'

const goUrl = (url) => {
  if (url === 'settings') {
    router.go(-1)
  }
}

const store = useStore()

const useremail = computed(() => store.state.users.loginEmail)
const users = computed(() => store.state.users.usersInfo)
const loginUser = users.value.filter((el) => { return el.email === useremail.value })
const nameValue = loginUser[0].name
const passwordValue = loginUser[0].password
const imgValue = computed(() => store.state.users.settingImg)

const name = ref(`${nameValue}`)
const password = ref('')
const nameState = reactive({ caption: '', warn: false })
const passwordState = reactive({ caption: 'Changing email address information means you need to re-login to the apps.', warn: false })

// const sendName = () => {
//   if (name.value.length === 0 || nameValue.value === name.value) {
//     nameState.caption = 'please enter change name :)'
//     nameState.warn = true
//   } else {
//     nameState.caption = ''
//     nameState.warn = false
//   }
// }
const goLogin = () => {
  if (password.value.length === 0) {
    passwordState.caption = 'please enter your current password :)'
    passwordState.warn = true
  } else {
    if (passwordValue === password.value) {
      passwordState.caption = ''
      passwordState.warn = false
    } else {
      passwordState.caption = 'please enter right password :)'
      passwordState.warn = true
    }
  }
  if (name.value.length === 0 || nameValue === name.value) {
    nameState.caption = 'please enter change name :)'
    nameState.warn = true
  } else {
    nameState.caption = ''
    nameState.warn = false
  }
  if (name.value.length !== 0 && nameValue !== name.value && passwordValue === password.value) {
    sendImg(previewImage)
    store.commit('settingNewName', name.value)
    goUrl('settings')
  }
}
const sendImg = (el) => {
  store.commit('settingNewImg', el)
}
const previewImage = ref(imgValue.value)

const changeImage = (event) => {
  const files = event.target?.files
  if (files.length > 0) {
    const file = files[0]
    const reader = new FileReader()
    reader.onload = (e) => {
      previewImage.value = e.target.result
    }
    reader.readAsDataURL(file)
  }
}

</script>

<style lang="scss">
.setting__wrap {
  padding-top: rem(54px);
  &--edit {
    .setting {
      &__top {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: rem(16px);
        .inputField__wrap {
          justify-content: center;
        }
      }
      &__profile {
        .profile__img {
          width: rem(120px);
          height: rem(120px);
          background-position: center center;
          background-repeat: no-repeat;
          background-size: cover;
        }
        &--button {
          border-radius: rem(100px);
          span {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: rem(8px);
            color: $primary-base;
            &::before {
              content: '';
              display: block;
              width: rem(20px);
              height: rem(20px);
              background-image: url('@/assets/images/icon/icon_edit.svg');
              background-position: center center;
              background-repeat: no-repeat;
            }
          }
        }
      }
      &__bottom {
        display: flex;
        height: 100%;
        padding-bottom: rem(32px);
        flex-direction: column;
        justify-content: space-between;
      }
      &__submit {
        position: fixed;
        bottom: rem(32px);
        width: calc(100% - rem(32px));
        span {
          &::before {
            background-image: url('@/assets/images/icon/setting_check.svg') !important;
          }
        }
      }
    }
  }
}
</style>
