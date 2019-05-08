<template>
    <div class="main-container">
      <el-button @click="logout" class="to-right">登出</el-button>
      <p>Hello world</p>
    </div>
</template>

<script>
export default {
  name: 'Layout',
  methods: {
    logout () {
      this.$store.dispatch('LogOut').then(() => {
        location.reload() // 为了重新实例化vue-router对象 避免bug
      })
    }
  }
}
</script>

<style scoped>
.to-right {
  float: right;
}
</style>
