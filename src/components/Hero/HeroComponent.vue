<script lang="ts" setup>
import HeroImages from './HeroImages.vue'
</script>
<template>
  <section
    class="section__container grid grid-cols-1 md:grid-cols-2 items-center gap-8 outline-hidden"
  >
    <div>
      <h3 class="section__subheader !text-sm md:!text-[1.2rem] !text-primary uppercase">
        BEST DESTINATIONS AROUND THE WORLD
      </h3>
      <h1
        class="mb-4 text-4xl md:text-[4.75rem] font-medium leading-14 md:leading-[5.5rem] text-foreground-dark"
      >
        Travel, enjoy and live a new and full life
      </h1>
      <p class="mb-8 leading-8 text-muted-foreground">
        It's an invitation to break free from the ordinary, immerse yourself in diverse cultures,
        and embrace the beauty of the world around you. Let every journey be a chapter in your story
        of living life to its fullest potential.
      </p>
      <div class="flex flex-col sm:flex-row items-center gap-8">
        <button class="btn !rounded-xl w-full sm:w-auto">Find out more</button>
        <a
          href="#"
          class="flex items-center gap-4 sm:w-auto w-full text-base font-medium text-gray-600 justify-center sm:justify-start duration-300 transition-all hover:text-gray-900"
        >
          <span
            class="size-12 inline-flex items-center justify-center text-2xl text-white bg-primary rounded-full shadow-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="size-7"
            >
              <path
                d="M19.376 12.4161L8.77735 19.4818C8.54759 19.635 8.23715 19.5729 8.08397 19.3432C8.02922 19.261 8 19.1645 8 19.0658V4.93433C8 4.65818 8.22386 4.43433 8.5 4.43433C8.59871 4.43433 8.69522 4.46355 8.77735 4.5183L19.376 11.584C19.6057 11.7372 19.6678 12.0477 19.5146 12.2774C19.478 12.3323 19.4309 12.3795 19.376 12.4161Z"
              ></path>
            </svg>
          </span>
          Play Demo
        </a>
      </div>
    </div>
    <HeroImages />
  </section>
</template>

<style scoped></style>
