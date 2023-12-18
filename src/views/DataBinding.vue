<template>
  <h1>hello {{title}}!</h1>
  <div>
    <div>{{htmlString}}</div>
    <div v-html="htmlString"></div>
  </div>
  <div>
    <input type="text" v-model="valueModel">
  </div>
  <div>
    <input type="number" v-model="valueModelInt">
  </div>
  <div>
    <textarea v-model="message"></textarea>
  </div>
  <div>
    <label><input type="checkbox" v-model="checked">{{checked}}</label>
  </div>
  <div>
    <select v-model="city">
      <option value="02">서울</option>
      <option value="21">부산</option>
      <option value="064">제주</option>
    </select>
  </div>
  <div>
    <label><input type="checkbox" value="서울" v-model="checked2"> 서울</label>
    <label><input type="checkbox" value="부산" v-model="checked2"> 부산</label>
    <label><input type="checkbox" value="제주" v-model="checked2"> 제주</label>
    <br>
    <span>체크한 지역 : {{ checked2 }}</span>
  </div>
  <div>
    <label><input type="radio" v-bind:value="radioValue1" v-model="picked"> 서울</label>
    <label><input type="radio" v-bind:value="radioValue2" v-model="picked"> 부산</label>
    <label><input type="radio" v-bind:value="radioValue3" v-model="picked"> 제주</label>
    <br>
    <span>체크한 지역 : {{ picked }}</span>
  </div>
  <div>
    <img v-bind:src="imgSrc">
  </div>
  <div>
    <input type="text" v-model="textValue">
    <button type="botton" v-bind:disabled="textValue==''">Click</button>
  </div>
</template>

<script>
export default {

  data() {
    return {
      htmlString : '<p style="color : red">This is a red String</p>',
      title : "world",
      valueModel : 'South Korea',
      valueModelInt : 3,
      message : '여러 줄을 입력할 수 있는 textarea 입니다',
      city : "064",
      checked : true,
      checked2 : [],
      picked : '',
      radioValue1 : '서울',
      radioValue2 : '부산',
      radioValue3 : '제주',
      imgSrc : "https://kr.vuejs.org/images/logo.png",
      textValue : '',
    };
  }
}
</script>

<style scoped>
</style>