<template>
  <div :class="['note', !color ? 'note--default' : '']">
    <h6 class="note__title">{{ title }}</h6>
    <div class="note__detail">
      <p class="note__detail--text">{{ detailText }}</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps(['title', 'detailText'])
</script>

<style lang="scss">

</style>
