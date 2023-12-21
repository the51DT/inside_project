<template>
  <!-- 리스트 -->
  <button :class="['list-box', typeClass]">
    <!-- 왼쪽 -->
    <i class="list-box__left"></i>
    <!-- 오른쪽 -->
    <span class="list-box__right">
      <strong class="big-title">{{ bigTitle }}</strong>
      <span class="sub-title">{{ subTitle }}</span>
    </span>
  </button>
</template>

<script>
/* eslint-disable */
export default {
  props: {
    iconList: {
      type: String,
      default: ''
    },
    bigTitle: {
      type: String,
      default: ''
    },
    subTitle: {
      type: String,
      default: ''
    }
  },
  computed: {
    typeClass() {
      if (this.iconList === 'shoppingIcon') return `shooping-list-box`
      else if (this.iconList === 'ideaIcon') return `idea-list-box`
      else if (this.iconList === 'guidanceIcon') return `guidance-list-box`
      else if (this.iconList === 'goalsIcon') return `goals-list-box`
      else if (this.iconList === 'tasksIcon') return `tasks-list-box`
      return ''
    }
  }
}
</script>
