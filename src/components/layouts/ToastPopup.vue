<template>
  <div :id="modalId" class="popup--toast">
    <slot name="text">
    </slot>
  </div>
</template>

<script>
export default {
  props: {
    modalId: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss"></style>
