<template>
  <h3 class="title">{{ title }}</h3>
  <h3 class="title--gray">{{ title }}</h3>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Title'
    }
  }
}
</script>

<style lang="scss"></style>
