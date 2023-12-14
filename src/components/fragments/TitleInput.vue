<template>
  <h3 :class="type === '' ? 'title' : `title--${type}`">{{ title }}</h3>
  <!-- <h3 class="title--gray">{{ title }}</h3> -->
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Title'
    },
    type: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss"></style>
