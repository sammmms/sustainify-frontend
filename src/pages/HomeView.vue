<script setup>
import { VueSlickCarousel } from "vue-slick-carousel";
</script>

<template>
  <div class="flex flex-col gap-12">
    <!-- The first section -->
    <div class="flex flex-col md:flex-row gap-4 h-[400px] md:h-[480px]">
      <div class="flex-1 bg-white shadow-md rounded-xl">
        <div class="p-10 font-semibold text-[30px]">Let's Save the World Together</div>
      </div>
      <div class="flex-1 bg-text-dark shadow-md rounded-xl">
        <VueSlickCarousel :arrows="true" :dots="true">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
        </VueSlickCarousel>
      </div>
    </div>

    <!-- The second section -->
    <div
      class="flex flex-col md:flex-row w-full h-[400px] md:h-[480px] lg:p-6 bg-white/30 shadow-md rounded-3xl backdrop-blur-lg">
      <div class="flex-1"></div>
      <div class="bg-matcha-dark rounded-3xl flex-1 order-first max-h-[300px] md:max-h-none md:order-last"></div>
    </div>

    <!-- The third section -->
    <div class="flex flex-col gap-8">
      <!-- The carousel -->
      <div class="relative h-[480px] w-full bg-text-dark rounded-3xl hidden md:block">
        <div class="absolute h-6 w-6 rounded-full mx-4 bg-white right-0 top-1/2" />
        <div class="absolute h-6 w-6 rounded-full mx-4 bg-white left-0 top-1/2" />
      </div>

      <!-- The headings -->
      <span>
        <h1>Goals</h1>
        <p class="size-large text-text text-wrap text-justify">
          According to the Sustainable Development Goals that our products tries
          to achieve
        </p>
      </span>

      <!-- The cards -->
      <div class="justify-between h-[200px] gap-4 overflow-x-auto mb-6 hidden md:flex">
        <div v-for="i in 5" class="flex flex-col min-w-[200px] w-[240px]">
          <div class="w-full flex-1 bg-matcha-dark shadow-md rounded-xl"></div>
          <div class="w-full h-[20px] bg-matcha-dark shadow-md rounded-md mt-2"></div>
        </div>
      </div>

      <!-- The cards explanation -->
      <div v-for="i in 5" class="flex flex-col md:flex-row gap-4 md:max-h-[220px] overflow-clip">
        <div class="flex flex-col w-full md:w-[210px] h-[300px] md:h-[200px]">
          <div class="flex-1 w-full bg-matcha-dark shadow-md rounded-xl"></div>
          <div class="w-full h-[20px] bg-matcha-dark shadow-md rounded-md mt-2"></div>
        </div>
        <p class="flex-1 text-wrap text-justify overflow-y-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          itaque architecto suscipit, tenetur veritatis expedita cum corporis ea
          enim eveniet culpa est ex assumenda at autem? Laboriosam praesentium
          est ex. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Veritatis nisi tenetur, veniam, dignissimos laborum earum architecto
          odio eum odit quis consectetur alias minus eveniet voluptates
          excepturi praesentium deleniti molestiae accusamus! Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Nisi fuga libero quos vero,
          corrupti impedit fugit blanditiis animi in quam, quasi rerum est omnis
          perferendis repellat. Ipsam atque sint quo?
        </p>
      </div>
    </div>
  </div>
</template>
