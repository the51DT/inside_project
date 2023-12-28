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

// buyingCheckbox 배열에 새로운 객체를 추가
const addBuyingCheckbox = () => {
  buyingCheckbox.value.push({ sub: [] })
}

// buyingCheckbox의 특정 인덱스에 서브 배열을 추가
const addBuyingCheckboxSub = (index) => {
  buyingCheckbox.value[index].sub.push({ sub: [] })
}

// Backspace 키를 눌렀을 때, 특정 조건에 따라 요소를 삭제
const deleteInput = (event) => {
  const input = event.target
  const target = input.closest('.inputField')

  // 입력 필드의 내용이 비어있을 때
  if (input.innerHTML < 1) {
    // 키보드 이벤트 리스너 등록
    input.addEventListener('keydown', (e) => {
      // Backspace 키를 눌렀을 때
      if (e.key === 'Backspace') {
        // 만약 해당 inputField의 부모(create-box--buying-chbox) & inputField의 부모(sub-chkbox) 없는 경우 (서브 뎁스가 아닌 경우)
        if (
          target.closest('.create-box--buying-chbox') &&
          !target.closest('.sub-chbox')
        ) {
          // 만약 해당 inputField의 부모(create-box--buying-chbox)에 .subbox .inputField가 없는 경우 (Add Sub가 추가 안된 경우)
          if (
            target
              .closest('.create-box--buying-chbox')
              .querySelector('.sub-chbox .inputField') === null
          ) {
            // 해당 체크박스를 포함하는 그룹을 제거
            target.closest('.create-box--buying-chbox').remove()
          }
        } else {
          // 일반적인 경우에는 해당 요소를 제거
          target.remove()
        }
      }
    })
  }
}

// 전체 체크박스를 클릭했을 때의 동작 정의
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
      // 전체 체크박스 선택 시 하위 체크박스들을 읽기 전용으로 만들기
      checkbox.checked = true
      checkbox.readOnly = true
    })
    chkedInputLabelEach.forEach((checkbox) => {
      // 체크박스 레이블에 'on' 클래스를 추가하여 스타일을 변경
      checkbox.classList.add('on')
    })
    chkedInputTxtEach.forEach((checkbox, index) => {
      // 텍스트를 편집 불가능 상태로 변경하고 'checked' 클래스를 추가
      checkbox.setAttribute('contenteditable', 'false')
      checkbox.classList.add('checked')
      if (checkbox.innerText === '') {
        // 텍스트가 비어 있는 경우 해당 인덱스에 추가
        emptyArray.push(index)
      }
    })
    // 빈 텍스트가 있는 경우 해당 체크박스를 해제하고 편집 가능으로 변경
    emptyArray.forEach((empty) => {
      chkedInputClassEach[empty].checked = false
      chkedInputClassEach[empty].readOnly = false
      chkedInputLabelEach[empty].classList.remove('on')
      chkedInputTxtEach[empty].setAttribute('contenteditable', 'true')
      chkedInputTxtEach[empty].classList.remove('checked')
    })
  } else {
    // 전체 체크가 해제된 경우 하위 체크박스들을 초기화하고 편집 가능으로 변경
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
