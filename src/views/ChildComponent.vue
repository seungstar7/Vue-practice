<template>
  <button type="button" @click="childFunc" ref="btn">click</button>
  <h1>{{msg}}</h1>
  <button type="button" @click="childFunc2" ref="btn2">자식 컴포넌트 데이터 변경</button>
</template>
<script>
export default {
  data(){
    return{
      msg : '',
      msg2 : '자식 컴포넌트로부터 보내는 메세지',
    }
  },
  methods: {
    childFunc() {
      console.log('부모 컴포넌트에서 직접 발생시킨 이벤트');
    },
    callFromParent(){
      console.log('부모 컴포넌트에서 직접 호출한 함수')
    },
    childFunc2(){
      this.msg='변경된 메세지';
    }
  },
  mounted() {
    this.$emit('send-message', this.msg2)
  }
}
</script>