<template>
  <nav>
    <router-link to="/main/home">Home</router-link> |
    <router-link to="/main/finished">Finished</router-link> |
    <router-link to="/main/Create">Create</router-link> |
    <router-link to="/main/Search">search</router-link> |
    <router-link to="/main/Setting">setting</router-link>
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
