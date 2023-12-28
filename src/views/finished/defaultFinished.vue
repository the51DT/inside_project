<template>
  <div class="finished">
    <div v-if="note === 0" class="finished-no__wrap">
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
        <div class="hidden" ref="countDiv"></div>
      </div>
    </div>
    <div v-else class="finished__wrap">
      <div class="finished__top">
        <h3>Amazing Journey!</h3>
        <p>You have Successfully<br />finished {{ count }} notes</p>
      </div>
      <ul class="finished__bottom" ref="countDiv">
        <li :key="list.title" v-for="list in lists">
          <noteCmp
            :title="list.title"
            :type="list.type"
            :color="list.color"
            sub="Interesting Idea"
          />
        </li>
        <li :key="list.title" v-for="list in lists">
          <noteCmp :title="list.title" :type="list.type" :color="list.color" />
        </li>
      </ul>
    </div>
    <TabBar />
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue'
import { useStore } from 'vuex'

const countDiv = ref(0)
const count = ref(0)

const store = useStore()
const useremail = computed(() => store.state.users.loginEmail)
const users = computed(() => store.state.users.usersInfo)
const loginUser = users.value.filter((el) => {
  return el.email === useremail.value
})
const note = loginUser[0].note

onMounted(() => {
  count.value = countDiv.value.children.length
})

const lists = [
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
.finished {
  height: 100%;
  &__wrap {
    height: 100%;
    overflow-y: scroll;
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
    flex-wrap: wrap;
    gap: rem(16px);
    padding: rem(24px) rem(16px) rem(124px);
    li {
      width: calc(50% - rem(8px));
    }
  }
}
.finished-no__wrap {
  display: flex;
  width: 100vw;
  height: 100%;
  background-color: $primary-background;
  .finished-no__box {
    text-align: center;
    padding: 0 rem(50px);
    margin: 0 auto;
    &__img {
      width: rem(240px);
      height: rem(240px);
      background: url('@/assets/images/finished/finished_no_img.png') no-repeat;
      background-size: contain;
      margin: rem(50px) auto 0;
      &-line {
        width: rem(150px);
        height: rem(100px);
        background: url('@/assets/images/finished/finished_no_img_line.png')
          no-repeat;
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
