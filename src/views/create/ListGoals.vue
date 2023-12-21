<template>
  <div>
    <div class="nav-bar__fixed">
      <NavBar back="Back" />
    </div>
    <div class="create__wrap">
      <div class="create-box--buying">
        <div class="create-box--buying-tit">
          <inputField
            type="textareaTitle"
            id="buying-title"
            placeholder="Monthly Needs"
            fontCustom="32"
          />
        </div>
        <div v-if="buyingCheckbox.length >= 1">
          <div
            class="create-box--buying-chbox"
            v-for="(id, index) in buyingCheckbox"
            :key="index"
          >
            <inputField
              type="checkbox"
              :id="`buying-checkbox-${index}`"
              placeholder="Write your notes here..."
            />
            <div class="sub-chbox">
              <inputField
                v-for="(subItem, subindex) in buyingCheckbox[index].sub"
                :key="subindex"
                type="checkbox"
                :id="`buying-checkbox-sub-${subindex}`"
                placeholder="Write your notes here..."
              />
              <ButtonCmp
                plusBtn="base"
                btnSize="small"
                iconPositionCenter="center"
                btnTxt="Add Sub"
                @click="addBuyingCheckboxSub(index)"
              />
            </div>
          </div>
        </div>
        <div class="create-box--buying-btn">
          <ButtonCmp
            plusBtn="base"
            btnSize="small"
            iconPositionCenter="center"
            btnTxt="Add checkbox"
            @click="addBuyingCheckbox()"
          />
        </div>
      </div>
      <div class="create-box--buying__reminder">
        <div class="create-box--buying__reminder-date">
          Reminder set on 15/07/2021, 18:30
        </div>
        <div class="create-box--buying__reminder-tag">
          <tagCmp text="Important" />
          <tagCmp text="Top Priority" />
          <tagCmp text="Should be Done This Week" />
          <tagCmp text="Important" />
        </div>
      </div>
    </div>
    <TaskBar />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const buyingCheckbox = ref([])
// const buyingCheckboxSub = ref([])

const addBuyingCheckbox = () => {
  buyingCheckbox.value.push({ id: '', sub: [] })
}

const addBuyingCheckboxSub = (index) => {
  buyingCheckbox.value[index].sub.push({ id: '', sub: [] })
}
</script>
<style lang="scss">
.create__wrap {
  padding: rem(78px) rem(16px) rem(60px);
  .create-box--buying {
    &-tit {
      .inputField__text {
        padding: 0;
        font-size: rem(32px);
        font-weight: 700;
        line-height: rem(38.4px);
      }
    }
    &-chbox {
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
        .btn {
          margin-top: rem(24px);
        }
      }
    }
    &-btn {
      display: flex;
      gap: 16px;
      margin-top: rem(24px);
    }
    &__reminder {
      &-date {
        padding-top: rem(20px);
        margin-top: rem(20px);
        font-size: rem(12px);
        font-weight: 400;
        line-height: normal;
        color: $neutral-darkgrey;
        border-top: 1px solid $neutral-lightgrey;
      }
      &-tag {
        margin-top: rem(20px);
        display: flex;
        flex-wrap: wrap;
        gap: 20px 12px;
      }
    }
  }
}
</style>
