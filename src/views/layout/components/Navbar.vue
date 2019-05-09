<template>
    <div class="navbar">
      <!-- <el-dropdown-menu slot="dropdown" class="user-dropdown">
        <router-link class="inlineBlock" to="/">
          <el-dropdown-item>
            Home
          </el-dropdown-item>
        </router-link>
      </el-dropdown-menu> -->

    </div>
</template>

<script>
import { mapGetters } from 'vuex'
/*  import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'  */

export default {
/*  components: {
    Breadcrumb,
    Hamburger
  },  */
  computed: {
    ...mapGetters([
      'avatar'
    ])
  }
}
</script>

<style scoped>

</style>
