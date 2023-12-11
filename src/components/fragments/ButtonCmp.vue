<template>
  <button :class="btnOptions" class="btn">
    <div>
      <span class="btn-txt bg-btn__txt">{{ btnBgTxt }}</span>
      <i class="btn-link" v-if="btnLink">
        <img
          src="@/assets/images/icon/arrow-right.png"
          :class="[
            btnLinkRight ? 'btn-link__right' : '',
            !btnLinkRight && center ? 'center' : ''
          ]"
        />
        <span class="hidden">{{ btnBgTxt }} 바로가기</span>
      </i>
    </div>
  </button>
</template>

<script>
/* eslint-disable */
export default {
  props: {
    btnBg: {
      type: Boolean,
      default: false
    },
    btnBd: {
      type: Boolean,
      default: false
    },
    btnBgTxt: {
      type: String,
      default: 'Block + Primary'
    },
    btnLink: {
      type: Boolean,
      default: false
    },
    linkDefault: {
      type: Boolean,
      default: false
    },
    btnLinkRight: {
      type: Boolean,
      default: false
    },
    center: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    btnOptions() {
      return {
        'bg-btn': this.btnBg,
        'bd-btn': this.btnBd,
        'hover-btn': this.btnBg && this.btnBgHover,
        [this.type]: true,
        [this.size]: true
      }
    },
    btnBgHover() {
      return true
    }
  }
}
</script>

<style lang="scss"></style>
