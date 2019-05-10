<template>
    <div class="app-wrapper">
      <div class="main-container">
        <navbar class="mynavbar"/>
        <app-main/>
        <p>Hello world</p>
      </div>
    </div>
</template>

<script>
import { Navbar, AppMain } from './components'

export default {
  name: 'Layout',
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
