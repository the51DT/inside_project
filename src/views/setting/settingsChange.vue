<template>
  <div class="nav-bar__fixed">
    <NavBar back="Back" title="Change Password" />
  </div>
  <div class="setting__wrap setting__wrap--change">
    <div class="setting__top">
      <p class="setting__guide">Please input your current password first</p>
      <inputField
        type="text"
        title="Current Password"
        id="name"
        name="name"
        placeholder="*********"
      ></inputField>
    </div>
    <div class="setting__bottom">
      <div>
        <p class="setting__guide">Now, create your new password</p>
        <inputField
          type="text"
          title="Current Password"
          id="name"
          name="name"
          placeholder="*********"
          caption="Password should contain a-z, A-Z, 0-9"
        ></inputField>
        <inputField
          type="text"
          title="Retype New Password"
          id="name"
          name="name"
          placeholder="*********"
        ></inputField>
      </div>
      <ButtonCmp
        :class="'setting__submit'"
        bgBtn="base"
        btnSize="large"
        iconPositionRight="right"
        btnTxt="Save Changes"
        @click="goUrl('complete')"
      />
    </div>
  </div>
</template>

<script setup>
import router from '@/router'

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
    }
  }
}
</style>
