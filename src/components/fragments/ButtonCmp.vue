<template>
  <!-- 버튼 -->
  <button
    :class="['btn', typeClass, sizeClass]"
    :disabled="disabled"
    :type="button"
    v-if="btnType"
  >
    <span
      :class="[
        btnTxt ? 'btn-txt' : 'hidden',
        positionClass,
        { underline: isUnderlined }
      ]"
    >
      {{ btnTxt || btnTxtHidden }}
    </span>
  </button>
  <!-- 링크 -->
  <a :class="['btn', colorClass, fontSizeClass]" v-else :href="useUrl">
    <span :class="[btnTxt ? 'btn-txt' : 'hidden', positionClass]">{{
      btnTxt
    }}</span>
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
    plusBtn: {
      type: String,
      default: ''
    },
    btnSize: {
      type: String,
      default: ''
    },
    btnTxt: {
      type: String,
      default: ''
    },
    btnTxtHidden: {
      type: String,
      default: ''
    },
    isUnderlined: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    iconPositionRight: {
      type: String,
      default: ''
    },
    iconPositionCenter: {
      type: String,
      default: ''
    },
    iconPositionLeft: {
      type: String,
      default: ''
    },
    useUrl: {
      type: String,
      default: 'http://www.naver.com'
    }
  },
  computed: {
    typeClass() {
      if (this.bgBtn !== '') return `bg-${this.bgBtn}`
      else if (this.bdBtn !== '') return `bd-${this.bdBtn}`
      else if (this.hvBtn !== '') return `hv-${this.hvBtn}`
      else if (this.plusBtn !== '') return `plus-${this.plusBtn}`
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
      else if (this.bdBtn !== '') return `color-${this.bdBtn}`
      return ''
    },
    fontSizeClass() {
      if (this.btnSize === 'large') return `fs-${this.btnSize}`
      else if (this.btnSize === 'small') return `fs-${this.btnSize}`
      return ''
    },
    positionClass() {
      if (this.iconPositionRight === 'right') return `icon-right`
      else if (this.iconPositionCenter === 'center') return `icon-center`
      else if (this.iconPositionLeft === 'left') return `icon-left`
      return ''
    }
  }
}
</script>
