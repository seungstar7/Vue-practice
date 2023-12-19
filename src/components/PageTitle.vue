<script xmlns:page-title="http://www.w3.org/1999/html">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "PageTitle",
  props:{
    title : {
      type : String,
      default : "페이지 제목입니다"
    }
  }
})
</script>

<template>

  <h2>{{title}}</h2>
</template>

<style scoped>

</style>