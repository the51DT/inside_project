<template>
  <h3 class="title">{{ title }}</h3>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Title Here'
    }
  }
}
</script>

<style lang="scss"></style>
