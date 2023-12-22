<template>
  <div class="onboarding__wrap">
    <swiper :pagination="true" :modules="modules" @click="onSwiper">
      <swiper-slide
        v-for="(boarding, i) in OnBoarding"
        :slideIndex="i"
        :key="i"
        @click="onSwiper"
      >
        <div class="swiper-box">
          <div class="top">
            <div class="top-img">
              <div
                class="swiper-box__image"
                :style="{ backgroundImage: `url(${boarding.img})` }"
              ></div>
            </div>
            <div class="swiper-box__des">
              <p>{{ boarding.des }}</p>
            </div>
          </div>
          <ButtonCmp
            bgBtn="disabled"
            btnSize="large"
            iconPositionRight="right"
            btnTxt="Let’s Get Started"
            @click="MoveNextPage(1)"
            v-if="i === 0"
          />
          <ButtonCmp
            bgBtn="disabled"
            btnSize="large"
            iconPositionRight="right"
            btnTxt="Next"
            @click="MoveNextPage(2)"
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
import { ref } from 'vue'

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
        des: 'Text area, checklist, or same combination.'
      }
    ]
    const modules = [Pagination]
    const router = useRouter()
    const MoveLoginPage = () => {
      router.push({
        path: '/login'
      })
    }
    const onSwiper = (swiper) => {
      swiperInstance.value = swiper
    }
    const swiperInstance = ref()
    const MoveNextPage = (index) => {
      swiperInstance.value.slideTo(index)
    }
    return {
      OnBoarding,
      modules,
      MoveLoginPage,
      onSwiper,
      MoveNextPage
    }
  }
}
</script>
<style lang="scss">
.onboarding__wrap {
  background-color: $primary-base;
  .swiper {
    &-slide {
      display: flex;
      justify-content: center;
    }
    &-wrapper {
      .swiper-box {
        padding: 0 rem(16px);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        .top {
          padding-bottom: rem(40px);
        }
        .top-img {
          padding: 0 rem(24px);
        }
        &__image {
          width: 100%;
          height: 0;
          padding-top: 100%;
          margin-top: rem(86px);
          background-repeat: no-repeat;
          background-size: cover;
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
  }
  .swiper
  // swiper-pagination
  .swiper-pagination {
    bottom: 5%;
    .swiper-pagination-bullet {
      background-color: $primary-light;
      opacity: 1;
      &-active {
        background-color: $secondary-base;
      }
    }
  }
  // swiper-pagination-bullet
  .swiper-pagination-bullet {
    width: rem(8px);
    height: rem(8px);
  }
  .btn {
    margin-bottom: rem(84px);
  }
}
</style>
