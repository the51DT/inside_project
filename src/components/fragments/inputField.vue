<template>
  <div
    :class="
      readonly === false ? 'inputField' : 'inputField inputField--disabled'
    "
  >
    <!-- 타이틀 -->
    <p v-if="title" class="inputField__title">{{ title }}</p>
    <div class="inputField__wrap">
      <!-- 셀렉트 -->
      <select
        v-if="type === 'select'"
        :class="
          warn === false
            ? 'inputField__input'
            : 'inputField__input inputField__input--warn'
        "
        :id="id"
        :name="name"
        :readonly="readonly"
      >
        <option disabled selected hidden>{{ placeholder }}</option>
        <option :key="i" v-for="(options, i) in options" :value="options">
          {{ options }}
        </option>
      </select>
      <!-- 텍스트에리어 -->
      <p
        v-else-if="type === 'textarea'"
        :type="type"
        class="inputField__text"
        :id="id"
        :name="name"
        :placeholder="placeholder"
        :value="defaultText"
        contenteditable="true"
      ></p>
      <!-- 텍스트에리어 (제목 혹은 설명으로 사용되는 경우) -->
      <p
        v-else-if="type === 'textareaTitle' || type === 'textareaDes'"
        :type="type"
        class="inputField__text"
        :class="[
          type === 'textareaTitle' ? 'textarea_tit' : 'textarea_des',
          type === 'textareaTitle' && fontCustom === '32'
            ? 'textarea_tit--32'
            : '',
          type === 'textareaTitle' && fontCustom === '16'
            ? 'textarea_tit--16'
            : '',
          type === 'textareaDes' && fontCustom === '400'
            ? 'textarea_des--400'
            : '',
          type === 'textareaDes' && fontCustom === '500'
            ? 'textarea_des--500'
            : ''
        ]"
        :id="id"
        :name="name"
        :placeholder="placeholder"
        contenteditable="true"
      ></p>
      <!-- 체크박스 -->
      <input
        v-else-if="type === 'checkbox'"
        :type="type"
        :class="[
          size === 'small'
            ? 'inputField__input inputField__input__checkbox inputField__input__checkbox--small'
            : 'inputField__input inputField__input__checkbox',
          round ? 'inputField__input__checkbox--round' : '',
          color === 'highlight' ? 'inputField__input__checkbox--highlight' : '',
          sub ? 'inputField__input--sub' : ''
        ]"
        :id="id"
        :name="name"
        :readonly="readonly"
        :checked="checked"
        @change="checkedText"
      />
      <!-- 토글 -->
      <input
        v-else-if="type === 'toggle'"
        type="checkbox"
        class="inputField__toggle"
        :id="id"
        :name="name"
        :readonly="readonly"
        :checked="checked"
      />
      <!-- 파일 -->
      <input
        v-else-if="type === 'file'"
        :type="type"
        class="inputField__file"
        :id="id"
        :name="name"
      />
      <!-- 서치 -->
      <input
        v-else-if="type === 'search'"
        :type="type"
        class="inputField__search"
        :id="id"
        :name="name"
        :placeholder="placeholder"
        :value="defaultText"
        @input="$emit('update:defaultText', $event.target.value)"
        @keyup.enter="searchProgress"
      />
      <!-- 그외 -->
      <input
        v-else
        :type="type"
        :class="
          warn === false
            ? 'inputField__input'
            : 'inputField__input inputField__input--warn'
        "
        :id="id"
        :name="name"
        :placeholder="placeholder"
        :readonly="readonly"
        :checked="checked"
        :value="defaultText"
        @input="$emit('update:defaultText', $event.target.value)"
      />
      <!-- 패스워드 눈 버튼 -->
      <button
        v-if="type === 'password'"
        class="inputField__button"
        :readonly="readonly"
        @click="passwordView"
      ></button>
      <!-- 체크박스 텍스트에리어 -->
      <p
        v-if="type === 'checkbox'"
        :class="[
          checked
            ? 'inputField__text inputField__text--side checked'
            : 'inputField__text inputField__text--side',
          sub ? 'inputField__text--side--sub' : '',
          size === 'small' ? 'inputField__text--side--small' : ''
        ]"
        :id="id + '__text'"
        :name="name"
        :placeholder="placeholder"
        :readonly="checked"
        :contenteditable="readonly ? false : true"
      >
        {{ defaultText }}
      </p>
      <!-- 라벨 -->
      <label
        :for="id"
        :class="[
          type === 'checkbox' ? 'inputField__input__checkbox--label' : '',
          type === 'checkbox' && checked ? 'on' : '',
          type === 'checkbox' && size === 'small'
            ? 'inputField__input__checkbox--label--small'
            : '',
          type === 'file' ? 'inputField__file--label' : '',
          type === 'file' && chooseFileLabel
            ? 'inputField__file--label-choose'
            : '',
          type === 'file' && chooseFileLabel && icon
            ? 'inputField__file--label-choose icon'
            : '',
          type === 'toggle' ? 'inputField__toggle--label' : '',
          type === 'toggle' && color === 'highlight'
            ? 'inputField__toggle--label inputField__toggle--label--highlight'
            : ''
        ]"
      >
        <span>{{ chooseFileLabel }}</span>
        <span
          v-if="type === 'toggle'"
          class="inputField__toggle--label--circle"
        ></span>
      </label>
    </div>
    <!-- 캡션 -->
    <p
      v-if="caption"
      :class="
        warn
          ? 'inputField__caption inputField__caption--warn'
          : 'inputField__caption'
      "
    >
      {{ caption }}
    </p>
    <!-- 드래그 가능 -->
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
    round: Boolean,
    readonly: Boolean,
    warn: Boolean,
    checked: Boolean,
    sub: Boolean,
    searchValue: String,
    chooseFileLabel: String,
    icon: Boolean,
    fontCustom: String,
    options: {
      type: Array,
      default: () => {
        return ['']
      }
    }
  },
  emits: ['update:defaultText', 'update:searchValue'],
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
    // textareaHegiht: function (el) {
    //   const target = el.currentTarget
    //   target.style.height = 'auto'
    //   target.style.height = target.scrollHeight + 'px'
    // },
    // 체크박스 체크하면 텍스트 줄치기
    checkedText: function (el) {
      const target = el.currentTarget
      const input = target.nextElementSibling
      const label = input.nextElementSibling
      if (input.innerText === 0) {
        target.checked = false
      }
      if (target.checked === true && input.innerText !== 0) {
        input.classList.add('checked')
      } else {
        input.classList.remove('checked')
      }
      if (target.checked === true) {
        label.classList.add('on')
        input.readOnly = true
        input.setAttribute('contenteditable', 'false')
      } else {
        label.classList.remove('on')
        input.readOnly = false
        input.setAttribute('contenteditable', 'true')
      }
      if (target.readOnly === true) {
        target.checked = true
        input.readOnly = true
        input.classList.add('checked')
        input.setAttribute('contenteditable', 'false')
      }
    },
    searchProgress: function (el) {
      const searchValue = el.target.value
      this.$emit('update:searchValue', searchValue)
    }
  }
}
</script>

<style lang="scss"></style>
