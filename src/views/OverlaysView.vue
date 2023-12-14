<template>
  <div>
    <title-input title="modal" />
    <title-input title="modal" type="gray" />
    <button @click="openBtn('modal')">modal</button>
    <br />
    <button @click="openBtn('success-modal')">success-modal</button>
    <br />
    <button @click="openBtn('modal-bottom')">modal-bottom</button>
    <br />
    <button @click="openBtn('modal-bottom2')">modal-bottom2</button>
    <br />
    <button @click="openBtn('modal-bottom3')">modal-bottom3</button>
    <modal-center id="modal">
      <template v-slot:title>
        <h4>Modal Title</h4>
      </template>
      <template v-slot:body>
        <div class="popup--body__contnet">
          Write your detailed description for this modal here
        </div>
      </template>
      <template v-slot:footer>
        <button>Action</button><button @click="closeBtn($event)">Close</button>
      </template>
    </modal-center>

    <modal-center id="success-modal">
      <template v-slot:title>
        <h4 class="success">Modal Title</h4>
      </template>
      <template v-slot:body>
        <div class="popup--body__contnet">
          Write your detailed description for this modal here
        </div>
      </template>
      <template v-slot:footer>
        <button>Action</button><button @click="closeBtn($event)">Close</button>
      </template>
    </modal-center>

    <modal-bottom id="modal-bottom">
      <template v-slot:title> </template>
      <template v-slot:body>
        <button class="restore">Restore This Note</button>
        <button class="deleteBtn">Delete Note</button>
      </template>
      <template v-slot:footer>
        <button @click="closeBtn($event)">close</button>
      </template>
    </modal-bottom>

    <modal-bottom id="modal-bottom2">
      <template v-slot:title> </template>
      <template v-slot:body>
        <div class="bg--list">
          <bg-choice :bglist="bglist" />
        </div>
        <div class="extras">
          <p class="extras__title">EXTRAS</p>
          <ul>
            <li :key="list" v-for="list in lists">
              <a href="" :data-icon="list.type">{{ list.text }}</a>
            </li>
          </ul>
        </div>
        <button class="deleteBtn">Delete Note</button>
      </template>
      <template v-slot:footer>
        <button @click="closeBtn($event)">close</button>
      </template>
    </modal-bottom>

    <modal-bottom id="modal-bottom3">
      <template v-slot:title> </template>
      <template v-slot:body>
        <div>
          <h5>Notes Pinned Successfully</h5>
        </div>
        <div>
          <p>This note already displayed on pinned section</p>
        </div>
      </template>
      <template v-slot:footer>
        <button @click="closeBtn($event)">close</button>
      </template>
    </modal-bottom>
  </div>
</template>

<script>
/* eslint-disable */
import BgChoice from '@/components/fragments/BgChoice.vue'
export default {
  components: { BgChoice },
  data() {
    return {
      lists: [
        { type: '1', text: 'Set Reminder', flag: 'Not set' },
        { type: '2', text: 'Change Note Type', flag: 'Buying Some...' },
        { type: '3', text: 'Give Label', flag: 'Not set' },
        { type: '4', text: 'Mark as Finished', flag: '' }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.restore {
  width: 100%;
  line-height: rem(56px);
  color: $neutral-dark;
  font-size: rem(16px);
  font-weight: 500;
}
.deleteBtn {
  width: 100%;
  line-height: rem(56px);
  color: $error-base;
  font-size: rem(16px);
  font-weight: 500;
}
.extras {
  &__title {
    font-size: rem(10px);
    line-height: rem(12px);
    color: $neutral-darkgrey;
  }
  ul {
    margin-top: rem(8px);
    li {
      a {
        display: block;
        line-height: rem(56px);
      }
    }
  }
}
</style>
