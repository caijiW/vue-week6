<template>
  <Navbar></Navbar>
  <!-- <img alt="Vue logo" src="../../assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <router-view></router-view>
   <Footer></Footer>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Navbar from '@/components/NavbarView.vue'
import Footer from '@/components/FooterView.vue'
export default {
  name: 'HomeView',
  components: {
    // HelloWorld, Navbar
    Navbar, Footer
  }
}
</script>
