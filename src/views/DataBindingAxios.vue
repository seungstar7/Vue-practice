
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
</template>
<script>
  import axios from "axios";

  export default {
    data() {
      return {
        productList : []
      };
    },
    created() {
      this.getList();
    },
    methods: {
      async getList(){
        let result = await axios.get("https://9838e17e-5107-4594-b194-1476456f54f8.mock.pstmn.io/list");

        let result2 = await this.$api("https://9838e17e-5107-4594-b194-1476456f54f8.mock.pstmn.io/list","get")
        console.log(result2)
        this.productList = result.data;
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