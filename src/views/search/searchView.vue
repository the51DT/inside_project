<template>
  <div class="search__wrap">
    <div class="search__top">
      <button @click="goUrl('back')"><span class="hidden">back</span></button>
      <inputField
        type="search"
        id="search"
        placeholder="Search..."
        v-model:searchValue="result"
        @keyup.enter="addRecent($event)"
      ></inputField>
    </div>
    <div class="search__bottom">
      <p>RECENT SEARCHES</p>
      <ul>
        <li :key="index" v-for="(list, index) in seachList.slice().reverse()">
          <router-link :to="{ name: list.route }">{{ list.item }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import router from '@/router'
import { ref, computed } from 'vue'
import { useStore } from 'vuex'

const goUrl = (url) => {
  if (url === 'back') {
    router.go(-1)
  }
}
const store = useStore()
const result = ref('')
// const useremail = computed(() => store.state.users.loginEmail)
const seachList2 = computed(() => store.state.users.loginEmail)
// console.log(seachList2.value)
const users = computed(() => store.state.users.usersInfo)
const loginUserList = users.value.find(
  (user) => user.email === seachList2.value
)
// console.log(seachList2.value, loginUserList.searchList)
// console.log(store.state.users.usersInfo)
const seachList = ref(loginUserList.searchList)

const addRecent = (event) => {
  if (result.value === '') return false
  const searchResult = { item: result.value.toString(), route: 'Home' }
  seachList.value.push(searchResult)
  if (seachList.value.length > 5) seachList.value.shift()
}
</script>

<style lang="scss">
.search {
  &__wrap {
    height: 100vh;
  }
  &__top {
    display: flex;
    align-items: center;
    gap: rem(12px);
    padding: rem(9px) rem(16px);
    border-bottom: solid rem(1px) $neutral-lightgrey;
    button {
      border: none;
      &::before {
        content: '';
        display: block;
        width: rem(24px);
        height: rem(24px);
        background-image: url('@/assets/images/icon/search_back.svg');
      }
    }
  }
  &__bottom {
    height: calc(100vh - rem(55px));
    padding: rem(24px) rem(16px);
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    p {
      font-size: rem(10px);
      color: $neutral-basegrey;
    }
    ul {
      margin-top: rem(20px);
      li {
        position: relative;
        font-size: rem(14px);
        font-weight: 400;
        cursor: pointer;
        a {
          display: block;
          width: 100%;
        }
        & + li {
          margin-top: rem(24px);
        }
        &::before {
          content: '';
          position: absolute;
          right: 0;
          display: block;
          width: rem(20px);
          height: rem(20px);
          background-image: url('@/assets/images/icon/search_recent.svg');
          z-index: -1;
        }
      }
    }
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
