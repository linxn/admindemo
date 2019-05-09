<template>
    <div class="dashboard-container">
      <div class="dashboard-text">name:{{ name }}</div>
      <div class="dashboard-text">roles:<span v-for="role in roles">{{ role }}</div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name',
      'roles'
    ])
  }
}
</script>

<style scoped>

</style>
