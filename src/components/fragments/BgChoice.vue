<!-- eslint-disable space-before-function-paren -->
<template>
  <ul class="bg--item">
    <li :key="list.color" v-for="list in bglist">
      <button :class="list.color" @click="choiceBtn($event)">
        <span>{{ list.color }}</span>
      </button>
    </li>
  </ul>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      bglist: [
        { color: 'neutral-white' },
        { color: 'error-light' },
        { color: 'primary-light' },
        { color: 'success-light' },
        { color: 'warning-light' },
        { color: 'secondary-light' },
        { color: 'neutral-lightgrey' }
      ]
    }
  },
  methods: {
    choiceBtn(event) {
      // console.log(
      //   event.target.closest('.bg--item').querySelectorAll('.active').length
      // )
      if (!event.target.classList.contains('active')) {
        if (
          event.target.closest('.bg--item').querySelectorAll('.active').length >
          0
        ) {
          event.target
            .closest('.bg--item')
            .querySelectorAll('.active')
            .forEach((element) => {
              element.classList.remove('active')
            })
        }
        event.target.classList.add('active')
      }
    }
  }
}
</script>

<style lang="scss">
.bg--item {
  display: flex;
  justify-content: center;
  gap: rem(16px);
  li {
    button {
      width: rem(32px);
      height: rem(32px);
      border: none;
      border-radius: 50%;
      position: relative;
      cursor: pointer;
      &.active {
        &::before {
          content: '';
          display: block;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translateX(-50%) translateY(-50%);
          width: rem(28px);
          height: rem(28px);
          border-radius: 50%;
          border: rem(2px) solid $neutral-white;
        }
      }
      &.neutral-white {
        background-color: $neutral-white;
        border: rem(1px) solid $neutral-basegrey;
        &.active {
          border: rem(2px) solid $neutral-basegrey;
          &::before {
            width: rem(22px);
            height: rem(22px);
          }
        }
      }
      &.error-light {
        background-color: $error-light;
        &.active {
          border: rem(2px) solid $error-dark;
        }
      }
      &.primary-light {
        background-color: $primary-light;
        &.active {
          border: rem(2px) solid $primary-dark;
        }
      }
      &.success-light {
        background-color: $success-light;
        &.active {
          border: rem(2px) solid $success-dark;
        }
      }
      &.warning-light {
        background-color: $warning-light;
        &.active {
          border: rem(2px) solid $warning-dark;
        }
      }
      &.secondary-light {
        background-color: $secondary-light;
        &.active {
          border: rem(2px) solid $secondary-dark;
        }
      }
      &.neutral-lightgrey {
        background-color: $neutral-lightgrey;
        &.active {
          border: rem(2px) solid $neutral-darkgrey;
        }
      }
      span {
        @include ally-hidden;
      }
    }
  }
}
</style>
