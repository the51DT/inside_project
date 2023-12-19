<template>
  <NavBar title="New Notes" />
  <div class="create_list__wrap">
    <TitleInput type="24" title="What Do You Want to Notes?" />
    <div class="create_list__box">
      <listCmp
        v-for="(list, index) in listsEx"
        :key="index"
        :iconList="list.iconList"
        :bigTitle="list.bigTitle"
        :subTitle="list.subTitle"
        @click="ToCreateList(list.ToCreateList.path)"
      />
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const listsEx = [
  {
    iconList: 'ideaIcon',
    bigTitle: 'Interesting Idea',
    subTitle: 'Use free text area, feel free to write it all',
    ToCreateList: {
      path: 'creative/ListIdea'
    }
  },
  {
    iconList: 'shoppingIcon',
    bigTitle: 'Buying Something',
    subTitle: 'Use checklist, so you won’t miss anything',
    ToCreateList: {
      path: 'creative/ListBuying'
    }
  },
  {
    iconList: 'guidanceIcon',
    bigTitle: 'Guidance',
    subTitle: 'Create guidance for routine activities',
    ToCreateList: {
      path: 'creative/ListGuidance'
    }
  },
  {
    iconList: 'goalsIcon',
    bigTitle: 'Goals',
    subTitle: 'Near/future goals, notes and keep focus',
    ToCreateList: {
      path: 'creative/ListGoals'
    }
  },
  {
    iconList: 'tasksIcon',
    bigTitle: 'Routine Tasks',
    subTitle: 'Checklist with sub-checklist',
    ToCreateList: {
      path: 'creative/ListTasks'
    }
  }
]
const router = useRouter()
const ToCreateList = (path) => {
  router.push(path)
}
</script>
<style lang="scss">
.create_list__wrap {
  padding: rem(24px) rem(16px) 0;
  display: flex;
  flex-direction: column;
  .create_list__box {
    margin-top: rem(32px);
    .list-box {
      & + .list-box {
        margin-top: rem(24px);
      }
    }
  }
}
</style>
