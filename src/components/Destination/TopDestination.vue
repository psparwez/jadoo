<script lang="ts" setup>
import { destinations } from '@/constant/data'
import { reactive } from 'vue'

const Destinations = reactive(destinations)
</script>
<template>
  <section class="section__container text-center" id="destination">
    <h3 class="section__subheader">TOP SELLING</h3>
    <h2 class="section__header">Top Destinations</h2>

    <div class="mt-16 relative grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:gap-8">
      <div
        v-for="(item, index) in Destinations"
        :key="index"
        class="rounded-3xl overflow-hidden group bg-white w-full"
        style="box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.1)"
      >
        <img
          :src="item.image"
          :alt="item.location"
          class="w-full object-cover transition-transform duration-300 group-hover:scale-[1.03] max-h-[240px] min-h-[240px] sm:max-h-auto sm:min-h-[368px] group-hover:opacity-95"
        />
        <div class="py-4 px-6">
          <div class="mb-4 flex items-center justify-between gap-4">
            <h4 class="text-[1.2rem] font-medium text-muted-foreground">{{ item.location }}</h4>
            <h4 class="text-[1.2rem] font-medium text-muted-foreground">${{ item.price }}k</h4>
          </div>
          <p class="mb-4 font-semibold flex items-center gap-4 text-muted-foreground">
            <span class="text-foreground-dark">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                width="20"
                height="20"
                class="rotate-90"
              >
                <path
                  d="M2.89945 2.29983L21.7052 8.56842C21.9672 8.65574 22.1088 8.93891 22.0215 9.20088C21.975 9.3404 21.8694 9.45238 21.7328 9.507L13.0002 13.0001L8.57501 21.8504C8.45151 22.0974 8.15118 22.1975 7.90419 22.074C7.77883 22.0113 7.68553 21.8989 7.64703 21.7641L2.26058 2.91153C2.18472 2.64601 2.33846 2.36927 2.60398 2.29341C2.70087 2.26573 2.80386 2.26796 2.89945 2.29983Z"
                ></path>
              </svg>
            </span>
            {{ item.duration }} Days Trip
          </p>
        </div>
      </div>

      <div class="absolute -right-14 pointer-events-none hidden md:block -z-10 top-auto bottom-0">
        <img src="../../assets/destinations/Decore.svg" alt="" class="" />
      </div>
    </div>
  </section>
</template>

<style scoped></style>
