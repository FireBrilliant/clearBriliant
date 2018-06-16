<template>
  <div id="app">
    <img src="./assets/logo.png">
      <div>长沙卫康</div>
    <router-view/>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'App',
    // data() {
    //   return {
    //     key: value
    //   }
    // },
    created() {
      let params={
        code:0,
        status:1,
        time:0
      }
      axios.post('/api/second',params).then((res)=>{
        console.log(res)
      })
    }
  }

</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
