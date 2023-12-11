<template>
  <div :id="modalId" class="popup">
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
      <div class="popup--close">
        <slot name="close"></slot>
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

<style lang="scss">
.popup {
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  padding: rem(40px);
  background-color: rgba($color: $neutral-dark, $alpha: 0.3);
  &.active {
    display: flex;
  }
  &--area {
    position: relative;
    padding: rem(32px 24px);
    background-color: $neutral-white;
    border-radius: rem(16px);
  }
  &--header {
    h4 {
      font-size: rem(20px);
      text-align: center;
      font-weight: 700;
    }
  }
  &--body {
    margin-top: rem(8px);
    &__contnet {
      font-size: rem(16px);
      color: $neutral-darkgrey;
      text-align: center;
    }
  }
  &--footer {
    margin-top: rem(48px);
    text-align: center;
  }
  &--close {
    position: absolute;
    right: rem(24px);
    top: rem(32px);
  }
}
</style>
