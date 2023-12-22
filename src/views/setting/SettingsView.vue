<template>
  <div class="nav-bar__fixed">
    <NavBar back="Back" title="Settings" />
  </div>
  <div class="setting__wrap">
    <div class="setting__top">
      <div class="setting__profile">
        <div class="profile__img" :style="{backgroundImage : `url(${previewImage})`}"></div>
        <div class="profile__info">
          <p class="profile__info--name">{{ nameValue }}</p>
          <p class="profile__info--email">{{ emailValue }}</p>
        </div>
      </div>
      <ButtonCmp
        :class="'setting__profile--button'"
        bdBtn="base"
        btnSize="small"
        iconPositionCenter="center"
        btnTxt="Edit Profile"
        @click="goUrl('edit')"
      />
    </div>
    <div class="setting__bottom">
      <p class="setting__title">APP SETTINGS</p>
      <div class="setting__list">
        <button @click="goUrl('changePW')">Change Password</button>
        <button>Text Size<span>Medium</span></button>
        <button @click="openBtn('notifications')">Notifications<span class="state">{{ state }}</span></button>
        <div class="setting__line"></div>
        <button @click="openBtn('logOut')">Log Out</button>
      </div>
    </div>
  </div>

  <modal-bottom id="notifications">
    <template v-slot:title></template>
    <template v-slot:body>
      <ul>
        <li>
          Email Notifications
          <inputField
            type="toggle"
            id="email"
            :checked="isEmail"
            @change="notifications"
          ></inputField>
        </li>
        <li>
          Push Notifications
          <inputField
            type="toggle"
            id="push"
            :checked="isPush"
            @change="notifications"
          ></inputField>
        </li>
      </ul>
    </template>
    <template v-slot:footer>
      <button @click="closeBtn($event), isState()">
        <span class="hidden">close</span>
      </button>
    </template>
  </modal-bottom>

  <modal-center id="logOut">
    <template v-slot:title>
      <h4>Log Out</h4>
    </template>
    <template v-slot:body>
      <div class="popup--body__contnet">
        Are you sure you want to log out from the application?
      </div>
    </template>
    <template v-slot:footer>
      <ButtonCmp
        bdBtn="base"
        btnSize="small"
        btnTxt="Cancel"
        @click="closeBtn($event)"
      />
      <ButtonCmp
        bgBtn="base"
        btnSize="small"
        btnTxt="Yes"
        @click="goUrl('login')"
      />
    </template>
  </modal-center>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed, ref } from 'vue'
import router from '@/router'

const goUrl = (url) => {
  if (url === 'edit') {
    router.push({ name: 'SettingsEdit' })
  } else if (url === 'changePW') {
    router.push({ name: 'SettingsChange' })
  } else if (url === 'login') {
    router.push({ path: '/login' })
  }
}

const store = useStore()

const userNum = computed(() => store.state.userNum)
const nameValue = computed(() => store.state.users[userNum.value].name)
const emailValue = computed(() => store.state.users[userNum.value].email)
const previewImage = computed(() => store.state.users[userNum.value].img)
console.log(store.state.users[userNum.value].img)

// const nameValue = ref('Michael Antonio')
// const emailValue = ref('anto_michael@gmail.com')

const state = ref('All active')
const isEmail = ref(true)
const isPush = ref(true)
const notifications = (event) => {
  if (event.target.id === 'email') isEmail.value = event.target.checked
  if (event.target.id === 'push') isPush.value = event.target.checked
}
const isState = () => {
  if (isEmail.value && isPush.value) {
    state.value = 'All active'
  } else if (isEmail.value && !isPush.value) {
    state.value = 'Email active'
  } else if (!isEmail.value && isPush.value) {
    state.value = 'Push active'
  } else {
    state.value = 'All inactive'
  }
}
</script>

<style lang="scss">
  .setting {
    &__wrap {
      display: flex;
      flex-direction: column;
      justify-content: start;
      margin: 0 auto;
      padding-top: rem(54px);
    }
    &__top {
      display: flex;
      flex-direction: column;
      gap: rem(32px);
      margin: 0 rem(16px);
      padding: rem(24px) 0;
      border-bottom: solid rem(1px) $neutral-lightgrey;
    }
    &__profile {
      display: flex;
      align-items: center;
      gap: rem(16px);
      .profile {
        &__img {
          width: rem(64px);
          height: rem(64px);
          border-radius: rem(100px);
          background-color: $neutral-darkgrey;
          background-position: center center;
          background-repeat: no-repeat;
          background-size: cover;
        }
        &__info {
          &--name {
            font-size: rem(20px);
            font-weight: 700;
            line-height: rem(28px);
            text-align: left;
          }
          &--email {
            display: flex;
            align-items: center;
            gap: rem(8px);
            margin-top: rem(8px);
            font-size: rem(12px);
            color: $neutral-darkgrey;
            &::before {
              content: '';
              display: block;
              width: rem(15px);
              height: rem(15px);
              background-image: url('@/assets/images/icon/icon_mail.svg');
              background-repeat: no-repeat;
              background-position: center center;
            }
          }
        }
      }
      &--button {
        span {
          &::before {
            background-image: url('@/assets/images/icon/icon_edit.svg') !important;
            background-position: center center !important;
            background-size: auto !important;
          }
        }
      }
    }
    &__bottom {
      display: flex;
      flex-direction: column;
      gap: rem(8px);
      margin: 0 rem(16px);
      padding-top: rem(24px);
    }
    &__title {
      font-size: rem(10px);
      color: $neutral-darkgrey;
    }
    &__list {
      button {
        display: flex;
        align-items: center;
        gap: rem(12px);
        padding: rem(16px) rem(8px);
        border: none;
        width: 100%;
        span {
          position: absolute;
          right: rem(24px);
          font-size: rem(12px);
          color: $neutral-darkgrey;
        }
        &::before {
          content: '';
          display: block;
          width: rem(24px);
          height: rem(24px);
          background-position: center center;
          background-repeat: no-repeat;
        }
        &:first-of-type {
          &::before {
            background-image: url('@/assets/images/icon/setting_password.svg');
          }
          &::after {
            content: '';
            position: absolute;
            right: rem(24px);
            width: rem(16px);
            height: rem(16px);
            background-image: url('@/assets/images/icon/setting_arrow.svg');
          }
        }
        &:nth-child(2) {
          &::before {
            background-image: url('@/assets/images/icon/setting_text.svg');
          }
        }
        &:nth-child(3) {
          &::before {
            background-image: url('@/assets/images/icon/setting_bell.svg');
          }
        }
        &:last-of-type {
          color: $error-base;
          &::before {
            background-image: url('@/assets/images/icon/setting_logOut.svg');
          }
        }
      }
    }
    &__line {
      margin: rem(8px) 0;
      border-bottom: solid rem(1px) $neutral-lightgrey;
    }
  }
  #notifications {
    li {
      display: flex;
      justify-content: space-between;
      padding: rem(17px) rem(8px);
      font-size: rem(16px);
      font-weight: 500;
      .inputField {
        width: fit-content;
      }
    }
    button {
      width: rem(24px);
      height: rem(24px);
      border: none;
      border-radius: rem(100px);
      background-color: $neutral-lightgrey;
      background-image: url('@/assets/images/icon/setting_x.svg');
      background-repeat: no-repeat;
      background-position: center center;
      cursor: pointer;
    }
  }
  #logOut {
    .popup--footer{
      button {
        width: rem(108px);
        height: rem(38px);
        border-radius: rem(100px);
        padding: rem(8px);
        &:first-of-type {
          border: solid rem(1px) $primary-base;
          color: $primary-base;
          margin-left: 0;
        }
        &:last-of-type {
          background-color: $primary-base;
          color: $neutral-white;
        }
      }
    }
  }
</style>
