<template>
  <label
    :for="id"
    :class="disabled === false ? 'inputField' : 'inputField--disabled'"
  >
    <p v-if="label" class="inputField__label">{{ label }}</p>
    <select
      v-if="type === 'select'"
      :class="
        warn === false
          ? 'inputField__input'
          : 'inputField__input inputField__input--warn'
      "
      :id="id"
      :name="name"
      :readonly="disabled"
    >
      <option disabled selected hidden>{{ placeholder }}</option>
      <option :key="i" :value="options.option" v-for="(options, i) in options">
        {{ options.option }}
      </option>
    </select>
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
      :readonly="disabled"
    />
    <button v-if="type === 'password'" class="inputField__button" @click="passworView" :disabled=disabled></button>
    <p v-if="caption" class="inputField__caption">{{ caption }}</p>
  </label>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'text'
    },
    label: {
      type: String
    },
    caption: {
      type: String
    },
    id: {
      type: String,
      default: 'id'
    },
    name: {
      type: String,
      default: 'name'
    },
    placeholder: {
      type: String,
      default: 'Placeholder'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    warn: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      options: [{ option: 'r' }, { option: 'i' }, { option: 'd' }]
    }
  },
  methods: {
    passworView: function (el) {
      const target = el.currentTarget.previousSibling
      target.classList.toggle('on')
      if (target.classList.contains('on')) {
        target.setAttribute('type', 'text')
        el.currentTarget.style.filter = 'opacity(25%)'
      } else {
        target.setAttribute('type', 'password')
        el.currentTarget.style.filter = 'opacity(100%)'
      }
    }
  }
}
</script>

<style lang="scss"></style>
