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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: rem(16px);
    height: 100vh;
    .setting {
      &__center {
        text-align: center;
        margin-top: rem(40px);
        img {
          margin: rem(30px) 0;
        }
        .title {
          font-size: rem(24px);
        }
      }
    }
  }
</style>
