<script lang="ts" setup>
import { reactive } from 'vue'
import SocialLinks from './SocialLinks.vue'

const footerData = reactive({
  companyLinks: [
    { text: 'Home', href: '#home' },
    { text: 'Careers', href: '#' },
    { text: 'Mobile', href: '#' },
  ],
  contactLinks: [
    { text: 'Help/FAQ', href: '#' },
    { text: 'Press', href: '#' },
    { text: 'Affiliate', href: '#' },
  ],
  moreLinks: [
    { text: 'Airlinefees', href: '#' },
    { text: 'Airline', href: '#' },
    { text: 'Low fare tips', href: '#' },
    { text: 'Github', href: 'https://github.com/psparwez' },
  ],
})
</script>
<template>
  <footer class="border-t border-border/10">
    <div
      class="section__container grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5"
    >
      <div>
        <a href="/" class="text-[1.75rem] font-semibold text-foreground-dark">
          Jad<span class="text-primary">oo</span>.</a
        >
        <p class="mt-4 text-muted-foreground">
          Book your trip in minute, get full Control for much longer.
        </p>
      </div>
      <div>
        <h4 class="mb-6 text-[1.2rem] font-medium text-foreground-dark">Company</h4>
        <ul class="grid gap-4 text-muted-foreground">
          <li v-for="(link, index) in footerData.companyLinks" :key="index">
            <a :href="link.href" class="font-medium hover:text-primary">{{ link.text }}</a>
          </li>
        </ul>
      </div>

      <div>
        <h4 class="mb-6 text-[1.2rem] font-medium text-foreground-dark">Contact</h4>
        <ul class="grid gap-4 text-muted-foreground">
          <li v-for="(link, index) in footerData.contactLinks" :key="index">
            <a :href="link.href" class="font-medium hover:text-primary">{{ link.text }}</a>
          </li>
        </ul>
      </div>
      <div>
        <h4 class="mb-6 text-[1.2rem] font-medium text-foreground-dark">More</h4>
        <ul class="grid gap-4 text-muted-foreground">
          <li v-for="(link, index) in footerData.moreLinks" :key="index">
            <a :href="link.href" class="font-medium hover:text-primary">{{ link.text }}</a>
          </li>
        </ul>
      </div>
      <SocialLinks />
    </div>
    <div class="p-4 pb-10 text-[0.9rem] text-muted-foreground text-center">
      Copyright &copy; {{ new Date().getFullYear() }} Jadoo. All rights reserved@jadoo.co
    </div>
  </footer>
</template>

<style scoped></style>
