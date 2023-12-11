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
        <button>Action</button><button @click="closeBtn($event)">Close</button>
      </template>
    </modal-center>
  </div>
</template>

<script>
/* eslint-disable */
export default {}
</script>
<style lang="scss"></style>
