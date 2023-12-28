<template>
  <div class="task-bar">
    <div class="task-bar--date">
      Last edited on&nbsp;
      <span class="task-bar--edit">19.30</span>
    </div>
    <div class="task-bar--list">
      <button class="search" @click="searchTop()">
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
            <button :data-icon="list.type" @click="notYetNotice()">
              {{ list.text }}
              <span>{{ list.flag }}</span>
            </button>
          </li>
        </ul>
      </div>
      <button class="deleteBtn" @click="deleteBtn()">Delete Note</button>
    </template>
    <template v-slot:footer>
      <button class="closeBtn" @click="closeBtn($event)">
        <span>close</span>
      </button>
    </template>
  </modal-bottom>
  <div class="nav-bar__fixed" id="searhBar">
    <div class="nav-bar" v-if="search">
      <div class="nav-bar--list">
        <ul>
          <li>
            <button class="back" @click="searchTop()">
              <span class="hidden">{{ back }}</span>
            </button>
          </li>
          <li>
            <div class="search">
              <inputField
                type="search"
                id="search_default"
                placeholder="Search..."
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <modal-center id="deleteNote">
    <template v-slot:title>
      <h4>Delete Notes</h4>
    </template>
    <template v-slot:body>
      <br />
      <div class="popup--body__contnet">
        Are you sure you want to delete the selected notes?
      </div>
      <br />
      <div class="popup--body__contnet">
        Deleting notes mean it will be removed permanently.
      </div>
    </template>
    <template v-slot:footer>
      <ButtonCmp
        bdBtn="base"
        btnSize="small"
        btnTxt="Cancel"
        @click="closeBtn($event)"
      />
      <ButtonCmp
        bgBtn="base"
        btnSize="small"
        btnTxt="Yes,Delete"
        @click="$router.go(-1)"
      />
    </template>
  </modal-center>
  <modal-center id="notYetNotice">
    <template v-slot:title>
      <h4>Preparing to implement the feature.</h4>
    </template>
    <template v-slot:body>
      <br />
      <div class="popup--body__contnet">
        I'm sorry.<br />
        We are still preparing to implement the feature.
      </div>
      <br />
      <div class="popup--body__contnet">
        We will complete it as soon as possible.
      </div>
    </template>
    <template v-slot:footer>
      <ButtonCmp
        bdBtn="base"
        btnSize="small"
        btnTxt="Cancel"
        @click="closeBtn($event)"
      />
    </template>
  </modal-center>
</template>

<script>
/* eslint-disable */
import BgChoice from '@/components/fragments/BgChoice.vue'
export default {
  components: { BgChoice },
  data() {
    return {
      isActive: false,
      search: false,
      back: 'back',
      lists: [
        { type: '1', text: 'Set Reminder', flag: 'Not set' },
        { type: '2', text: 'Change Note Type', flag: 'Buying Some...' },
        { type: '3', text: 'Give Label', flag: 'Not set' },
        { type: '4', text: 'Mark as Finished', flag: '' }
      ],
      bglist: []
    }
  },
  methods: {
    bookMarkToogle() {
      this.isActive = !this.isActive
    },
    searchTop() {
      this.search = !this.search
    },
    deleteBtn() {
      const delBtn = document.getElementById('OpenOptions')
      const delBtnNewModal = document.getElementById('deleteNote')
      delBtn.classList.remove('active')
      delBtnNewModal.classList.add('active')
    },
    notYetNotice() {
      const notYet = document.getElementById('OpenOptions')
      const notYetNewModal = document.getElementById('notYetNotice')
      notYet.classList.remove('active')
      notYetNewModal.classList.add('active')
    }
  }
}
</script>

<style lang="scss">
#searhBar {
  .nav-bar {
    &--list {
      ul {
        justify-content: flex-start;
        li {
          button {
            &.back {
              width: rem(20px);
              height: rem(20px);
              background-image: url(@/assets/images/icon/search_back.svg);
              padding-right: rem(8px);
            }
          }
          & + li {
            width: 100%;
            .search {
              width: 100%;
            }
          }
        }
      }
    }
  }
}
</style>
