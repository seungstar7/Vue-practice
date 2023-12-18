<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>제품명</th>
          <th>가격</th>
          <th>카테고리</th>
          <th>배송료</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="i" v-for="(product,i) in productList">
          <td>{{product.prodName}}</td>
          <td>{{product.price}}</td>
          <td>{{product.category}}</td>
          <td>{{product.deliveryPrice}}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div>
    <h1 v-if="type=='A'">A</h1>
    <h1 v-else-if="type=='B'">B</h1>
    <h1 v-else>A</h1>
    <h1 v-show="bsShow">bsShow가 true면, 현재 블록이 화면에 보이게 됩니다.</h1>
  </div>
  <div>
    <button type="button" @click="inCreaseCounter">Add 1</button>
    <button type="button" @click="setCount(7)">Set 7</button>
    <p>the counter is : {{counter}}</p>
  </div>
  <button type="button" @click="one(), two()">Click</button>
  <div>
    <select v-model="selectedValue" @change="changeSelect">
      <option value="서울">서울</option>
      <option value="부산">부산</option>
      <option value="제주">제주</option>
    </select>
  </div>
  <div>
    <input type="text" value="엔터이벤트" @keyup.enter="keyUpEvent">
    <input type="text" value="알트엔터이벤트" @keyup.alt.enter="keyUpEvent">
  </div>
  <div>
    <h1>{{firstName + ' ' + lastName}}</h1>
    <h1>{{getFullName()}}</h1>
    <h1>Full Name : {{fullName}}</h1>
    <button type="button" @click="changeName">변경</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productList : [
        {"prodName" : "기계식 키보드", "price" : 25000, "category" : "노트북/태블릿", "deliveryPrice" : 5000},
        {"prodName" : "무선 마우스", "price" : 12000, "category" : "노트북/태블릿", "deliveryPrice" : 5000},
        {"prodName" : "아이패드", "price" : 725000, "category" : "노트북/태블릿", "deliveryPrice" : 5000},
        {"prodName" : "태블릿 거치대", "price" : 32000, "category" : "노트북/태블릿", "deliveryPrice" : 5000},
        {"prodName" : "무선 충전기", "price" : 42000, "category" : "노트북/태블릿", "deliveryPrice" : 5000},
      ],
      type : 'A',
      bsShow : true,
      counter : 0,
      selectedValue : '',
      firstName : 'SeungHyun',
      lastName : 'Kim',
      fullName : ''
    };
  },
  watch:{
    firstName(){
      this.fullName = this.firstName + ' ' + this.lastName;
    },
    lastName(){
      this.fullName = this.firstName + ' ' + this.lastName;
    }
  },
  methods: {
    inCreaseCounter(){
      this.counter = this.counter + 1;
    },
    setCount( props ){
      this.counter = props;
    },
    one(){
      alert('One');
    },
    two(){
      alert('Two')
    },
    changeSelect(){
      alert(this.selectedValue);
    },
    keyUpEvent (){
      alert("이벤트")
    },
    getFullName(){
      return this.firstName + ' ' + this.lastName;
    },
    changeName(){
      this.firstName = 'bobby'
    }
  }
}
</script>

<style scoped>
  table {
    font-family: Arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }
  td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }
</style>