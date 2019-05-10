<template>
    <div class="app-wrapper">
      <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside"/>
      <sidebar class="sidebar-container"/>
      <div class="main-container">
        <navbar class="mynavbar"/>
        <app-main/>
        <p>Hello world</p>
      </div>
    </div>
</template>

<script>
import { Navbar, AppMain, Sidebar } from './components'
import ResizeMixin from './mixin/ResizeHandler'

export default {
  name: 'Layout',
  components: {
    Navbar,
    Sidebar,
    AppMain
  },
  mixins: [ResizeMixin],
  computed: {
    device () {
      // return this.$store.state.app.device
      return 'computer'
    },
    sidebar () {
      return this.$store.state.app.sidebar
    },
    classObj () {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile'
      }
    }
  },
  methosd: {
    handleClickOutside () {
      this.$store.dispatch('CloseSideBar', { withoutAnimation: false })
    }
  }
}
</script>

<style scoped>
  .app-wrapper {
  @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
  &.mobile.openSidebar{
     position: fixed;
     top: 0;
   }
  }
  .drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 999;
  }
  .mynavbar {
    position: relative;
    top: -60px;
  }
</style>
