<template>
  <div class="color-bg">
    <div class="nav-bar__fixed">
      <NavBar back="Back" />
    </div>
    <div class="create__wrap">
      <div class="create-box--idea">
        <div class="create-box--idea-tit">
          <inputField
            type="textareaTitle"
            id="idea-title"
            placeholder="New idea"
            fontCustom="32"
          />
        </div>
        <div class="create-box--idea-des">
          <inputField
            type="textareaDes"
            id="textareaDes_default"
            placeholder="Write your notes here..."
            fontCustom="400"
          />
        </div>
      </div>
      <div class="create-box--idea__reminder">
        <div class="create-box--idea__reminder-date">
          Reminder set on 15/07/2021, 18:30
        </div>
        <div class="create-box--idea__reminder-tag">
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

<script setup></script>
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
  .create-box--idea {
    &-tit {
      .inputField__text {
        padding: 0;
        font-size: rem(32px);
        font-weight: 700;
        line-height: rem(38.4px);
      }
    }
    &-des {
      margin-top: rem(16px);
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
