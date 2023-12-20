<template>
  <div class="guide-txt__wrap">
    <h4>인풋 컴포넌트 : inputField</h4>
    <div class="guide-txt-box">
      <h5>1. type</h5>
      <p>select, textarea, checkbox, toggle, file, search</p>
      <p>
        * 그 외는 지정한 타입이 들어갑니다. ex - text, password / default = text
      </p>
    </div>
    <div class="guide-txt-box">
      <h5>2. warn</h5>
      <p>warning 타입으로 지정합니다. type:Boolean</p>
      <p>* text, password, select에서만 사용</p>
    </div>
    <div class="guide-txt-box">
      <h5>3. readonly</h5>
      <p>readonly 타입으로 지정합니다. type:Boolean</p>
    </div>
    <div class="guide-txt-box">
      <h5>4. title</h5>
      <p>제목이 들어갑니다. type:String</p>
    </div>
    <div class="guide-txt-box">
      <h5>5. caption</h5>
      <p>하단에 텍스트가 들어갑니다. type:String</p>
    </div>
    <div class="guide-txt-box">
      <h5>6. id</h5>
      <p>id 값을 설정합니다. type:String</p>
    </div>
    <div class="guide-txt-box">
      <h5>7. name</h5>
      <p>name 값을 설정합니다. type:String</p>
    </div>
    <div class="guide-txt-box">
      <h5>8. placeholder</h5>
      <p>placeholder를 설정합니다. type:String</p>
    </div>
    <div class="guide-txt-box">
      <h5>9. :options</h5>
      <p>select에 들어가는 값을 설정합니다. type:data[배열]</p>
      <p>* select에서만 사용</p>
    </div>
    <div class="guide-txt-box">
      <h5>10. sub</h5>
      <p>안쪽으로 들어간 checkbox를 만듭니다. type:Boolean</p>
      <p>* checkbox에서만 사용</p>
    </div>
    <div class="guide-txt-box">
      <h5>11. checked</h5>
      <p>체크된 상태로 만듭니다. type:Boolean</p>
      <p>* checkbox, toggle에서만 사용</p>
    </div>
    <div class="guide-txt-box">
      <h5>12. color</h5>
      <p>
        checkbox의 색을 정합니다. type:none(default 컬러), 'highlight'(진한
        컬러)
      </p>
      <p>* checkbox, toggle에서만 사용</p>
    </div>
    <div class="guide-txt-box">
      <h5>13. round</h5>
      <p>checkbox의 모양을 정합니다. type:Boolean</p>
      <p>* checkbox에서만 사용</p>
    </div>
    <div class="guide-txt-box">
      <h5>14. defaultText</h5>
      <p>checkbox에 기본적으로 들어가는 텍스트를 정합니다. type:String</p>
      <p>* checkbox에서만 사용</p>
    </div>
  </div>
  <div>
    <inputField
      type="text"
      title="input_default"
      caption="input_default"
      id="input_default"
      name="input_default"
      placeholder="input_default"
    ></inputField>
    <inputField
      type="text"
      title="input_warn"
      id="input_warn"
      name="input_warn"
      placeholder="input_warn"
      caption="input_warn"
      warn
    ></inputField>
    <inputField
      type="text"
      title="input_readonly"
      id="input_readonly"
      name="input_readonly"
      placeholder="input_readonly"
      readonly
    ></inputField>
    <inputField
      type="password"
      id="password_default"
      name="password_default"
      placeholder="********"
    ></inputField>
    <inputField
      type="password"
      id="password_warn"
      name="password_warn"
      placeholder="********"
      warn
    ></inputField>
    <inputField
      type="password"
      id="password_readonly"
      name="password_readonly"
      placeholder="********"
      readonly
    ></inputField>
    <inputField
      type="select"
      title="select_default"
      caption="select_default"
      id="select_default"
      name="select_default"
      placeholder="select_default"
      :options="options"
    ></inputField>
    <inputField
      type="select"
      title="select_warn"
      id="select_warn"
      name="select_warn"
      placeholder="select_warn"
      warn
    ></inputField>
    <inputField
      type="select"
      title="select_readonly"
      id="select_readonly"
      name="select_readonly"
      placeholder="select_readonly"
      readonly
    ></inputField>
    <inputField
      type="textarea"
      title="textarea_default"
      id="text_default"
      placeholder="Write your notes here..."
    ></inputField>
    <inputField
      type="checkbox"
      title="checkbox_default"
      id="checkbox_default"
      placeholder="Write your notes here..."
    ></inputField>
    <inputField
      type="checkbox"
      title="checkbox_default_sub"
      id="checkbox_default_sub"
      placeholder="Write your notes here..."
      sub
    ></inputField>
    <inputField
      type="checkbox"
      title="checkbox_checked"
      id="checkbox_checked"
      placeholder="Write your notes here..."
      defaultText="Checklist"
      checked
    ></inputField>
    <inputField
      type="checkbox"
      title="checkbox_highlight"
      id="checkbox_hilight"
      color="highlight"
      placeholder="Write your notes here..."
      defaultText="Checklist"
      checked
    ></inputField>
    <inputField
      type="checkbox"
      title="checkbox_readonly"
      id="checkbox_readonly"
      placeholder="Write your notes here..."
      defaultText="Checklist"
      checked
      readonly
    ></inputField>
    <inputField
      type="checkbox"
      title="checkbox_small_checked"
      id="checkbox_small_checked"
      size="small"
      placeholder="Write your notes here..."
      defaultText="Checklist"
      checked
    ></inputField>
    <inputField
      type="checkbox"
      title="checkbox_small_highlight"
      id="checkbox_small_highlight"
      size="small"
      color="highlight"
      placeholder="Write your notes here..."
      defaultText="Checklist"
      checked
    ></inputField>
    <inputField
      type="checkbox"
      title="checkbox_small_readonly"
      id="checkbox_small_readonly"
      size="small"
      placeholder="Write your notes here..."
      defaultText="Checklist"
      checked
      readonly
    ></inputField>
    <inputField
      type="checkbox"
      title="checkbox_round_checked"
      id="checkbox_round_checked"
      round
      placeholder="Write your notes here..."
      defaultText="Checklist"
      checked
    ></inputField>
    <inputField
      type="checkbox"
      title="checkbox_round_highlight"
      id="checkbox_round_highlight"
      round
      color="highlight"
      placeholder="Write your notes here..."
      defaultText="Checklist"
      checked
    ></inputField>
    <inputField
      type="checkbox"
      title="checkbox_round_readonly"
      id="checkbox_round_readonly"
      round
      placeholder="Write your notes here..."
      defaultText="Checklist"
      checked
      readonly
    ></inputField>
    <inputField
      type="checkbox"
      title="checkbox_small_round_checked"
      id="checkbox_small_round_checked"
      size="small"
      round
      placeholder="Write your notes here..."
      defaultText="Checklist"
      checked
    ></inputField>
    <inputField
      type="checkbox"
      title="checkbox_small_round_highlight"
      id="checkbox_small_round_highlight"
      size="small"
      round
      color="highlight"
      placeholder="Write your notes here..."
      defaultText="Checklist"
      checked
    ></inputField>
    <inputField
      type="checkbox"
      title="checkbox_small_round_readonly"
      id="checkbox_small_round_readonly"
      size="small"
      round
      placeholder="Write your notes here..."
      defaultText="Checklist"
      checked
      readonly
    ></inputField>
    <inputField
      type="toggle"
      title="toggle_default"
      id="toggle_default"
    ></inputField>
    <inputField
      type="toggle"
      title="toggle_highlight"
      color="highlight"
      id="toggle_highlight"
    ></inputField>
    <inputField
      type="toggle"
      title="toggle_readonly"
      id="toggle_readonly"
      readonly
    ></inputField>
    <inputField type="file" title="file_default" id="file_default"></inputField>
    <inputField
      type="file"
      title="file_choose"
      id="file_choose"
      chooseFileLabel="Choose File"
    ></inputField>
    <inputField
      type="file"
      title="file_Change"
      id="file_change"
      chooseFileLabel="Change Image"
      icon
    ></inputField>
    <inputField
      type="search"
      title="search_default"
      id="search_default"
      placeholder="Search..."
    ></inputField>
  </div>
  <div class="guide-txt__wrap">
    <h4>태그 컴포넌트 : inputField</h4>
    <div class="guide-txt-box">
      <h5>1. text</h5>
      <p>태그에 들어갈 텍스르를 정합니다. type:String</p>
    </div>
    <div class="guide-txt-box">
      <h5>2. color</h5>
      <p>태그의 색상을 정합니다. type:String - none, hightlight, white</p>
    </div>
    <div class="guide-txt-box">
      <h5>3. del</h5>
      <p>태그 삭제 버튼을 넣습니다. type:Boolean</p>
    </div>
  </div>
  <div>
    <p>tag_default</p>
    <tagCmp text="Label Name"></tagCmp>
    <tagCmp text="Label Name" color="highlight"></tagCmp>
    <tagCmp text="Label Name" color="white"></tagCmp>
    <p>tag_delete</p>
    <tagCmp text="Label Name" del></tagCmp>
    <tagCmp text="Label Name" color="highlight" del></tagCmp>
    <tagCmp text="Label Name" color="white" del></tagCmp>
  </div>
  <div class="guide-txt__wrap">
    <h4>태그 컴포넌트 : textarea 제목 + 설명 박스</h4>
    <div class="guide-txt-box">
      <h5>1. type</h5>
      <p>textareaTitle, textareaDes 두가지 중 하나 작성</p>
    </div>
  </div>
  <div>
    <inputField
      type="textareaTitle"
      title="textareaTitleDes_default"
      id="textareaTitle_default"
      placeholder="Title here"
    />
    <inputField
      type="textareaDes"
      id="textareaDes_default"
      placeholder="Description here"
    />
    <inputField
      type="textareaTitle"
      title="textareaTitle_32"
      id="textareaTitle_default"
      placeholder="Title here"
      fontCustom="32"
    />
    <inputField
      type="textareaTitle"
      title="textareaTitle_16"
      id="textareaTitle_default"
      placeholder="Title here"
      fontCustom="16"
    />
    <inputField
      type="textareaDes"
      title="textareaDes_400"
      id="textareaDes_default"
      placeholder="Description here"
      fontCustom="400"
    />
    <inputField
      type="textareaDes"
      title="textareaDes_500"
      id="textareaDes_default"
      placeholder="Description here"
      fontCustom="500"
    />
  </div>
</template>

<script>
/* eslint-disable */
import { ref } from 'vue'

export default {
  setup() {
    const options = ref(['t', 'e', 's', 't'])
    return {
      options
    }
  }
}
</script>
<style lang="scss"></style>
