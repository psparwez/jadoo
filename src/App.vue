<script setup lang="ts">
import { onMounted } from 'vue'
import FooterComponent from './components/Footer/FooterComponent.vue'
import NavLinks from './components/Header/NavLinks.vue'
import { createLenis } from './utils/lenis'

onMounted(() => {
  createLenis()
})
</script>

<template>
  <NavLinks />
  <main class="flex flex-col min-h-screen">
    <router-view />
  </main>
  <FooterComponent />
</template>

<style scoped></style>
