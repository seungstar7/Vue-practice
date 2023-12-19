<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/databinding">Data Binding</router-link> |
    <router-link to="/databindingStyle">Data Style Binding</router-link> |
    <router-link to="/databindingObject">Data Object Binding</router-link> |
    <router-link to="/databindingAxios">Data Object Axios</router-link> |
    <router-link to="/nested">Nested component</router-link> |
    <router-link to="/parentComponent">Parent Component</router-link> |
    <router-link to="/slotModalLayout">Slot ModalLayout </router-link> |
    <router-link to="/provideInject">Provide Inject</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script setup>
</script>