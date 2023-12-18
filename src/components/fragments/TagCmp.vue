<template>
  <div :class="[
    'tag',
    color === 'highlight' ? 'tag--highlight' : '',
    color === 'white' ? 'tag--white' : ''
  ]">
    {{ text }}
    <button v-if="del" class="tag__del" @click="deleteTag"></button>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
    color: String,
    del: Boolean
  },
  methods: {
    deleteTag: function (el) {
      const button = el.currentTarget
      const target = button.parentElement
      target.remove()
    }
  }
}
</script>

<style lang="scss"></style>
