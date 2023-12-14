<template>
  <div :class="readonly === false ? 'inputField' : 'inputField inputField--disabled'">
    <!-- 타이틀 -->
    <p v-if="title" class="inputField__title">{{ title }}</p>
    <!-- 셀렉트 -->
    <select v-if=" type === 'select'" :class=" warn === false ? 'inputField__input' : 'inputField__input inputField__input--warn'" :id="id" :name="name" :readonly="readonly">
      <option disabled selected hidden>{{ placeholder }}</option>
      <option :key="i" v-for="(options, i) in options" :value="options">{{ options }}</option>
    </select>
    <!-- 텍스트에리어 -->
    <textarea v-else-if=" type === 'textarea'" :type="type" class="inputField__text" :id="id" :name="name" :placeholder="placeholder" @input="textareaHegiht" rows="1"></textarea>
    <!-- 체크박스 -->
    <input v-else-if=" type === 'checkbox'" :type="type"
      :class="[
        size === 'small' ? 'inputField__input inputField__input__checkbox inputField__input__checkbox--small' : 'inputField__input inputField__input__checkbox',
        round ? 'inputField__input__checkbox--round' : '',
        color === 'highlight' ? 'inputField__input__checkbox--highlight' : '',
        sub ? 'inputField__input--sub' : '']"
      :id="id"
      :name="name"
      :readonly="readonly"
      :checked="checked"
      @change="checkedText">
    <!-- 토글 -->
    <input v-else-if=" type === 'toggle'" type="checkbox"
      class="inputField__toggle"
      :id="id"
      :name="name"
      :readonly="readonly"
      :checked="checked">
    <!-- 파일 -->
    <input v-else-if=" type === 'file'" :type="type" class="inputField__file" :id="id" :name="name"/>
    <!-- 서치 -->
    <input v-else-if=" type === 'search'" :type="type" class="inputField__search" :id="id" :name="name" :placeholder="placeholder">
    <!-- 그외 -->
    <input v-else :type="type" :class="warn === false ? 'inputField__input' : 'inputField__input inputField__input--warn'"
      :id="id"
      :name="name"
      :placeholder="placeholder"
      :readonly="readonly"
      :checked="checked"/>
    <!-- 패스워드 눈 버튼 -->
    <button v-if="type === 'password'" class="inputField__button" :readonly=readonly @click="passwordView"></button>
    <!-- 체크박스 텍스트에리어 -->
    <textarea v-if="type === 'checkbox'" :class="checked ? 'inputField__text inputField__text--side checked' : 'inputField__text inputField__text--side'"
    :id =" id + '__text'"
    :name="name"
    :placeholder="placeholder"
    :value="defaultText"
    @input="textareaHegiht"
    rows="1"
    :readonly="checked"></textarea>
    <!-- 라벨 -->
    <label :for="id"
    :class="[
      type === 'file' ? 'inputField__file--label' : '',
      type === 'toggle' ? 'inputField__toggle--label' : '',
      type === 'toggle' && color === 'highlight' ? 'inputField__toggle--label inputField__toggle--label--highlight' : '']">
      <span v-if="type === 'toggle'" class="inputField__toggle--label--circle"></span>
    </label>
    <!-- 캡션 -->
    <p v-if="caption" class="inputField__caption">{{ caption }}</p>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'text'
    },
    title: String,
    caption: String,
    id: String,
    name: String,
    placeholder: String,
    defaultText: String,
    size: String,
    color: String,
    round: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    warn: {
      type: Boolean,
      default: false
    },
    checked: {
      type: Boolean,
      default: false
    },
    sub: {
      type: Boolean,
      default: false
    },
    options: {
      type: Array,
      default: () => {
        return ['r', 'd']
      }
    }
  },
  methods: {
    // 패스워드 눈 버튼
    passwordView: (el) => {
      const target = el.currentTarget.previousElementSibling
      if (target.readOnly !== true) {
        target.classList.toggle('on')
        if (target.classList.contains('on')) {
          target.setAttribute('type', 'text')
          el.currentTarget.style.filter = 'opacity(25%)'
        } else {
          target.setAttribute('type', 'password')
          el.currentTarget.style.filter = 'opacity(100%)'
        }
      }
    },
    // 텍스트에리어 높이 자동조절
    textareaHegiht: function (el) {
      const target = el.currentTarget
      target.style.height = 'auto'
      target.style.height = target.scrollHeight + 'px'
    },
    // 체크박스 체크하면 텍스트 줄치기
    checkedText: function (el) {
      const target = el.currentTarget
      const input = target.nextElementSibling
      if (input.value.length === 0) {
        target.checked = false
      }
      if (target.checked === true && input.value.length !== 0) {
        input.classList.add('checked')
      } else {
        input.classList.remove('checked')
      }
      if (target.checked === true) {
        input.readOnly = true
      } else {
        input.readOnly = false
      }
      if (target.readOnly === true) {
        target.checked = true
        input.readOnly = true
        input.classList.add('checked')
      }
    }
  }
}
</script>

<style lang="scss"></style>
