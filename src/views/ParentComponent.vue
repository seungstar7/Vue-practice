<script>
import ChildComponent from "@/views/ChildComponent.vue";

export default{
  name: "ParentComponent",
  components: {ChildComponent},
  mounted() {
    this.$refs["child-component"].$refs.btn.click();
    this.$refs["child-component"].callFromParent();
  },
  computed:{
    msg(){
      return this.$refs["child-component"].msg;
    }
  },
  methods:{
    changeChildData() {
      this.$refs["child-component"].msg = "부모 컴포넌트가 변경한 데이터";
    },
    sendMessage(data){
      console.log(data);
    },
    checkChild(){
      alert(this.msg)
    }
  }
}
</script>

<template>
  <child-component @send-message="sendMessage" ref="child-component"/>
  <button type="button" @click="changeChildData">부모 컴포넌트 데이터 변경</button>
  <br/>
  <button type="button" @click="checkChild">자식 컴포넌트 데이터 조회</button>
<div></div>
</template>

<style scoped>

</style>