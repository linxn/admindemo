<template>
    <div class="main-container">
      <el-button @click="logout" class="to-right">登出</el-button>
      <div class="main-container">
        <navbar/>
        <app-main/>
        <p>Hello world</p>
      </div>
    </div>
</template>

<script>
import { Navbar, AppMain } from './components'

export default {
  name: 'Layout',
  methods: {
    logout () {
      this.$store.dispatch('LogOut').then(() => {
        location.reload() // 为了重新实例化vue-router对象 避免bug
      })
    }
  },
  components: {
    Navbar,
    AppMain
  },
  computed: {
    device () {
      // return this.$store.state.app.device
      return 'computer'
    }
  }
}
</script>

<style scoped>
.to-right {
  float: right;
}
</style>
