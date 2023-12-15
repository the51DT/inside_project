<!-- eslint-disable space-before-function-paren -->
<template>
  <div>
    <nav>
      <ul>
        <li :key="link.title" v-for="link in routerRef">
          <a href="">{{ link.title }}</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const routerRef = ref([
  { title: 'Home' },
  { title: 'Finished' },
  { title: 'Create' },
  { title: 'Search' },
  { title: 'Settings' }
])
</script>

<style lang="scss"></style>
