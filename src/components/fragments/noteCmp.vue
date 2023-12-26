<template>
  <a class="note__wrap" href="/home">
    <div :class="['note',
      !color ? 'note--default' : '',
      color === 'purple' ? 'note--purple' : '',
      color === 'lightyellow' ? 'note--lightyellow' : '',
      color === 'yellow' ? 'note--yellow' : '',
      color === 'red' ? 'note--red' : '',
      color === 'green' ? 'note--green' : '',
      sub ? 'note--hasSub' : ''
    ]">
      <h6 class="note__title">{{ title }}</h6>
      <div class="note__detail">
        <p v-if="type === 'text'" class="note__detail--text">
          Create a mobile app UI Kit that provide a basic notes functionality but with some improvement.<br><br>
          There will be a choice to select what kind of notes that user needed, so the experience while taking notes can be unique based on the needs.
        </p>
        <div v-else-if="type === 'image'">
          <img class="note__detail--image" src="../../assets/images/img/Thumbnail.png" alt="note thumbnail">
          <p class="note__detail--text">Create a mobile app UI Kit that provide a basic notes functionality but with some improvement.</p>
        </div>
        <input-field
          v-else-if="type === 'checkbox'"
          type="checkbox"
          size="small"
          :defaultText="list"
          :key="list"
          v-for="list in lists"
          disabled
        />
        <div v-else-if="type === 'checkboxSub'">
          <inputField
            type="checkbox"
            defaultText="Item 1"
            size="small"
            disabled
          ></inputField>
          <inputField
            type="checkbox"
            defaultText="Sub item 1"
            size="small"
            sub
            disabled
          ></inputField>
          <inputField
            type="checkbox"
            defaultText="Sub item 2"
            size="small"
            sub
            disabled
          ></inputField>
          <inputField
            type="checkbox"
            defaultText="Item 2"
            size="small"
            disabled
          ></inputField>
        </div>
      </div>
    </div>
    <p v-if="sub" :class="['note--sub', color]"><span>{{ sub }}</span></p>
  </a>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  title: {
    type: String
  },
  type: {
    type: String,
    default: 'text'
  },
  color: {
    type: String
  },
  sub: {
    type: String
  },
  lists: {
    type: Array,
    default: () => ['Item 1', 'Item 2', 'Item 3', 'Item 4']
  }
})
</script>

<style lang="scss">

</style>
