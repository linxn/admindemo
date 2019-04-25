<template>
<!--  <form>
    <p>用户名<input type="text" class="id_input" v-model="loginForm.username"/></p>
    <p>密&nbsp;&nbsp;&nbsp;码<input type="password" class="psw_input" v-model="loginForm.password" /></p>
    <button @click="handleLogin">登录</button>
    <p>tips:username:{{loginForm.username}}, password:{{loginForm.password}}</p>
  </form>-->

  <el-form>
    <el-form-item prop="username">
      用户名<el-input name="username" type="text" class="id_input" v-model="loginForm.username"/>
    </el-form-item>
    <el-form-item prop="username">
      密&nbsp;&nbsp;&nbsp;码<el-input name="password" type="password" class="psw_input" v-model="loginForm.password" />
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

</style>
