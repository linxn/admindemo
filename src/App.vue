<template>
  <div id="app">
    <!--test merge branch  project-frame-->
<!--    <router-view/>-->
    <el-button type="primary" @click="created">测试mock&axios</el-button>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    created () {
      this.$axios.get('/user/userInfo')
        .then(function (res) {
          console.log(res.data.data.username)
          console.log('bbb')
        })
        .catch(function (err) {
          console.log(err)
          console.log('aaa')
        })
    }
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
