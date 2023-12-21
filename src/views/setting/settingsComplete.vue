<template>
  <div class="setting__wrap setting__wrap--complete">
    <div class="setting__center">
      <img src="../../assets/images/setting/setting_illustration.png" alt="change password complete">
      <TitleInput title="Password Changed" sub="Please check your email! We've sent you a link to finish the process."></TitleInput>
    </div>
    <ButtonCmp
      :class="'setting__complete'"
      bgBtn="base"
      btnSize="large"
      iconPositionRight="right"
      btnTxt="Back to Login"
      @click="goUrl('login')"
    />
  </div>
</template>

<script setup>
import router from '@/router'

const goUrl = (url) => {
  if (url === 'login') {
    router.push({ name: 'LoginView' })
  }
}
</script>

<style lang="scss">
  .setting__wrap--complete{
    .setting {
      &__center {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: calc(100% - rem(32px));
        img {
          margin: 0 0 rem(30px);
          width: rem(240px);
          height: rem(240px);
        }
        .title {
          font-size: rem(24px);
        }
      }
      &__complete {
        position: fixed;
        left: 50%;
        bottom: rem(32px);
        transform: translateX(-50%);
        width: calc(100% - rem(32px));
      }
    }
  }
</style>
