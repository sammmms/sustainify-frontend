<script setup>
let cards = [1, 2, 3, 4, 5, 6, 7, 8];

let carousel = document.getElementsByClassName("navigate");
</script>

<template>
  <!-- navbar -->
  <div>
    <h1 class="text-4xl font-semibold mb-4 ease-out duration-300">Explore</h1>
    <iframe src="https://www.google.com/maps/d/embed?mid=1ykhGXbqdErBVO8UXSL9puxTvj--YSQM&ehbc=2E312F&noprof=1"
      height="400" frameBorder="0" style="border: 0;" allowfullscreen="" loading="lazy"
      referrerpolicy="no-referrer-when-downgrade" class="rounded-3xl w-full z-50 pointer-events-none"></iframe>
  </div>
  <div>
    <div class="flex justify-between items-end">
      <h2 class="ml-2">Redeem</h2>
      <button class="bg-sage-dark px-[5px] rounded-[5px] h-7 text-[13px]">See More</button>
    </div>
    <div class="flex w-full overflow-x-auto">
        <div class="container rounded-[10px] w-1/2 md:w-1/5 lg:w-1/5 aspect-square bg-text-dark m-2 flex-none" v-for="card in cards" :key="card"></div>
    </div>
  </div>
  <p>{{cardWidth}}</p>
</template>
