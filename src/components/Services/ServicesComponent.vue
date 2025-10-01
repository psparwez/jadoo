<script lang="ts" setup>
import { services } from '@/constant/data'
import { reactive } from 'vue'

const Services = reactive(services)
</script>
<template>
  <section class="section__container text-center" id="service">
    <h3 class="section__subheader">CATEGORY</h3>
    <h2 class="section__header">We Offer <span>Best Services</span></h2>
    <div class="mt-16 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
      <div
        v-for="(item, index) in Services"
        :key="index"
        class="lg:p-8 py-8 px-1 hover:-translate-y-1.5 rounded-4xl transition-all duration-300 card__shadow border-2 border-white"
      >
        <img :src="item.image" :alt="item.title" class="mb-8 mx-auto max-w-[60px]" />
        <h4 class="mb-4 text-[1.2rem] font-semibold text-foreground-dark">{{ item.title }}</h4>
        <p class="text-muted-foreground">{{ item.description }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
