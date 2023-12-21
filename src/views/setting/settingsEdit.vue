<template>
  <div class="nav-bar__fixed">
    <NavBar back="Settings" title="Edit Profile" />
  </div>
  <div class="setting__wrap setting__wrap--edit">
    <div class="setting__top">
      <div class="setting__profile">
        <div class="profile__img"></div>
      </div>
      <inputField
        type="file"
        id="file_change"
        chooseFileLabel="Change Image"
        icon
      ></inputField>
    </div>
    <div class="setting__bottom">
      <div>
        <inputField
          type="text"
          title="Full Name"
          id="name"
          name="name"
          placeholder="Michael Antonio"
          v-model:defaultText="name"
        ></inputField>
        <inputField
          type="email"
          title="Email Address"
          id="email"
          name="email"
          placeholder="anto_michael@gmail.com"
          caption="Changing email address information means you need to re-login to the apps."
          v-model:defaultText="email"
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
import { ref } from 'vue'
import router from '@/router'

const goUrl = (url) => {
  if (url === 'settings') {
    router.go(-1)
  }
}
const name = ref('')
const email = ref('')
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
