<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
  <div>
    <inputField type="text" label="input_default" caption="input_default" id="input_default" name="input_default" placeholder="input_default"></inputField>
    <inputField type="text" label="input_warn" caption="input_warn" id="input_warn" name="input_warn" placeholder="input_warn" warn=true></inputField>
    <inputField type="text" label="input_disabled" caption="input_disabled" id="input_disabled" name="input_disabled" placeholder="input_disabled" disabled=true></inputField>
    <inputField type="password" id="input_default" name="input_default" placeholder="********"></inputField>
    <inputField type="password" id="input_warn" name="input_warn" placeholder="********" warn=true></inputField>
    <inputField type="password" id="input_disabled" name="input_disabled" placeholder="********" disabled=true></inputField>
    <inputField type="select" label="select_default" caption="select_default" id="select_default" name="select_default" placeholder="select_default"></inputField>
    <inputField type="select" label="select_warn" caption="select_warn" id="select_warn" name="select_warn" placeholder="select_warn" warn=true></inputField>
    <inputField type="select" label="select_disabled" caption="select_disabled" id="select_disabled" name="select_disabled" placeholder="select_disabled" disabled=true></inputField>
  </div>
</template>

<style lang="scss">
@import '@/assets/scss/index.scss';
</style>

<script setup>
import inputField from '@/components/fragments/inputField.vue'
</script>
