<template>
  <div class="onboarding__wrap">
    <swiper :pagination="true" :modules="modules">
      <swiper-slide
        v-for="(boarding, i) in OnBoarding"
        :slideIndex="i"
        :key="i"
      >
        <div class="swiper-box">
          <div class="top">
            <div
              class="swiper-box__image"
              :style="{ backgroundImage: `url(${boarding.img})` }"
            ></div>
            <div class="swiper-box__des">
              <p>{{ boarding.des }}</p>
            </div>
            <div class="swiper-pagination"></div>
          </div>
          <ButtonCmp
            bgBtn="disabled"
            btnSize="large"
            iconPositionRight="right"
            btnTxt="Let’s Get Started"
            v-if="i === 0"
          />
          <ButtonCmp
            bgBtn="disabled"
            btnSize="large"
            iconPositionRight="right"
            btnTxt="Next"
            @click="i += 1"
            v-else-if="i === 1"
          />
          <ButtonCmp
            bgBtn="disabled"
            btnSize="large"
            iconPositionRight="right"
            btnTxt="Proceed to Login"
            @click="MoveLoginPage()"
            v-else-if="i === 2"
          />
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
/* eslint-disable */
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { useRouter } from 'vue-router'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    const OnBoarding = [
      {
        img: require('../../assets/images/onboarding/onboarding_img_1.png'),
        des: 'Jot Down anything you want to achieve, today or in the future'
      },
      {
        img: require('../../assets/images/onboarding/onboarding_img_2.png'),
        des: 'Different goals, different way to jot it down'
      },
      {
        img: require('../../assets/images/onboarding/onboarding_img_3.png'),
        des: 'Text area, checklist, or same combination. Adapt with ypur needs'
      }
    ]
    const modules = [Pagination]
    const router = useRouter()
    const MoveLoginPage = () => {
      router.push({
        path: '/login'
      })
    }
    return {
      OnBoarding,
      modules,
      MoveLoginPage
    }
  }
}
</script>
<style lang="scss">
.onboarding__wrap {
  padding: 0 rem(16px) rem(84px);
  background-color: $primary-base;
  //navbar 없으면 100vh
  height: calc(100vh - rem(18.39px));
  .swiper-wrapper {
    height: calc(100vh - 102.39px);
    .swiper-box {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      height: calc(100vh - 102.39px);
      &__image {
        margin: 0 auto;
        width: rem(280px);
        height: rem(280px);
        background-size: 100%;
        margin-top: rem(86px);
      }
      &__des {
        margin-top: rem(24px);
        p {
          color: $neutral-white;
          font-size: rem(20px);
          line-height: rem(28px);
          font-weight: 700;
        }
      }
    }
  }
  // swiper-pagination
  .swiper-pagination {
    top: rem(486px);
    bottom: auto;
    .swiper-pagination-bullet {
      background-color: $primary-light;
      opacity: 1;
      &-active {
        background-color: $secondary-base;
      }
    }
  }
}
</style>
