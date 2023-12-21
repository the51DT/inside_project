<template>
  <div class="search__wrap">
    <div class="search__top">
      <a @click="goUrl('back')"><span class="hidden">back</span></a>
      <inputField
        type="search"
        id="search"
        placeholder="Search..."
        v-model:searchValue="result"
        @keyup.enter="addRecent(result)"
      ></inputField>
    </div>
    <div class="search__bottom">
      <p>RECENT SEARCHES</p>
      <ul>
        <li><router-link :to="{ name: 'defaultHome' }">Product Idea</router-link></li>
        <li><router-link :to="{ name: 'defaultHome' }">Monthly Buying List</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import router from '@/router'
import { ref } from 'vue'

const goUrl = (url) => {
  if (url === 'back') {
    router.go(-1)
  }
}

const result = ref('')

const addRecent = (result) => {
  const target = document.querySelector('.search__bottom ul')
  const el = `<li><a herf="/home/default">${result}</a></li>`
  target.insertAdjacentHTML('afterbegin', el)
  console.log(target.lastChild)
  if (target.childElementCount > 5) {
    target.removeChild(target.lastChild)
  }
  // const li = document.createElement('li')
  // const link = document.createElement('a')
  // const resultValue = document.createTextNode(result)
  // link.setAttribute('href', '/home/default')
  // link.appendChild(resultValue)
  // li.appendChild(link)
  // target.appendChild(li)
}
</script>

<style lang="scss">
  .search {
    &__top {
      display: flex;
      align-items: center;
      gap: rem(12px);
      padding: rem(9px) rem(16px);
      border-bottom: solid rem(1px) $neutral-lightgrey;
      a {
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
