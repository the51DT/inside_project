<template>
  <div>
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
          <template v-for="(item, index) in items">
            <inputField
              v-if="item.type === 'textarea'"
              :key="index"
              type="textareaDes"
              :id="`textareaDes_default-${index}`"
              placeholder="Write your notes here..."
              fontCustom="400"
            />
            <inputField
              v-if="item.type === 'checkbox'"
              :key="index"
              type="checkbox"
              :id="`list-checkbox-${index}`"
              placeholder="Write your notes here..."
            />
          </template>
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
  </div>
</template>

<script setup>
import { ref } from 'vue'

const items = ref([])

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
      padding: rem(12px) rem(8px);
      .sub-chbox {
        margin-left: rem(34px);
        .inputField {
          margin-top: rem(24px);
          & + .inputField {
            margin-top: rem(16px);
          }
        }
      }
    }
    &-btn {
      margin-top: rem(24px);
      padding-top: rem(24px);
      button {
        display: flex;
        gap: 16px;
        margin-top: rem(24px);
      }
    }
  }
}
</style>
