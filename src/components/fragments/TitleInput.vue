<template>
  <div>
    <h3 :class="type === '' ? 'title' : `title--${type}`">{{ title }}</h3>
    <p
      :class="subtype === '' ? 'title__sub' : `title__sub--${subtype}`"
      v-if="sub !== null"
    >
      {{ sub }}
    </p>
  </div>
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
    },
    subtype: {
      type: String,
      default: ''
    },
    sub: String
  }
}
</script>

<style lang="scss"></style>
