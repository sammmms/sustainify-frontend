<script setup>
  const props = defineProps({
    title:String,
    cards:Array,
    round:String
  });

let carousel = document.getElementsByClassName("navigate");
</script>

<template>
  <div>
    <div class="flex justify-between items-end">
      <h2 class="ml-2 font-medium">{{ title }}</h2>
      <button class="bg-sage-dark px-[5px] rounded-[5px] h-7 text-[13px] mr-2 text-dark-tea">See More</button>
    </div>
    <div class="flex w-full overflow-x-auto mr-2">
        <img :class="'container rounded-' + round + ' w-1/2 md:w-1/5 lg:w-1/5 aspect-square bg-white mx-4 my-2 flex-none object-cover'" v-for="card in cards" :key="card" :src="card" />
    </div>
  </div>
</template>