<template>
  <div
    :class="
      readonly === false ? 'inputField' : 'inputField inputField--disabled'
    "
  >
    <div class="inputField__wrap">
      <!-- 텍스트에리어 (제목 혹은 설명으로 사용되는 경우) -->
      <draggable v-model="items" :element="'div'">
        <p
          v-if="type === 'textareaTitle' || type === 'textareaDes'"
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
      </draggable>
      <!-- 체크박스 텍스트에리어 -->
      <p
        v-if="type === 'checkbox'"
        :class="[
          checked
            ? 'inputField__text inputField__text--side checked'
            : 'inputField__text inputField__text--side'
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
          type === 'checkbox' && checked ? 'on' : ''
        ]"
      >
        <span>{{ chooseFileLabel }}</span>
      </label>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  components: {
    draggable
  },
  props: {
    type: {
      type: String,
      default: 'text'
    },
    id: String,
    name: String,
    placeholder: String,
    defaultText: String,
    color: String,
    readonly: Boolean,
    checked: Boolean,
    fontCustom: String,
    options: {
      type: Array,
      default: () => {
        return ['']
      }
    }
  },
  methods: {
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
    }
  },
  watch: {
    items: function () {
      this.$emit('update:items', this.items)
    }
  }
}
</script>

<style lang="scss"></style>
