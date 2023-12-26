<template>
  <!-- <tab-bar v-if="isMain" /> -->
  <!-- <nav >
    <router-link to="/main/home">Home</router-link> |
    <router-link to="/main/start">OnBoarding</router-link> |
    <router-link to="/main/login">Login</router-link> |
    <router-link to="/main/finished">Finished</router-link> |
    <router-link to="/main/Create">Create</router-link> |
    <router-link to="/main/Search">Search</router-link> |
    <router-link to="/main/Setting">Setting</router-link> |
    <router-link @click="isMain = !isMain" to="/">Components</router-link>
  </nav> -->
  <!-- <nav v-else>
    <router-link to="/guide/input">Home</router-link> |
    <router-link to="/guide/button">Button</router-link> |
    <router-link to="/guide/overlays">Overlays</router-link> |
    <router-link to="/guide/note">Note</router-link> |
    <router-link @click="isMain = !isMain" event="" to="/home/default"
      >Main</router-link
    >
  </nav> -->
  <!-- <ul>
    <li><router-link to="/start">홈페이지</router-link></li>
    <li><router-link to="/guide/input">가이드 - Input</router-link></li>
    <li><router-link to="/guide/button">가이드 - Button</router-link></li>
    <li><router-link to="/guide/overlays">가이드 - Modal</router-link></li>
    <li><router-link to="/guide/note">가이드 - note</router-link></li>
  </ul> -->
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
    <router-link to="/start">Mobile</router-link>
  </nav>
  <router-view />
</template>
<script setup>
/* eslint-disable */
import { useRouter } from 'vue-router'
import { ref } from 'vue'
const isPath = ref(true)
const router = useRouter()
router.beforeEach((to, from, next) => {
  to.fullPath === '/' ? (isPath.value = true) : (isPath.value = false)
  next()
})
</script>
