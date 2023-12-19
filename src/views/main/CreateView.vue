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
      />
    </div>
  </div>
</template>

<script setup>
const listsEx = [
  {
    iconList: 'shoppingIcon',
    bigTitle: 'Buying Something',
    subTitle: 'Use checklist, so you won’t miss anything'
  },
  {
    iconList: 'ideaIcon',
    bigTitle: 'Interesting Idea',
    subTitle: 'Use free text area, feel free to write it all'
  },
  {
    iconList: 'guidanceIcon',
    bigTitle: 'Guidance',
    subTitle: 'Create guidance for routine activities'
  },
  {
    iconList: 'goalsIcon',
    bigTitle: 'Goals',
    subTitle: 'Near/future goals, notes and keep focus'
  },
  {
    iconList: 'tasksIcon',
    bigTitle: 'Routine Tasks',
    subTitle: 'Checklist with sub-checklist'
  }
]
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
