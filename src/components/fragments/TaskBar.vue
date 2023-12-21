<template>
  <div class="task-bar">
    <div class="task-bar--date">
      Last edited on&nbsp;
      <span class="task-bar--edit">19.30</span>
    </div>
    <div class="task-bar--list">
      <button class="search">
        <span>Search</span>
      </button>
      <button
        class="bookmark"
        @click="openBtn('Bookmark'), bookMarkToogle()"
        :class="{ active: isActive }"
      >
        <span>Bookmark</span>
      </button>
      <button class="options" @click="openBtn('OpenOptions')">
        <span>Open Options</span>
      </button>
    </div>
  </div>
  <modal-bottom id="Bookmark">
    <template v-slot:title> </template>
    <template v-slot:body>
      <div class="popup--body__contnet">
        <div class="notification">
          <div class="notification--title" :class="{ active: !isActive }">
            <h5 v-if="!isActive">unfixed note</h5>
            <h5 v-else>Notes Pinned Successfully</h5>
          </div>
          <div class="notification--descript">
            <p v-if="!isActive">
              Note not already displayed in the Fixed section
            </p>
            <p v-else>This note already displayed on pinned section</p>
          </div>
          <ButtonCmp
            bgBtn="base"
            btnSize="small"
            btnTxt="Close"
            @click="closeBtn($event)"
          />
        </div>
      </div>
    </template>
    <template v-slot:footer>
      <button class="closeBtn" @click="closeBtn($event)">
        <span>close</span>
      </button>
    </template>
  </modal-bottom>
  <modal-bottom id="OpenOptions">
    <template v-slot:title> </template>
    <template v-slot:body>
      <div class="bg--list">
        <p class="bg--list__title">EXTRAS</p>
        <bg-choice :bglist="bglist" />
      </div>
      <div class="extras">
        <p class="extras__title">EXTRAS</p>
        <ul>
          <li :key="list" v-for="list in lists">
            <button :data-icon="list.type">
              {{ list.text }}
              <span>{{ list.flag }}</span>
            </button>
          </li>
        </ul>
      </div>
      <button class="deleteBtn">Delete Note</button>
    </template>
    <template v-slot:footer>
      <button class="closeBtn" @click="closeBtn($event)">
        <span>close</span>
      </button>
    </template>
  </modal-bottom>
</template>

<script>
/* eslint-disable */
import BgChoice from '@/components/fragments/BgChoice.vue'
export default {
  components: { BgChoice },
  data() {
    return {
      isActive: false,
      lists: [
        { type: '1', text: 'Set Reminder', flag: 'Not set' },
        { type: '2', text: 'Change Note Type', flag: 'Buying Some...' },
        { type: '3', text: 'Give Label', flag: 'Not set' },
        { type: '4', text: 'Mark as Finished', flag: '' }
      ]
    }
  },
  methods: {
    bookMarkToogle() {
      this.isActive = !this.isActive
    }
  }
}
</script>

<style lang="scss"></style>
