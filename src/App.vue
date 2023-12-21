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

  <router-view />
</template>
<script setup>
// import { ref } from 'vue'
// const isMain = ref(false)
</script>
