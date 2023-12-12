<template>
  <button :class="['btn', typeClass, sizeClass]" :disabled="disabled">
    <i
      :class="['btn-link', iconPosition ? 'link-right' : 'link-center']"
      v-if="icon"
    ></i>
    <span class="btn-txt">{{ btnTxt }}</span>
    <i :class="['btn-link', iconPosition ? 'link-left' : '']" v-if="icon2"></i>
  </button>
</template>

<script>
/* eslint-disable */
export default {
  props: {
    bgBtn: {
      type: String,
      default: ''
    },
    bdBtn: {
      type: String,
      default: ''
    },
    hvBtn: {
      type: String,
      default: ''
    },
    btnSize: {
      type: String,
      default: ''
    },
    btnTxt: {
      type: String,
      default: 'Block + Primary'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    iconPosition: {
      type: Boolean,
      default: false
    },
    icon: {
      type: Boolean,
      default: false
    },
    icon2: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    typeClass() {
      if (this.bgBtn !== '') return `bg-${this.bgBtn}`
      if (this.bdBtn !== '') return `bd-${this.bdBtn}`
      if (this.hvBtn !== '') return `hv-${this.hvBtn}`
      return ''
    },
    sizeClass() {
      if (this.btnSize === 'large') return `btn-${this.btnSize}`
      else if (this.btnSize === 'medium') return `btn-${this.btnSize}`
      else if (this.btnSize === 'small') return `btn-${this.btnSize}`
      return ''
    }
  }
}
</script>
