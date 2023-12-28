<template>
  <nav v-if="isPath">
    <a
      class="app_btn"
      href="https://github.com/the51DX/inside_project"
      target="_blank"
      rel="noopener noreferrer"
      >Github</a
    >
    <a
      class="app_btn"
      href="https://www.figma.com/file/cRMUv5f1VccUYMJCHp2rRo/(Free-Version)-Makarya-Notes---Advanced-Note-Taking-App-Design-System-%2B-UI-Kit-(Community)?type=design&node-id=936-13105&mode=design&t=sk3qMJa7denScNJE-0"
      target="_blank"
      rel="noopener noreferrer"
      >Figma</a
    >
    <router-link to="/start" class="app_btn">Mobile</router-link>
    <router-link to="/guide" class="app_btn">Guide</router-link>
  </nav>
  <nav v-if="isGuide">
    <router-link to="/" class="app_btn">Main</router-link>
    <router-link to="/start" class="app_btn">Mobile</router-link>
    <router-link to="/guide/input" class="app_btn">Input</router-link>
    <router-link to="/guide/button" class="app_btn">Button</router-link>
    <router-link to="/guide/overlays" class="app_btn">Overlays</router-link>
    <router-link to="/guide/note" class="app_btn">Note</router-link>
  </nav>
  <router-view />
</template>
<script setup>
/* eslint-disable */
import { useRouter } from 'vue-router'
import { ref } from 'vue'
const isPath = ref(true)
const isGuide = ref(false)
const router = useRouter()
router.beforeEach((to, from, next) => {
  to.fullPath === '/' ? (isPath.value = true) : (isPath.value = false)
  to.fullPath.split('/').indexOf('guide') > 0
    ? (isGuide.value = true)
    : (isGuide.value = false)
  next()
})
</script>

<style lang="scss">
nav {
  padding: rem(8px);
}
.app_btn {
  display: block;
  text-align: center;
  background-color: $primary-base;
  color: $neutral-white;
  padding: rem(16px) rem(24px);
  border-radius: rem(100px);
  & + .app_btn {
    margin-top: rem(12px);
  }
}
</style>
