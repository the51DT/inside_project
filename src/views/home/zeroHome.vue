<template>
  <div>
    <div>
      <div class="home-no__wrap">
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
        <TabBar />
      </div>
    </div>
    <!-- <div v-else></div> -->
  </div>
</template>

<script>
export default {}
</script>
<style lang="scss">
.home-no__wrap {
  .home-no__box {
    text-align: center;
    padding: 0 rem(60px);
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
</style>
