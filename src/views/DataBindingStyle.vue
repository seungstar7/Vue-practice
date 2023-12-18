<template>
  <div class="container" v-bind:class="{
    'active' : isActive, 'text-red' : hasError
  }">Class Binding1</div>
  <hr/>
  <div class="container"
       v-bind:class="[activeClass, errorClass]">Class Binding2</div>
  <hr/>
  <div v-bind:style="styleObj">인라인 스타일 바인딩</div>
  <hr/>
  <div v-bind:style="[baseStyle,addStyle]">인라인 스타일 바인딩</div>
  <hr/>
</template>

<script>
export default {
  data() {
    return {
      isActive:true,
      hasError : false,
      activeClass : 'active',
      errorClass : 'text-red',
      styleObj : {
        color : 'red',
        fontSize : '13px'
      },
      baseStyle : 'background-color:yellow;width:100%;height:200px',
      addStyle : 'color:red;font-weight:bold'
    };
  }
}
</script>

<style scoped>
  .container {
    width: 100%;
    height: 200px;
  }
  .active {
    background-color: yellow;
    font-weight: bold;
  }
  .text-red {
    color: red;
  }
</style>