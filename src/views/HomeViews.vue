<script lang="ts" setup>
import BrandLogoComponent from '@/components/BrandLogo/BrandLogoComponent.vue'
import CTAComponent from '@/components/CTA/CTAComponent.vue'
import TopDestination from '@/components/Destination/TopDestination.vue'
import HeroComponent from '@/components/Hero/HeroComponent.vue'
import ServicesComponent from '@/components/Services/ServicesComponent.vue'
import TestimonialsComponent from '@/components/Testimonials/TestimonialsComponent.vue'
import TripComponent from '@/components/Trip/TripComponent.vue'
import { useHead } from '@vueuse/head'

useHead({
  title: 'Jadoo Travel - Explore the World',
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
    {
      name: 'description',
      content:
        'Discover unforgettable travel experiences with Jodoo. Plan your perfect vacation with ease and explore destinations worldwide.',
    },
    {
      name: 'keywords',
      content: 'travel, vacation, destinations, tours, Jodoo, travel planning, trips, holidays',
    },
    { property: 'og:title', content: 'Jadoo Travel - Explore the World' },
    {
      property: 'og:description',
      content: 'Discover unforgettable travel experiences with Jadoo.',
    },
    { property: 'og:image', content: '/jadoo_banner.jpg' },
    { property: 'og:url', content: 'https://jadoo-travel-ps.vercel.app' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Jadoo Travel - Explore the World' },
    {
      name: 'twitter:description',
      content: 'Discover unforgettable travel experiences with Jadoo.',
    },
    { name: 'twitter:image', content: '/jadoo_banner.jpg' },
    { name: 'author', content: 'Jodoo Travel Team (Build by @psparwez)' },
    { name: 'theme-color', content: '#fd6832' },
  ],
})
</script>
<template>
  <HeroComponent />
  <ServicesComponent />
  <TopDestination />
  <TripComponent />
  <TestimonialsComponent />
  <BrandLogoComponent />
  <CTAComponent />
</template>

<style scoped></style>
