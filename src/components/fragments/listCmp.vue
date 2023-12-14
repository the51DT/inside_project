<template>
  <!-- 리스트 -->
  <div :class="['list-box', typeClass]">
    <!-- 왼쪽 -->
    <div class="list-box__left"></div>
    <!-- 오른쪽 -->
    <div class="list-box__right">
      <p v-if="bigTitleY" class="big-title">{{ bigTitle }}</p>
      <p v-if="subTitleY" class="sub-title">{{ subTitle }}</p>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  props: {
    shoppingIcon: {
      type: Boolean,
      default: false
    },
    ideaIcon: {
      type: Boolean,
      default: false
    },
    guidanceIcon: {
      type: Boolean,
      default: false
    },
    goalsIcon: {
      type: Boolean,
      default: false
    },
    tasksIcon: {
      type: Boolean,
      default: false
    },
    bigTitleY: {
      type: Boolean,
      default: true
    },
    subTitleY: {
      type: Boolean,
      default: true
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
      if (this.shoppingIcon) return `shooping-list-box`
      else if (this.ideaIcon) return `idea-list-box`
      else if (this.guidanceIcon) return `guidance-list-box`
      else if (this.goalsIcon) return `goals-list-box`
      else if (this.tasksIcon) return `tasks-list-box`
      return ''
    }
  }
}
</script>
