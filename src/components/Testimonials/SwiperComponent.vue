<script lang="ts">
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import type SwiperClass from 'swiper'
import { reactive } from 'vue'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import { testimonials } from '@/constant/data'

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper: SwiperClass) => {
      console.log(swiper)
    }
    const onSlideChange = () => {
      console.log('slide change')
    }

    const Testimonials = reactive(testimonials)

    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y],
      Testimonials,
    }
  },
}
</script>

<template>
  <div class="relative h-[300px] sm:h-[400px]">
    <swiper
      :modules="modules"
      :direction="'vertical'"
      :slides-per-view="1"
      :space-between="30"
      :pagination="false"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      class="h-full"
      :navigation="{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }"
    >
      <swiper-slide
        class="flex items-center justify-center h-[150px] bg-white"
        v-for="(item, index) in Testimonials"
        :key="index"
      >
        <div class="relative isolate p-2 lg:p-[3rem_1rem_2rem_3rem]">
          <img
            :src="item.image"
            alt=""
            class="absolute hidden sm:block top-0 left-0 w-14 lg:max-w-20 rounded-full"
          />
          <div
            class="p-6 lg:p-8 rounded-2xl border-2 border-white shadow-[0_25px_50px_-12px_rgba(0,0,0,0.07)]"
          >
            <p class="mb-8 text-muted-foreground">
              {{ item.message }}
            </p>
            <div class="flex sm:hidden items-center gap-2">
              <img :src="item.image" alt="" class="block w-12 rounded-full" />
              <div class="">
                <h4 class="text-base text-foreground-dark font-semibold">{{ item.name }}</h4>
                <h5 class="text-sm font-medium text-muted-foreground">{{ item.title }}</h5>
              </div>
            </div>
            <h4 class="text-[1.2rem] hidden sm:block text-foreground-dark font-semibold">
              {{ item.name }}
            </h4>
            <h5 class="text-base font-medium hidden sm:block text-muted-foreground">
              {{ item.title }}
            </h5>
          </div>
        </div>
      </swiper-slide>
    </swiper>

    <!-- for mobile -->
    <div class="flex lg:hidden -translate-x-1/2 absolute bottom-0 left-1/2 gap-3 z-20">
      <!-- UP arrow for swiper-button-prev -->
      <button class="swiper-button-prev p-2 rounded-full shadow-lg !text-muted-foreground">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path
            d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"
          ></path>
        </svg>
      </button>

      <!-- DOWN arrow for swiper-button-next -->
      <button class="swiper-button-next !text-muted-foreground p-2 rounded-full shadow-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          width="20"
          height="20"
        >
          <path
            d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"
          ></path>
        </svg>
      </button>
    </div>
    <!-- For large screen -->
    <div class="lg:flex hidden flex-col absolute -right-20 top-32 gap-3 z-20">
      <!-- UP arrow for swiper-button-prev -->
      <button class="swiper-button-prev p-2 rounded-full shadow-lg !text-muted-foreground">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          width="20"
          height="20"
        >
          <path
            d="M11.9999 10.8284L7.0502 15.7782L5.63599 14.364L11.9999 8L18.3639 14.364L16.9497 15.7782L11.9999 10.8284Z"
          ></path>
        </svg>
      </button>

      <!-- DOWN arrow for swiper-button-next -->
      <button class="swiper-button-next !text-muted-foreground p-2 rounded-full shadow-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          width="20"
          height="20"
        >
          <path
            d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"
          ></path>
        </svg>
      </button>
    </div>
  </div>
</template>
