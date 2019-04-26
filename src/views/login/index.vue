<template>
<!--  <form>
    <p>用户名<input type="text" class="id_input" v-model="loginForm.username"/></p>
    <p>密&nbsp;&nbsp;&nbsp;码<input type="password" class="psw_input" v-model="loginForm.password" /></p>
    <button @click="handleLogin">登录</button>
    <p>tips:username:{{loginForm.username}}, password:{{loginForm.password}}</p>
  </form>-->

  <el-form class="login-form">
    <el-form-item prop="username">
      <el-input name="username" type="text" class="id_input" placeholder="username" v-model="loginForm.username"/>
    </el-form-item>
    <el-form-item prop="username">
      <el-input name="password" type="password" class="psw_input" placeholder="password" v-model="loginForm.password" />
    </el-form-item>
    <el-form-item>
      <el-button @click="handleLogin">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      loginForm: {
        username: 'admin1',
        password: 'admin1'
      }
    }
  },
  methods: {
    handleLogin () {
      if (this.loginForm.username === 'admin1' && this.loginForm.password === 'admin2') {
        this.$router.push({path: '/Layout'})
      } else {
        alert('false')
      }
    }
  }
}
</script>

<style scoped>
<<<<<<< HEAD
.login-form{
  width: 250px;
  padding: 35px 35px 15px 35px;
  margin: 120px auto;
}
=======

>>>>>>> dev
</style>
