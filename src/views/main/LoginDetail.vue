<template>
  <div class="login__wrap login__wrap--detail">
    <router-link to="/main/login" class="btn fs-large backLink">Back to Login</router-link>
    <router-view></router-view>
  </div>
</template>

<script setup>
</script>

<style lang="scss">
  .login {
    &__wrap {
      display: flex;
      flex-direction: column;
      justify-content: end;
      margin: 0 auto;
      padding: 0 rem(16px) rem(48px);
      width: rem(360px);
      height: 100vh;
      &--detail {
        justify-content: space-between;
        padding: 0 rem(16px) rem(32px);
      }
      .backLink {
        display: flex;
        justify-content: start;
        align-items: center;
        gap: rem(8px);
        padding: rem(16px) 0;
        color: $primary-base;
        &::before {
          content: '';
          display: block;
          width: rem(6px);
          height: rem(10px);
          background-image: url('@/assets/images/icon/login_back.svg');
        }
      }
    }
    &__input {
      margin-top: rem(32px);
      & .btn {
        display: block;
        margin-top: rem(12px);
      }
    }
    &__button {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: rem(16px);
      margin-top: rem(40px);
      &__line {
        position: relative;
        font-size: rem(12px);
        font-weight: 500;
        color: $neutral-darkgrey;
        width: 100%;
        text-align: center;
        &::before,
        &::after {
          content: '';
          display: block;
          position: absolute;
          top: 50%;
          width: rem(141px);
          border-top: solid rem(1px) $neutral-lightgrey;
        }
        &::before {
          left: 0;
        }
        &::after {
          right: 0;
        }
      }
    }
  }
</style>
