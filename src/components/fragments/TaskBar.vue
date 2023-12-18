<template>
  <div class="task-bar">
    <div class="task-bar--date">
      Last edited on&nbsp;
      <span class="task-bar--edit">19.30</span>
    </div>
    <div class="task-bar--list">
      <button class="search">
        <span>Search</span>
      </button>
      <button class="bookmark">
        <span>Bookmark</span>
      </button>
      <button class="options">
        <span>Open Options</span>
      </button>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss">
.task-bar {
  display: flex;
  &--date {
    width: 100%;
    padding-left: rem(16px);
    font-size: rem(12px);
    line-height: rem(12px);
    display: flex;
    align-items: center;
  }
  &--list {
    text-wrap: nowrap;
    button {
      width: rem(48px);
      height: rem(48px);
      border: none;
      cursor: pointer;
      background-position: center;
      background-repeat: no-repeat;
      span {
        @include ally-hidden;
      }
      &:nth-child(n + 2) {
        margin-left: rem(4px);
      }
      &.search {
        background-image: url(@/assets/images/icon/icon-task-search.svg);
      }
      &.bookmark {
        background-image: url(@/assets/images/icon/icon-task-bookmark.svg);
      }
      &.options {
        background-color: $primary-base;
        background-image: url(@/assets/images/icon/icon-task-dots.svg);
      }
    }
  }
}
</style>
