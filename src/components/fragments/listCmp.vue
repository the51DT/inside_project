<template>
  <!-- 리스트 -->
  <div :class="['list-box', typeClass]">
    <!-- 왼쪽 -->
    <div class="list-box__left"></div>
    <!-- 오른쪽 -->
    <div class="list-box__right">
      <p class="big-title">{{ bigTitle }}</p>
      <p class="sub-title">{{ subTitle }}</p>
    </div>
  </div>
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
