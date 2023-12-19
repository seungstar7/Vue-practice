<template>
  <div>
    <page-title v-bind:title="title"/>
    <PageTitle title="부모 컴포넌트에서 자식 컴포넌트로 데이터 전달"/>
  </div>

</template>

<script>
import {defineComponent} from 'vue'
import PageTitle from "@/components/PageTitle.vue";

export default defineComponent({
  name: "NestedComponent",
  components: {PageTitle},
  data() {
    return{
      title : '동적 페이지 타이틀'
    }
  }
})
</script>

<style scoped>

</style>