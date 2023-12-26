<template>
  <div class="home">
    <div v-if="note === 0" class="home-no__wrap">
      <div class="home-no__box">
        <div class="home-no__box__img"></div>
        <div class="home-no__box__des">
          <TitleInput
            type="24"
            title="Start Your Journey"
            subtype="14"
            sub="Every big step start with small step.
              Notes your first idea and start
              your journey!"
          />
        </div>
        <div class="home-no__box__img-line"></div>
      </div>
    </div>
    <div v-else class="home__wrap">
      <div>TEST</div>
    </div>
    <TabBar />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const userNum = computed(() => store.state.userNum)
const note = computed(() => store.state.users[userNum.value].note).value

</script>

<style lang="scss">
.home{
  height: 100%;
  &-no__wrap {
    display: flex;
    width: 100vw;
    height: 100%;
    background-color: $primary-background;
    .home-no__box {
      text-align: center;
      padding: 0 rem(60px);
      margin: 0 auto;
      &__img {
        width: rem(240px);
        height: rem(240px);
        background: url('@/assets/images/home/home_no_img.png') no-repeat;
        background-size: contain;
        margin: rem(111px) auto 0;
        &-line {
          width: rem(150px);
          height: rem(100px);
          background: url('@/assets/images/home/home_no_img_line.png') no-repeat;
          background-size: contain;
          margin: rem(21px) auto 0;
        }
      }
      &__des {
        margin-top: rem(24px);
      }
    }
  }
  &__wrap {
    width: 100vw;
    height: 100%;
    background-color: $primary-background;
  }
}
</style>
