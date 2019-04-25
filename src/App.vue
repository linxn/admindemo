<template>
  <div id="app">
    <!--test merge branch  project-frame-->
    <!--<router-view/>-->
    <el-form>
      <el-form-item prop="username">
        用户名<el-input name="username" type="text" class="id_input"/>
      </el-form-item>
      <el-form-item prop="username">
        密&nbsp;&nbsp;&nbsp;码<el-input name="password" type="password" class="psw_input"/>
      </el-form-item>
      <el-form-item>
        <el-button>登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'App'
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
