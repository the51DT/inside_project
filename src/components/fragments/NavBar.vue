/* eslint-disable */
<template>
  <div class="nav-bar">
    <h3 v-if="title !== ''" class="title">{{ title }}</h3>
    <div class="nav-bar--list">
      <ul>
        <li>
          <button class="back" @click="$router.go(-1)">{{ back }}</button>
        </li>
        <li v-if="rightBtn === 'setting' || rightBtn === 'action'">
          <button v-if="rightBtn === 'setting'" class="setting">
            <span class="ally">setting</span>
          </button>
          <button v-if="rightBtn === 'action'" class="action">
            <span>Action</span>
          </button>
        </li>
      </ul>
    </div>
  </div>
  <router-view />
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  title: {
    type: String,
    default: 'Title'
  },
  back: {
    type: String,
    default: 'Back'
  },
  rightBtn: {
    type: String,
    default: ''
  }
})
console.log(props.title, props.rightBtn)
</script>

<style lang="scss">
.nav-bar {
  position: relative;
  height: rem(54px);
  box-shadow: 0px 1px 0px 0px $neutral-lightgrey;
  .title {
    text-align: center;
    font-size: rem(16px);
    line-height: rem(54px);
    font-weight: 500;
    margin: 0;
    padding: rem(0 100px);
  }
  &--list {
    position: absolute;
    width: 100%;
    left: 0%;
    top: 50%;
    transform: translateY(-50%);

    ul {
      display: flex;
      justify-content: space-between;
      padding: rem(0 16px);
      li {
        display: flex;
        align-items: center;
        button {
          display: block;
          border: none;
          cursor: pointer;

          &.back {
            padding-left: rem(28px);
            background-image: url(@/assets/images/icon/icon-cheveron-left.svg);
            background-repeat: no-repeat;
            background-position: left center;
            color: $primary-base;
            line-height: rem(38px);
          }
          &.setting {
            padding: rem(22px 22px 0 0);
            background-image: url(@/assets/images/icon/icon-nav-setting.svg);
            background-repeat: no-repeat;
            background-position: left center;
            color: $primary-base;
          }
          &.action {
            padding: rem(0 16px);
            line-height: rem(38px);
            border-radius: rem(38px);
            background-color: $primary-base;
            color: $neutral-lightgrey;
            span {
            }
          }
        }
      }
    }
  }
  .ally {
    @include ally-hidden;
  }
}
</style>
