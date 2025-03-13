<template>
  <div>
    <Navbar />
    <Sidebar>
      <router-view />
    </Sidebar>
    <Footer/>
  </div>
</template>

<script setup lang="ts">
import Navbar from './components/Navbar.vue';
import Sidebar from './components/Sidebar.vue';
import Footer from './components/Footer.vue';
</script>