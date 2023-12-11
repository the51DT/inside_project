<template>
  <div>
    <title-input />
    <div class="guide__wrap">
      <!-- 1. 기본 : 배경색 -->
      <div class="guide-box">
        <ButtonCmp btnBg type="primary-base" size="large" />
        <ButtonCmp btnBg type="primary-dark" size="large" />
        <ButtonCmp btnBg type="neutral-basegrey" size="large" />
      </div>
      <!-- 1-1. 기본 : 배경색 + 왼쪽 아이콘-->
      <div class="guide-box">
        <ButtonCmp
          btnBg
          type="primary-base"
          size="large"
          btnLink
          btnLinkRight
        />
        <ButtonCmp
          btnBg
          type="primary-dark"
          size="large"
          btnLink
          btnLinkRight
        />
        <ButtonCmp
          btnBg
          type="neutral-basegrey"
          size="large"
          btnLink
          btnLinkRight
        />
      </div>
      <!-- 1-2. 기본 : 배경색 + 오른쪽 아이콘-->
      <div class="guide-box">
        <ButtonCmp btnBg type="primary-base" size="large" btnLink />
        <ButtonCmp btnBg type="primary-dark" size="large" btnLink />
        <ButtonCmp btnBg type="neutral-basegrey" size="large" btnLink />
      </div>
      <!-- 1-3. 기본 : 배경색 + 중간 아이콘-->
      <div class="guide-box">
        <ButtonCmp btnBg type="primary-base" size="large" btnLink center />
        <ButtonCmp btnBg type="primary-dark" size="large" btnLink center />
        <ButtonCmp btnBg type="neutral-basegrey" size="large" btnLink center />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import TitleInput from '@/components/fragments/TitleInput.vue'
import ButtonCmp from '@/components/fragments/ButtonCmp.vue'

export default {
  components: { TitleInput, ButtonCmp }
}
</script>
<style lang="scss"></style>
