<template>
  <nav v-if="getPathname()">
    <router-link to="/main/home">Home</router-link> |
    <router-link to="/main/finished">Finished</router-link> |
    <router-link to="/main/Create">Create</router-link> |
    <router-link to="/main/Search">Search</router-link> |
    <router-link to="/main/Setting">Setting</router-link>
  </nav>
  <nav v-else>
    <router-link to="/">Home</router-link> |
    <router-link to="/button">button</router-link> |
    <router-link to="/overlays">overlays</router-link>
    <router-link to="/list">list</router-link>
  </nav>
  <router-view />
</template>
<style lang="scss"></style>
<script>
/* eslint-disable */
export default {
  data() {
    return {
      isMain: false
    }
  },
  created() {
    console.log(this.getPathname())
  },
  methods: {
    getPathname() {
      if (window.location.pathname.indexOf('main') * 1 > 0) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>
