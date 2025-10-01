<script lang="ts" setup>
import { useHead } from '@vueuse/head'
import { RouterLink } from 'vue-router'

useHead({
  title: 'Page Not Found - 404',
  meta: [
    {
      name: 'description',
      content: 'Oops! The page you are looking for does not exist.',
    },
    {
      property: 'og:title',
      content: '404 - Page Not Found',
    },
    {
      property: 'og:description',
      content: 'This page could not be found. Please check the URL or go back.',
    },
  ],
})
</script>
<template>
  <section class="min-h-screen section__container w-full">
    <div class="flex flex-col h-[calc(100vh-150px)] md:flex-row">
      <!-- Left Section -->
      <div class="w-full md:w-1/2 flex h-full flex-col justify-center">
        <div class="h-full pt-20 flex-1">
          <div class="text-primary font-semibold mb-2">404</div>
          <h1 class="text-4xl font-bold mb-4">Page not found</h1>
          <p class="text-muted-foreground mb-6">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <RouterLink to="/" class="text-primary hover:underline"> ← Back to home </RouterLink>
        </div>
        <div
          class="text-sm text-muted-foreground flex space-x-4 bg-white shadow-2xl rounded-xl pl-4 border-t-2 border-white p-5"
        >
          <a href="#" class="hover:underline">Contact support</a>
          <span>·</span>
          <a href="#" class="hover:underline">Status</a>
        </div>
      </div>

      <!-- Right Section (Image) -->
      <div class="w-full hidden md:block absolute right-0 top-0 md:w-1/2 h-80 md:h-screen">
        <img
          src="../assets/destinations/dest2.jpg"
          alt="Night sky"
          class="w-full h-full object-cover"
        />
      </div>
    </div>
  </section>
</template>

<style scoped></style>
