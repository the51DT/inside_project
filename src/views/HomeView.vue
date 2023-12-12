<template>
  <div>
    <inputField type="text" title="input_default" caption="input_default" id="input_default" name="input_default" placeholder="input_default"></inputField>
    <inputField type="text" title="input_warn" id="input_warn" name="input_warn" placeholder="input_warn" warn></inputField>
    <inputField type="text" title="input_readonly" id="input_readonly" name="input_readonly" placeholder="input_readonly" readonly></inputField>
    <inputField type="password" id="password_default" name="password_default" placeholder="********"></inputField>
    <inputField type="password" id="password_warn" name="password_warn" placeholder="********" warn></inputField>
    <inputField type="password" id="password_readonly" name="password_readonly" placeholder="********" readonly></inputField>
    <inputField type="select" title="select_default" caption="select_default" id="select_default" name="select_default" placeholder="select_default" :options="options"></inputField>
    <inputField type="select" title="select_warn" id="select_warn" name="select_warn" placeholder="select_warn" warn></inputField>
    <inputField type="select" title="select_readonly" id="select_readonly" name="select_readonly" placeholder="select_readonly" readonly></inputField>
    <inputField type="checkbox" title="checkbox_default" id="checkbox_default" placeholder="Write your notes here..."></inputField>
    <inputField type="checkbox" title="checkbox_checked" id="checkbox_checked" placeholder="Write your notes here..." checked></inputField>
    <inputField type="textarea" title="textarea_default" id="text_default" placeholder="Write your notes here..."></inputField>
    <inputField type="file" title="file_default" id="file_default"></inputField>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import inputField from '@/components/fragments/inputField.vue'

export default {
  components: { inputField },
  data () {
    return {
      options: ['t', 'e', 's', 't']
    }
  }
}
</script>
<style lang="scss"></style>
