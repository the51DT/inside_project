<template>
  <div class="color-bg">
    <!-- sub Notes 리스트 -->
    <template v-if="listPage">
      <div class="nav-bar__fixed">
        <NavBar back="Back" rightBtn="tasks" />
      </div>
      <div class="create__wrap">
        <!-- ACTIVE SUB NOTES -->
        <div class="create-box--active">
          <p>ACTIVE SUB NOTES</p>
          <ul class="sub-list">
            <li
              class="sub-list-each"
              v-for="(list, index) in activeList"
              :key="index"
              :class="list.bgcolor"
            >
              <inputField
                type="checkbox"
                :id="`active-${index}-list-title`"
                round
                :defaultText="list.title"
                placeholder="Write your notes here..."
                @change="chkedList"
                :listType="true"
              />
              <p :class="isChked === 'checked'" class="each-des">
                {{ list.des }}
              </p>
            </li>
          </ul>
        </div>
        <!-- COMPLETED SUB NOTES -->
        <div class="create-box--active">
          <p>COMPLETED SUB NOTES</p>
          <ul class="sub-list">
            <li
              class="sub-list-each"
              v-for="(list, index) in completedList"
              :key="index"
              :class="list.bgcolor"
            >
              <inputField
                type="checkbox"
                :id="`completed-${index}-list-title`"
                round
                :defaultText="list.title"
                placeholder="Write your notes here..."
                @change="chkedList"
                :listType="true"
              />
              <p :class="isChked === 'checked'" class="each-des">
                {{ list.des }}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </template>
    <!-- // sub Notes 리스트 -->
  </div>
</template>

<script setup>
import { ref } from 'vue'
// import { draggable } from 'vuedraggable'

const listPage = ref(true)
const activeList = [
  {
    title: 'important task',
    des: 'Create a mobile app UI Kit that provide a basic notes functionality but with some improvement',
    bgcolor: 'secondary-light'
  },
  {
    title: 'important task',
    des: 'Create a mobile app UI Kit that provide a basic notes functionality but with some improvement',
    bgcolor: 'primary-base'
  }
]
const completedList = [
  {
    title: 'task1',
    des: 'Create a mobile app UI Kit that provide a basic notes functionality but with some improvement',
    bgcolor: 'warning-light'
  },
  {
    title: 'task2',
    des: 'Create a mobile app UI Kit that provide a basic notes functionality but with some improvement',
    bgcolor: 'success-light'
  },
  {
    title: 'task3',
    des: 'Create a mobile app UI Kit that provide a basic notes functionality but with some improvement',
    bgcolor: 'error-light'
  }
]
const chkedList = (event) => {
  const chkedTitleInput = event.target
  console.log(chkedTitleInput)
  const chkedTitleParent = chkedTitleInput.parentNode
  const chkedchkedTitleParent2 = chkedTitleParent.parentNode
  const chkedchkedTitleParent3 = chkedchkedTitleParent2.parentNode
  const TitlePtag = chkedchkedTitleParent3.querySelector(
    '.inputField__text.inputField__text--side'
  )
  const chkedTitlePtag = chkedchkedTitleParent3.querySelector(
    '.inputField__text.inputField__text--side.checked'
  )
  console.log(TitlePtag)
  console.log(chkedTitlePtag)
  const chkedDes = chkedchkedTitleParent3.querySelector('.each-des')
  if (TitlePtag === chkedTitlePtag) {
    chkedDes.classList.add('checked')
  } else {
    chkedDes.classList.remove('checked')
  }
}
</script>
<style lang="scss">
#app {
  > div {
    &.color-bg {
      height: auto;
    }
  }
}
.create__wrap {
  padding: rem(78px) rem(16px) rem(60px);
  .create-box--active {
    > p {
      font-size: rem(10px);
      color: $neutral-darkgrey;
      line-height: normal;
    }
    .sub-list {
      margin-top: rem(24px);
      li {
        & + li {
          margin-top: rem(16px);
        }
      }
      &-each {
        border-radius: rem(8px);
        .inputField {
          padding: rem(12px) rem(12px) 0;
        }
        .each-des {
          padding: rem(8px) rem(12px) rem(12px);
          margin-top: rem(8px);
          border-top: rem(1px) solid;
          font-size: rem(14px);
          line-height: rem(19.6px);
        }
        &.secondary-light {
          background-color: $secondary-light;
          .inputField__text,
          .each-des {
            color: $secondary-dark;
            border-color: $secondary-dark;
          }
        }
        &.primary-base {
          background-color: $primary-light;
          .inputField__text,
          .each-des {
            color: $primary-dark;
            border-color: $primary-dark;
          }
        }
        &.warning-light {
          background-color: $warning-light;
          .inputField__text,
          .each-des {
            color: $warning-dark;
            border-color: $warning-dark;
          }
        }
        &.success-light {
          background-color: $success-light;
          .inputField__text,
          .each-des {
            color: $success-dark;
            border-color: $success-dark;
          }
        }
        &.error-light {
          background-color: $error-light;
          .inputField__text,
          .each-des {
            color: $error-dark;
            border-color: $error-dark;
          }
        }
      }
    }
    & + .create-box--active {
      margin-top: 24px;
      padding-top: 24px;
      border-top: rem(1px) solid $neutral-basegrey;
    }
  }
  .each-des {
    &.checked {
      text-decoration: line-through;
    }
  }
}
</style>
