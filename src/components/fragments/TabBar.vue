<!-- eslint-disable space-before-function-paren -->
<template>
  <div class="tab-bar">
    <nav>
      <ul>
        <li
          :class="`${
            link.allyHidden ? 'ally' : ''
          } ${link.title.toLowerCase()}`"
          :key="link.title"
          v-for="link in routerRef"
        >
          <router-link :to="`/${link.title.toLowerCase()}`">
            <span>{{ link.title }}</span>
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const routerRef = ref([
  { title: 'Home', allyHidden: false },
  { title: 'Finished', allyHidden: false },
  { title: 'Create', allyHidden: true },
  { title: 'Search', allyHidden: false },
  { title: 'Settings', allyHidden: false }
])
</script>

<style lang="scss"></style>
