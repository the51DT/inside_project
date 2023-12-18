<template>
  <tab-bar v-if="isMain" />
  <!-- <nav >
    <router-link to="/main/home">Home</router-link> |
    <router-link to="/main/finished">Finished</router-link> |
    <router-link to="/main/Create">Create</router-link> |
    <router-link to="/main/Search">Search</router-link> |
    <router-link to="/main/Setting">Setting</router-link> |
    <router-link @click="isMain = !isMain" to="/">Components</router-link>
  </nav> -->
  <nav v-else>
    <router-link to="/">Home</router-link> |
    <router-link to="/button">Button</router-link> |
    <router-link to="/overlays">Overlays</router-link> |
    <router-link to="/list">List</router-link> |
    <router-link @click="isMain = !isMain" event="" to="/main/home"
      >Main</router-link
    >
  </nav>
  <router-view />
</template>
<style lang="scss"></style>
<script setup>
import { ref } from 'vue'
const isMain = ref(false)
</script>
