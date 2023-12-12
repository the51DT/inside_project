<template>
  <div :id="modalId" class="popup popup--bottom">
    <div class="popup--area">
      <div class="popup--header">
        <slot name="title"></slot>
      </div>
      <div class="popup--body">
        <slot name="body"></slot>
      </div>
      <div class="popup--footer">
        <slot name="footer"></slot>
      </div>
    </div>
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
