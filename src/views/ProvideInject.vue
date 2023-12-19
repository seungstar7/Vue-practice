<script>
import {defineComponent} from 'vue'
import ProvideInjectChild from "@/views/ProvideInjectChild.vue";

export default defineComponent({
  name: "ProvideInject",
  components: {ProvideInjectChild},
  data(){
    return{
      items : ['A','B']
    }
  },
  provide(){
    return{
      itemLength: this.items.length
    }
  },
  methods : {
    btnClickHandler(){
      this.$refs.title.focus();
    }
  }
})
</script>

<template>
  <ProvideInjectChild/>
  <input type="text" ref="title">
  <button type="button" @click="btnClickHandler">인풋으로 포커스 효과</button>

</template>

<style scoped>

</style>