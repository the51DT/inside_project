<template>
  <nav-bar title="Edit Profile" back="Settings"></nav-bar>
  <div class="setting__wrap setting__wrap--edit">
    <div class="setting__top">
      <div class="setting__profile">
        <div class="profile__img"></div>
      </div>
      <ButtonCmp
        :class="'setting__profile--button'"
        bdBtn="base"
        btnSize="small"
        iconPositionCenter="center"
        btnTxt="Change Image"
      />
    </div>
    <div class="setting__bottom">
      <div>
        <inputField
          type="text"
          title="Full Name"
          id="name"
          name="name"
          placeholder="Michael Antonio"
          :value="nameValue"
        ></inputField>
        <inputField
          type="email"
          title="Email Address"
          id="email"
          name="email"
          placeholder="anto_michael@gmail.com"
          caption="Changing email address information means you need to re-login to the apps."
        ></inputField>
      </div>
      <ButtonCmp
        :class="'setting__submit'"
        bgBtn="base"
        btnSize="large"
        iconPositionLeft="left"
        btnTxt="Save Changes"
        @click="goUrl('settings')"
      />
    </div>
  </div>
</template>

<script setup>
import { defineEmits } from 'vue'
import router from '@/router'

const emit = defineEmits(['dataBus'])

const goUrl = (url) => {
  if (url === 'settings') {
    router.go(-1)
  }
}

emit('dataBus')
</script>

<style lang="scss">
  .setting__wrap--edit {
    .setting {
      &__top {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: rem(16px);
      }
      &__profile {
        .profile__img {
          width: rem(120px);
          height: rem(120px);
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
        span {
          &::before {
            background-image: url('@/assets/images/icon/setting_check.svg') !important;
          }
        }
      }
    }
  }
</style>
