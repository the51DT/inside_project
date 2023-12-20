<template>
  <div>
    <div>
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
