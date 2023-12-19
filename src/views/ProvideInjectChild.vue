<script>

export default {
  name: "ProvideInjectChild",
  inject : ['itemLength'],
  mounted() {
    console.log(this.itemLength)
  }
}
</script>

<template>
  <div></div>

</template>

<style scoped>

</style>