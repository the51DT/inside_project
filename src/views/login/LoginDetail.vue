<template>
  <div class="nav-bar__fixed">
    <NavBar title="" back="Back to login" :view="false" />
  </div>
  <router-view></router-view>
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
      height: 100vh;
      &--detail {
        padding: rem(54px) rem(16px) rem(32px);
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
