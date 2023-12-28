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
      <div class="home__titleArea">
        <h4 class="home__titleArea--title">Pinned Notes</h4>
        <ButtonCmp
          bgBtn="base"
          btnSize="large"
          btnTxt="View all"
          :btnType="false"
          useUrl="/home"
        />
      </div>
      <div class="home__swiper">
        <swiper
          class="swiper swiper1"
          :slides-per-view="1.8"
          :space-between="20"
        >
          <swiper-slide v-for="(note, i) in notes" :key="i">
            <noteCmp
              :title="note.title"
              :type="note.type"
              :color="note.color"
              sub="Interesting Idea"
            />
          </swiper-slide>
        </swiper>
      </div>
      <div class="home__titleArea">
        <h4 class="home__titleArea--title">Interesting Idea</h4>
        <ButtonCmp
          bgBtn="base"
          btnSize="large"
          btnTxt="View all"
          :btnType="false"
          useUrl="/home"
        />
      </div>
      <div class="home__swiper">
        <swiper
          class="swiper swiper2"
          :slides-per-view="1.8"
          :space-between="20"
        >
          <swiper-slide v-for="(note, i) in notes" :key="i">
            <noteCmp
              :title="note.title"
              :type="note.type"
              :color="note.color"
            />
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <TabBar />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'

const store = useStore()
const useremail = computed(() => store.state.users.loginEmail)
const users = computed(() => store.state.users.usersInfo)
const loginUser = users.value.filter((el) => {
  return el.email === useremail.value
})
const note = loginUser[0].note

const notes = [
  {
    title: '💡 New Product Idea Design',
    type: 'text',
    color: ''
  },
  {
    title: '💡 New Product Idea Design',
    type: 'image',
    color: 'purple'
  },
  {
    title: '🛒 Monthly Buy List',
    type: 'checkbox',
    color: 'yellow'
  },
  {
    title: '🛒 Monthly Buy List',
    type: 'checkboxSub',
    color: 'lightyellow'
  },
  {
    title: 'red',
    type: 'text',
    color: 'red'
  },
  {
    title: 'green',
    type: 'text',
    color: 'green'
  }
]
</script>

<style lang="scss">
.home {
  height: 100%;
  &-no__wrap {
    display: flex;
    width: 100vw;
    height: 100%;
    background-color: $primary-background;
    .home-no__box {
      text-align: center;
      padding: 0 rem(50px);
      margin: 0 auto;
      &__img {
        width: rem(240px);
        height: rem(240px);
        background: url('@/assets/images/home/home_no_img.png') no-repeat;
        background-size: contain;
        margin: rem(50px) auto 0;
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
    padding: rem(16px) rem(16px) rem(124px);
    overflow-y: scroll;
  }
  &__titleArea {
    margin-top: rem(48px);
    display: flex;
    justify-content: space-between;
    &--title {
      font-size: rem(14px);
      font-weight: 700;
    }
  }
  &__swiper {
    margin-top: rem(12px);
  }
}
</style>
