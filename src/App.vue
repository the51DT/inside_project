<template>
  <nav v-if="isPath">
    <a
      href="https://github.com/the51DX/inside_project"
      target="_blank"
      rel="noopener noreferrer"
      >Github</a
    >
    |
    <a
      href="https://www.figma.com/file/cRMUv5f1VccUYMJCHp2rRo/(Free-Version)-Makarya-Notes---Advanced-Note-Taking-App-Design-System-%2B-UI-Kit-(Community)?type=design&node-id=936-13105&mode=design&t=sk3qMJa7denScNJE-0"
      target="_blank"
      rel="noopener noreferrer"
      >Figma</a
    >
    |
    <router-link to="/start">Mobile</router-link>|
    <router-link to="/guide">Guide</router-link>
  </nav>
  <nav v-if="isGuide">
    <router-link to="/">Main</router-link>|
    <router-link to="/start">Mobile</router-link>|
    <router-link to="/guide/input">Input</router-link>|
    <router-link to="/guide/button">Button</router-link>|
    <router-link to="/guide/overlays">Overlays</router-link>|
    <router-link to="/guide/note">Note</router-link>
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
