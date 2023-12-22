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
  <router-view />
</template>
<script setup>
// import { ref } from 'vue'
// const isMain = ref(false)
</script>
