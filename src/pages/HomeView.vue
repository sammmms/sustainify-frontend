<script setup>
let images = [
  "https://images.pexels.com/photos/3735215/pexels-photo-3735215.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/20720316/pexels-photo-20720316/free-photo-of-flower-near-moss-on-tree.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/7512846/pexels-photo-7512846.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
]
import { ref } from 'vue';

const count = ref(0);

setInterval(() => {
  if(count.value <= 2){
    count.value++;
  } else{
    count.value = 0;
  }
}, 5000);
</script>

<template>
  <div class="flex flex-col gap-12">
    <!-- The first section -->
    <div class="flex flex-col md:flex-row gap-4 h-[400px] md:h-[480px]">
      <div class="flex-1 bg-white shadow-md rounded-xl flex flex-col justify-evenly">
        <div class="p-10 font-semibold sm:text-[60px] text-[30px]">Let's Save the World Together</div>
        <div class="p-10 text-[18px] text-dark-tea-dark underline">
          <RouterLink to="/about-us">More about us &gt;</RouterLink>
        </div>
      </div>
      <Transition mode="out-in" class="flex-1 bg-text-dark shadow-md rounded-xl w-[40vw]">
          <img class="w-[40vw] object-cover" :key="count" :src="images[count]" />
      </Transition>
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

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>