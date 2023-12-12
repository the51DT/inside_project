<template>
  <div :class="readonly === false ? 'inputField' : 'inputField inputField--disabled'">
    <!-- 타이틀 -->
    <p v-if="title" class="inputField__title">{{ title }}</p>
    <label :for="id" :class="type === 'file' ? 'inputField__file--label' : ''"></label>
    <!-- 셀렉트 -->
    <select v-if="type === 'select'" :class=" warn === false ? 'inputField__input' : 'inputField__input inputField__input--warn'" :id="id" :name="name" :readonly="readonly">
      <option disabled selected hidden>{{ placeholder }}</option>
      <option :key="i" v-for="(options, i) in options" :value="options">{{ options }}</option>
    </select>
    <!-- 텍스트에리어 -->
    <textarea v-else-if="type === 'textarea'" :type="type" class="inputField__text" :id="id" :name="name" :placeholder="placeholder" @input="textareaHegiht" rows="1"></textarea>
    <!-- 체크박스 -->
    <input v-else-if="type === 'checkbox'" :type="type" :class="warn === false ? 'inputField__input' : 'inputField__input inputField__input--warn'"
      :id="id"
      :name="name"
      :placeholder="placeholder"
      :readonly="readonly"
      :checked="checked"
      @change="checkedText">
    <!-- 파일 -->
    <input v-else-if="type === 'file'" :type="type" class="inputField__file"
      :id="id"
      :name="name"/>
    <!-- 그외 -->
    <input v-else :type="type" :class="warn === false ? 'inputField__input' : 'inputField__input inputField__input--warn'"
      :id="id"
      :name="name"
      :placeholder="placeholder"
      :readonly="readonly"
      :checked="checked"/>
    <!-- 패스워드 눈 버튼 -->
    <button v-if="type === 'password'" class="inputField__button" @click="passwordView(event)" :readonly=readonly></button>
    <!-- 체크박스 텍스트에리어 -->
    <textarea v-if="type === 'checkbox'" :class="checked ? 'inputField__text inputField__text--side checked' : 'inputField__text inputField__text--side'" :id =" id + '__text'" :name="name" :placeholder="placeholder" @input="textareaHegiht" rows="1"></textarea>
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
    options: {
      type: Array,
      default: () => {
        return ['r', 'd']
      }
    }
  },
  methods: {
    // 패스워드 눈 버튼
    passwordView: ($event) => {
      console.log(this, $event)
      // const target = el.currentTarget.previousElementSibling
      // if (this.readonly === false) {
      //   target.classList.toggle('on')
      //   if (target.classList.contains('on')) {
      //     target.setAttribute('type', 'text')
      //     el.currentTarget.style.filter = 'opacity(25%)'
      //   } else {
      //     target.setAttribute('type', 'password')
      //     el.currentTarget.style.filter = 'opacity(100%)'
      //   }
      // }
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
      if (target.checked === true && target.nextElementSibling.value.length !== 0) {
        target.nextElementSibling.classList.add('checked')
      } else {
        target.nextElementSibling.classList.remove('checked')
      }
    }
  }
}
</script>

<style lang="scss"></style>
