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
  title: 'Travel the World | Jodoo',
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
