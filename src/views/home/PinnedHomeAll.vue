<template>
  <div class="nav-bar__fixed">
    <NavBar back="Back" />
  </div>
  <div class="finished">
    <div class="finished__wrap">
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
#app {
  > div {
    &.finished {
      height: auto !important;
      min-height: 100%;
    }
  }
}
.finished {
  &__wrap {
    height: 100%;
    background-color: $primary-background;
  }
  &__bottom {
    display: flex;
    flex-wrap: wrap;
    gap: rem(16px);
    padding: rem(104px) rem(16px) rem(124px);
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
