<template>
  <div>
    <!-- // 기본 화면 (task - sub Notes 입력 하시겠습니까?) -->
    <template v-if="writePage">
      <!-- sub Notes 입력할 화면 -->
      <div class="nav-bar__fixed">
        <NavBar back="Back" />
      </div>
      <div class="create__wrap">
        <div class="create-box--task">
          <div class="create-box--task-tit">
            <inputField
              type="textareaTitle"
              id="task-title"
              placeholder="Title Here"
              fontCustom="32"
            />
          </div>
          <div v-if="items.length >= 1" class="create-box--task-add">
            <!-- <draggable v-model="items"> -->
            <inputField
              v-for="(item, index) in items"
              :key="index"
              :type="item.type === 'textarea' ? 'textareaDes' : 'checkbox'"
              :id="
                item.type === 'textarea'
                  ? `textareaDes_default-${index}`
                  : `list-checkbox-${index}`
              "
              :placeholder="
                item.type === 'textarea'
                  ? 'Write your notes here...'
                  : 'Write your notes here...'
              "
              :fontCustom="item.type === 'textarea' ? '400' : ''"
            />
            <!-- </draggable> -->
          </div>
          <div class="create-box--task-btn">
            <p>ACTIONS</p>
            <ButtonCmp
              plusBtn="base"
              btnSize="small"
              iconPositionCenter="center"
              btnTxt="Add Free TextArea"
              @click="addItem('textarea')"
            />
            <ButtonCmp
              plusBtn="base"
              btnSize="small"
              iconPositionCenter="center"
              btnTxt="Add CheckList"
              @click="addItem('checkbox')"
            />
          </div>
        </div>
      </div>
      <TaskBar />
      <!-- // sub Notes 입력할 화면 -->
    </template>
    <!-- sub Notes 리스트 -->
    <!-- // sub Notes 리스트 -->
  </div>
</template>

<script setup>
import { ref } from 'vue'
// import { draggable } from 'vuedraggable'

const items = ref([])
const writePage = ref(true)
const addItem = (type) => {
  items.value.push({ type })
}
</script>
<style lang="scss">
.create__wrap {
  padding: rem(78px) rem(16px) rem(60px);
  .create-box--task {
    &-tit {
      .inputField__text {
        padding: 0;
        font-size: rem(32px);
        font-weight: 700;
        line-height: rem(38.4px);
      }
    }
    &-add {
      margin-top: rem(16px);
      padding: rem(12px) 0;
      .inputField {
        & + .inputField {
          margin-top: rem(24px);
        }
      }
    }
    &-btn {
      margin-top: rem(24px);
      padding-top: rem(24px);
      border-top: 1px solid $neutral-lightgrey;
      button {
        display: flex;
        gap: 16px;
        margin-top: rem(24px);
      }
    }
  }
  &.basic {
    position: relative;
    height: 100%;
    .basic-box {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      padding: 0 rem(16px);
    }
    .subnote-img {
      background: url('@/assets/images/onboarding/onboarding_img_3.png');
      background-repeat: no-repeat;
      background-size: cover;
      width: 100%;
      padding-top: 100%;
      display: block;
    }
    .basic_des {
      font-size: rem(40px);
      line-height: rem(50px);
      color: $neutral-basegrey;
      text-align: center;
      p {
        & + p {
          margin-top: rem(32px);
          color: $neutral-darkgrey;
        }
      }
    }
    button {
      margin-top: rem(32px);
    }
  }
}
</style>
