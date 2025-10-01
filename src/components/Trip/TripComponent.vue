<script lang="ts" setup>
import TrimImage from '@/assets/trip.png'
</script>
<template>
  <section
    class="section__container flex flex-col-reverse lg:grid gap-8 grid-cols-1 lg:grid-cols-2 lg:items-center"
    id="trip"
  >
    <div class="trip__image">
      <img :src="TrimImage" alt="Trip Image" class="w-full" />
    </div>
    <div>
      <h3 class="section__subheader">EASY & FAST</h3>
      <h2 class="section__header">Book Your Next Trip In 3 Easy Steps</h2>
      <ul class="mt-8 grid gap-3 divide-y divide-zinc-100">
        <li class="flex sm:items-center pb-5 items-start sm:flex-row flex-col gap-4">
          <span
            class="size-14 inline-flex items-center justify-center shrink-0 text-[1.75rem] text-white rounded-2xl bg-[#f0bb1f]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              width="24"
              height="24"
            >
              <path
                d="M12 5H17.4142L21.7071 9.29289C22.0976 9.68342 22.0976 10.3166 21.7071 10.7071L17.4142 15H12V22H10V15H4C3.44772 15 3 14.5523 3 14V6C3 5.44772 3.44772 5 4 5H10V2H12V5ZM16.5858 13L19.5858 10L16.5858 7H5V13H16.5858Z"
              ></path>
            </svg>
          </span>
          <div>
            <h4 class="text-[1.2rem] font-medium text-foreground-dark">Choose Destination</h4>
            <p class="text-muted-foreground">
              Choose your dream destination from our curated selection of exotic locales, bustling
              cities, and serene getaways.
            </p>
          </div>
        </li>
        <li class="flex sm:items-center pb-5 items-start sm:flex-row flex-col gap-4">
          <span
            class="size-14 inline-flex items-center justify-center shrink-0 text-[1.75rem] text-white rounded-2xl bg-[#f15a2b]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              width="24"
              height="24"
            >
              <path
                d="M11.0049 2L18.3032 4.28071C18.7206 4.41117 19.0049 4.79781 19.0049 5.23519V7H21.0049C21.5572 7 22.0049 7.44772 22.0049 8V16C22.0049 16.5523 21.5572 17 21.0049 17L17.7848 17.0011C17.3982 17.5108 16.9276 17.9618 16.3849 18.3318L11.0049 22L5.62486 18.3318C3.98563 17.2141 3.00488 15.3584 3.00488 13.3744V5.23519C3.00488 4.79781 3.28913 4.41117 3.70661 4.28071L11.0049 2ZM11.0049 4.094L5.00488 5.97V13.3744C5.00488 14.6193 5.58406 15.7884 6.56329 16.5428L6.75154 16.6793L11.0049 19.579L14.7869 17H10.0049C9.4526 17 9.00488 16.5523 9.00488 16V8C9.00488 7.44772 9.4526 7 10.0049 7H17.0049V5.97L11.0049 4.094ZM11.0049 12V15H20.0049V12H11.0049ZM11.0049 10H20.0049V9H11.0049V10Z"
              ></path>
            </svg>
          </span>
          <div>
            <h4 class="text-[1.2rem] font-medium text-foreground-dark">Make Payment</h4>
            <p class="text-muted-foreground">
              Secure your adventure with ease through our streamlined payment process, ensuring a
              hassle-free booking experience.
            </p>
          </div>
        </li>
        <li class="flex sm:items-center pb-5 items-start sm:flex-row flex-col gap-4">
          <span
            class="size-14 inline-flex items-center justify-center shrink-0 text-[1.75rem] text-white rounded-2xl bg-[#006380]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              width="24"
              height="24"
            >
              <path
                d="M21.949 10.1118C22.1634 10.912 21.6886 11.7345 20.8884 11.9489L5.2218 16.1467C4.77856 16.2655 4.31138 16.0674 4.08866 15.6662L1.46582 10.9415L2.91471 10.5533L5.3825 12.9979L10.4778 11.6326L5.96728 4.55896L7.89913 4.04132L14.8505 10.4609L20.1119 9.05113C20.9121 8.83671 21.7346 9.31159 21.949 10.1118ZM4.00013 19H20.0001V21H4.00013V19Z"
              ></path>
            </svg>
          </span>
          <div>
            <h4 class="text-[1.2rem] font-medium text-foreground-dark">
              Reach Airport on Selected Date
            </h4>
            <p class="text-muted-foreground">
              Prepare for takeoff as you finalize your travel plans, arriving at the airport on your
              selected date ready to embark on your next unforgettable journey.
            </p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped></style>
