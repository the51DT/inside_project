<template>
  <div class="color-bg">
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
              @keyup.delete="deleteInput($event)"
              @change="chkedInput"
            />
            <div class="sub-chbox" :id="`chk-${index}`">
              <inputField
                v-for="(subItem, subindex) in buyingCheckbox[index].sub"
                :key="subindex"
                type="checkbox"
                :id="`buying-checkbox-sub--${index}-${subindex}`"
                placeholder="Write your notes here..."
                @keyup.delete="deleteInput($event)"
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

const addBuyingCheckbox = () => {
  buyingCheckbox.value.push({ sub: [] })
}

const addBuyingCheckboxSub = (index) => {
  buyingCheckbox.value[index].sub.push({ sub: [] })
}

const deleteInput = (event) => {
  const input = event.target
  const target = input.closest('.inputField')
  if (input.innerHTML < 1) {
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Backspace') {
        if (
          target.closest('.create-box--buying-chbox') &&
          !target.closest('.sub-chbox')
        ) {
          if (
            target
              .closest('.create-box--buying-chbox')
              .querySelector('.sub-chbox .inputField') === null
          ) {
            target.closest('.create-box--buying-chbox').remove()
          }
        } else {
          target.remove()
        }
      }
    })
  }
}
// 전체 체크선
const chkedInput = (event) => {
  const chkedInput = event.target
  const findId = chkedInput.getAttribute('id')
  const findIndex = parseInt(findId.split('buying-checkbox-')[1])
  // findIndex에 해당하는 sub
  const chkedInputParent = chkedInput.parentNode
  const chkedInputParent2 = chkedInputParent.parentNode
  const chkedInputParent3 = chkedInputParent2.parentNode
  const chkedInputId = chkedInputParent3
    .querySelector('.sub-chbox')
    .getAttribute('id')
  const chkedInputIdFindIndex = parseInt(chkedInputId.split('chk-')[1])
  const chkedInputClass = chkedInputParent3.querySelector('.sub-chbox')
  const chkedInputClassEach = chkedInputClass.querySelectorAll(
    '.inputField__input__checkbox'
  )
  const chkedInputLabelEach = chkedInputClass.querySelectorAll(
    '.inputField__input__checkbox--label'
  )
  const chkedInputTxtEach = chkedInputClass.querySelectorAll(
    '.inputField__text.inputField__text--side'
  )
  // 전체 index = 서브 index & 현재 index에 체크가 되어있는 경우
  if (findIndex === chkedInputIdFindIndex && chkedInput.checked) {
    const emptyArray = []
    chkedInputClassEach.forEach((checkbox) => {
      checkbox.checked = true
      checkbox.readOnly = true
    })
    chkedInputLabelEach.forEach((checkbox) => {
      checkbox.classList.add('on')
    })
    chkedInputTxtEach.forEach((checkbox, index) => {
      checkbox.setAttribute('contenteditable', 'false')
      checkbox.classList.add('checked')
      if (checkbox.innerText === '') {
        emptyArray.push(index)
      }
    })
    emptyArray.forEach((empty) => {
      chkedInputClassEach[empty].checked = false
      chkedInputClassEach[empty].readOnly = false
      chkedInputLabelEach[empty].classList.remove('on')
      chkedInputTxtEach[empty].setAttribute('contenteditable', 'true')
      chkedInputTxtEach[empty].classList.remove('checked')
    })
  } else {
    chkedInputClassEach.forEach((checkbox) => {
      checkbox.checked = false
      checkbox.readOnly = false
    })
    chkedInputLabelEach.forEach((checkbox) => {
      checkbox.classList.remove('on')
    })
    chkedInputTxtEach.forEach((checkbox) => {
      checkbox.setAttribute('contenteditable', 'true')
      checkbox.classList.remove('checked')
    })
  }
}
</script>
<style lang="scss">
#app {
  > div {
    &.color-bg {
      height: auto;
      min-height: 100%;
    }
  }
}
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
