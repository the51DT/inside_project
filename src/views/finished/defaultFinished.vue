<template>
  <div>
    <div v-if="data === 0">
      <div class="finished-no__wrap">
        <div class="finished-no__box">
          <div class="finished-no__box__img"></div>
          <div class="finished-no__box__des">
            <TitleInput
              type="24"
              title="No Finished Notes Yet"
              subtype="14"
              sub="Once you create a note and finish it,
                it will be appeared on this screen.
                So, let’s start your journey!"
            />
          </div>
          <div class="finished-no__box__img-line"></div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="finished__wrap">
        <div class="finished__top">
          <h3>Amazing Journey!</h3>
          <p>You have Successfully<br>finished {{ count }} notes</p>
        </div>
        <div class="finished__bottom">
          <noteCmp
            title="💡 New Product Idea Design"
            type="text"
            sub="Interesting Idea"
          />
          <noteCmp
            title="💡 New Product Idea Design"
            type="image"
            color="purple"
            sub="Interesting Idea"
          />
          <noteCmp
            title="🛒 Monthly Buy List"
            type="checkbox"
            color="yellow"
            sub="Interesting Idea"
          />
          <noteCmp
            title="🛒 Monthly Buy List"
            type="checkboxSub"
            color="lightyellow"
            sub="Interesting Idea"
          />
          <noteCmp
            title="Red"
            color="red"
            sub="Interesting Idea"
          />
          <noteCmp
            title="Green"
            color="green"
            sub="Interesting Idea"
          />

          <!-- no sub -->
          <noteCmp
            title="💡 New Product Idea Design"
            type="text"
          />
          <noteCmp
            title="💡 New Product Idea Design"
            type="image"
            color="purple"
          />
          <noteCmp
            title="🛒 Monthly Buy List"
            type="checkbox"
            color="yellow"
          />
          <noteCmp
            title="🛒 Monthly Buy List"
            type="checkboxSub"
            color="lightyellow"
          />
          <noteCmp
            title="Red"
            color="red"
          />
          <noteCmp
            title="Green"
            color="green"
          />
        </div>
      </div>
    </div>
    <TabBar />
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  count: {
    type: Number,
    default: 0
  }
})
</script>

<style lang="scss">
.finished {
  &__wrap {
    background-color: $primary-background;
  }
  &__top {
    padding: rem(66px) rem(16px) 0;
    height: rem(160px);
    color: $neutral-white;
    background-color: $primary-base;
    background-image: url('@/assets/images/finished/finished_top_img.png');
    background-repeat: no-repeat;
    background-position: right bottom;
    h3 {
      font-size: rem(20px);
      font-weight: 700;
    }
    p {
      margin-top: rem(4px);
      font-size: rem(12px);
      font-weight: 400;
      line-height: rem(14.52px);
    }
  }
  &__bottom {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: rem(16px);
    padding: rem(24px) rem(16px) rem(124px);
  }
}
.finished-no__wrap {
  display: flex;
  height: 100vh;
  background-color: $primary-background;
  .finished-no__box {
    text-align: center;
    padding: 0 rem(60px);
    margin: 0 auto;
    &__img {
      width: rem(240px);
      height: rem(240px);
      background: url('@/assets/images/finished/finished_no_img.png') no-repeat;
      background-size: contain;
      margin: rem(111px) auto 0;
      &-line {
        width: rem(150px);
        height: rem(100px);
        background: url('@/assets/images/finished/finished_no_img_line.png') no-repeat;
        background-size: contain;
        margin: rem(21px) auto 0;
      }
    }
    &__des {
      margin-top: rem(24px);
    }
  }
}
</style>
