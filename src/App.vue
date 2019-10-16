<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app',
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  padding: 0;
  margin:0;
  /*margin-top: 60px;*/
}

/*.el-input__inner{
  border-radius: 100px !important;
  background: red !important;
  color: red;
  background-color:red;
}*/
</style>
