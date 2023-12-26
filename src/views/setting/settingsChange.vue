<template>
  <div class="nav-bar__fixed">
    <NavBar back="Back" title="Change Password" />
  </div>
  <div class="setting__wrap setting__wrap--change">
    <div class="setting__top">
      <p class="setting__guide">Please input your current password first</p>
      <inputField
        type="password"
        title="Current Password"
        id="name"
        name="name"
        placeholder="*********"
        v-model:defaultText="current"
        :caption="currentState.caption"
        :warn="currentState.warn"
      ></inputField>
    </div>
    <div class="setting__bottom">
      <div>
        <p class="setting__guide">Now, create your new password</p>
        <inputField
          type="password"
          title="New Password"
          id="name"
          name="name"
          placeholder="*********"
          v-model:defaultText="change"
          :caption="changelState.caption"
          :warn="changelState.warn"
        ></inputField>
        <inputField
          type="password"
          title="Retype New Password"
          id="name"
          name="name"
          placeholder="*********"
          v-model:defaultText="retype"
          :caption="retypeState.caption"
          :warn="retypeState.warn"
        ></inputField>
      </div>
      <ButtonCmp
        :class="'setting__submit'"
        bgBtn="base"
        btnSize="large"
        iconPositionRight="right"
        btnTxt="Save Changes"
        @click="[goLogin()]"
      />
    </div>
  </div>
</template>

<script setup>
import router from '@/router'
import { computed, ref, reactive } from 'vue'
import { useStore } from 'vuex'

const current = ref('')
const change = ref('')
const retype = ref('')
const currentState = reactive({ caption: '', warn: false })
const changelState = reactive({ caption: 'Password should contain a-z, A-Z, 0-9', warn: false })
const retypeState = reactive({ caption: '', warn: false })

const store = useStore()
const userNum = computed(() => store.state.userNum)
const currentPassword = computed(() => store.state.users[userNum.value].password)

const goLogin = () => {
  if (!current.value) {
    currentState.caption = 'please enter current password :)'
    currentState.warn = true
  } else if (current.value !== currentPassword.value) {
    currentState.caption = 'please check current password :)'
    currentState.warn = true
  } else {
    currentState.caption = ''
    currentState.warn = false
  }
  if (!change.value) {
    changelState.caption = 'please enter new password :)'
    changelState.warn = true
  } else {
    changelState.caption = 'Password should contain a-z, A-Z, 0-9'
    changelState.warn = false
  }
  if (!retype.value) {
    retypeState.caption = 'please enter retype password :)'
    retypeState.warn = true
  } else {
    if (change.value !== retype.value) {
      retypeState.caption = 'please check retype password :('
      retypeState.warn = true
    } else {
      retypeState.caption = ''
      retypeState.warn = false
    }
  }
  if (current.value && change.value && retype.value) {
    if (current.value === currentPassword.value) {
      if (change.value === retype.value) {
        store.commit('settingNewPW', { index: userNum.value, settingNewPW: change.value })
        goUrl('complete')
      }
    }
  }
}

const goUrl = (url) => {
  if (url === 'complete') {
    router.push({ name: 'SettingsComplete' })
  }
}
</script>

<style lang="scss">
.setting__wrap {
  padding-top: rem(54px);
  &--change {
    .setting {
      &__top {
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 0;
        text-align: left;
      }
      &__guide {
        margin-bottom: rem(16px);
        font-size: rem(12px);
        font-weight: 500;
        color: $primary-base;
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
      }
    }
  }
}
</style>
