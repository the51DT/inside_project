<template>
  <!-- 버튼 -->
  <button
    :class="['btn', typeClass, sizeClass]"
    :disabled="disabled"
    v-if="btnType"
  >
    <i
      :class="['btn-link', iconPosition ? 'link-right' : 'link-center']"
      v-if="icon"
    ></i>
    <span class="btn-txt">{{ btnTxt }}</span>
    <i :class="['btn-link', iconPosition ? 'link-left' : '']" v-if="icon2"></i>
  </button>
  <!-- 링크 -->
  <a :class="['btn', colorClass, fontSizeClass]" v-else :href="useUrl">
    <i
      :class="['btn-link', iconPosition ? 'link-right' : 'link-center']"
      v-if="icon"
    ></i>
    <span class="btn-txt">{{ btnTxt }}</span>
    <i :class="['btn-link', iconPosition ? 'link-left' : '']" v-if="icon2"></i>
  </a>
</template>

<script>
/* eslint-disable */
export default {
  props: {
    btnType: {
      type: Boolean,
      default: true
    },
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
    },
    useUrl: {
      type: String,
      default: 'http://www.naver.com'
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
    },
    colorClass() {
      if (this.bgBtn !== '') return `color-${this.bgBtn}-under`
      if (this.bdBtn !== '') return `color-${this.bdBtn}`
      return ''
    },
    fontSizeClass() {
      if (this.btnSize === 'large') return `fs-${this.btnSize}`
      else if (this.btnSize === 'small') return `fs-${this.btnSize}`
      return ''
    }
  }
}
</script>
