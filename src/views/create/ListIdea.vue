<template>
  <div>
    <NavBar back="Back" />
    <div class="create__wrap">
      <div class="create-box--idea">
        <div class="create-box--idea-tit">
          <inputField type="textarea" id="idea-title" placeholder="New idea" />
        </div>
        <div class="create-box--idea-des">
          <inputField
            type="textareaDes"
            id="textareaDes_default"
            placeholder="Write your notes here..."
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
.create__wrap {
  padding: rem(24px) rem(16px) 0;
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
//임시
.task-bar {
  position: fixed;
  width: 100%;
  bottom: 0;
}
</style>
