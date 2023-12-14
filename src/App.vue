<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/button">button</router-link> |
    <router-link to="/overlays">Overlays</router-link> |
    <router-link to="/list">list</router-link>
  </nav>
  <router-view />
</template>

<style lang="scss">
// @import '@/assets/scss/index.scss';
</style>

<script setup></script>

<script>
export default {}
</script>
