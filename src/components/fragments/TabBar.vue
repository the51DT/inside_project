<!-- eslint-disable space-before-function-paren -->
<template>
  <div class="tab-bar">
    <nav>
      <ul>
        <li
          :class="`${
            link.allyHidden ? 'ally' : ''
          } ${link.title.toLowerCase()}`"
          :key="link.title"
          v-for="link in routerRef"
        >
          <router-link :to="`/main/${link.title.toLowerCase()}`">
            <span>{{ link.title }}</span>
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const routerRef = ref([
  { title: 'Home', allyHidden: false },
  { title: 'Finished', allyHidden: false },
  { title: 'Create', allyHidden: true },
  { title: 'Search', allyHidden: false },
  { title: 'Settings', allyHidden: false }
])
</script>

<style lang="scss">
.tab-bar {
  position: fixed;
  width: 100%;
  bottom: 0;
  nav {
    ul {
      position: relative;
      display: flex;
      justify-content: space-around;
      padding: rem(16px);
      li {
        display: flex;
        align-items: flex-end;
        a {
          display: block;
          padding-top: rem(40px);
          width: rem(52px);
          font-size: rem(10px);
          text-align: center;
          color: $neutral-darkgrey;
          background-repeat: no-repeat;
          background-position: center top rem(3px);
          &[aria-current] {
            color: $primary-base;
          }
        }
        &.ally {
          position: relative;
          width: rem(80px);
          margin: 0 rem(4px);
          &::before {
            position: absolute;
            top: rem(-56px);
            left: 50%;
            transform: translate(-50%);
            display: block;
            content: '';
            width: rem(80px);
            height: rem(80px);
            border-radius: 100%;
            background-color: $neutral-white;
          }
          a {
            position: absolute;
            left: 50%;
            transform: translate(-50%);
            top: rem(-48px);
            padding-top: 0;
            width: rem(64px);
            height: rem(64px);
            border-radius: 100%;
            background-color: $primary-base;
            background-image: url(@/assets/images/icon/icon_outline_plus.svg);
            background-position: center;
            box-shadow: rem(0 3px 4px 0px) #00000033;
            span {
              @include ally-hidden;
            }
          }
        }
        &.home {
          a {
            background-image: url(@/assets/images/icon/icon_outline_home.svg);
            &[aria-current] {
              background-image: url(@/assets/images/icon/icon_solid_home.svg);
            }
          }
        }
        &.finished {
          a {
            background-image: url(@/assets/images/icon/icon_outline_finished.svg);
            &[aria-current] {
              background-image: url(@/assets/images/icon/icon_solid_finished.svg);
            }
          }
        }
        &.search {
          a {
            background-image: url(@/assets/images/icon/icon_outline_search.svg);
            &[aria-current] {
              background-image: url(@/assets/images/icon/icon_solid_search.svg);
            }
          }
        }
        &.settings {
          a {
            background-image: url(@/assets/images/icon/icon_outline_setting.svg);
            &[aria-current] {
              background-image: url(@/assets/images/icon/icon_solid_setting.svg);
            }
          }
        }
      }
    }
  }
}
</style>
