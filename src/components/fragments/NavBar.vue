/* eslint-disable */
<template>
  <div class="nav-bar">
    <h3 v-if="props.title !== ''" class="title">{{ props.title }}</h3>
    <div class="nav-bar--list">
      <ul>
        <li>
          <button class="back" @click="$router.go(-1)">{{ props.back }}</button>
        </li>
        <li v-if="props.rightBtn === 'setting' || props.rightBtn === 'action'">
          <button v-if="props.rightBtn === 'setting'" class="setting">
            <span class="ally">setting</span>
          </button>
          <button v-if="props.rightBtn === 'action'" class="action">
            <span>Action</span>
          </button>
        </li>
      </ul>
    </div>
  </div>
  <router-view />
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  title: {
    type: String,
    default: 'Title'
  },
  back: {
    type: String,
    default: 'Back'
  },
  rightBtn: {
    type: String,
    default: ''
  }
})
// console.log(props.title, props.rightBtn)
</script>

<style lang="scss"></style>
