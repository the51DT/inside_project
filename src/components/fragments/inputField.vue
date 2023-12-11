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

<style lang="scss">
@use '../../assets/scss/abstract/' as *;

.inputField {
  width: rem(328px);
  display: block;
  position: relative;
  &__input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: none;
    padding: rem(16px);
    border: solid rem(1px) $neutral-basegrey;
    border-radius: rem(8px);
    font-size: rem(16px);
    color: $neutral-dark;
    width: 100%;
    &::placeholder {
      color: $neutral-basegrey;
    }
    &:focus {
      box-shadow: 0 0 0 rem(1px) $primary-base inset;
      border: solid rem(1px) $primary-base;
    }
    &--warn {
      &:not(:placeholder-shown) {
        box-shadow: 0 0 0 rem(1px) $error-base inset;
        border: solid rem(1px) $error-base;
      }
      &:focus {
        box-shadow: 0 0 0 rem(1px) $error-base inset;
        border: solid rem(1px) $error-base;
      }
    }
    &[type="password"] {
      padding-right: rem(50px);
    }
    &[readonly]:focus {
      box-shadow: none;
    }
  }
  select {
    padding-right: rem(50px);
    background-image: url(../../assets/icon/select_arrow.svg);
    background-repeat: no-repeat;
    background-position: 95% 50%;
    &[readonly]:focus {
      box-shadow: none;
    }
  }
  &__label {
    font-size: rem(16px);
    font-weight: 500;
    margin-bottom: rem(12px);
  }
  &__caption {
    font-size: rem(12px);
    color: $neutral-basegrey;
    margin-top: rem(12px);
  }
  &__button {
    position: absolute;
    top: 50%;
    right: rem(0px);
    background: url(../../assets/icon/eye.svg) no-repeat;
    width: rem(24px);
    height: rem(24px);
    border: none;
    transform: translate(-50%, -50%);
    cursor: pointer;
    &[disabled]{
      filter: opacity(25%);
    }
  }
  &--disabled {
    position: relative;
    width: rem(328px);
    display: block;
    color: $neutral-basegrey;
    .inputField__input {
      border: solid rem(1px) $neutral-lightgrey;
      background: $neutral-lightgrey;
      color: $neutral-basegrey;
    }
  }
}
</style>
