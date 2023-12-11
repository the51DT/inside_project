<template>
  <div>
    <button @click="openBtn('success-modal')">open</button>
    <modal-center id="success-modal">
      <template v-slot:title>
        <h4>Modal Title</h4>
      </template>
      <template v-slot:body>
        <div class="popup--body__contnet">
          Write your detailed description for this modal here
        </div>
      </template>
      <template v-slot:footer>
        <button>Action</button><button @click="closeBtn($event)">Action</button>
      </template>
    </modal-center>
  </div>
</template>

<script>
/* eslint-disable */
import ModalCenter from '@/components/fragments/ModalCenter.vue'
export default {
  components: { ModalCenter },
  methods: {
    openBtn(id) {
      if (id !== '') {
        const popupId = document.getElementById(id)
        popupId.classList.add('active')
      }
    },
    closeBtn(event) {
      console.log(event)
    }
  }
}
</script>
<style lang="scss"></style>
