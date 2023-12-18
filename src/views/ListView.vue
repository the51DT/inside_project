<template>
  <div class="list">
    <title-input title="list" />
    <listCmp
      v-for="(list, index) in listsEx"
      :key="index"
      :iconList="list.iconList"
      :bigTitle="list.bigTitle"
      :subTitle="list.subTitle"
    />
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
