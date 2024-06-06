<script setup>
let cards = [1, 2, 3, 4, 5, 6, 7, 8];

let scrollbar = document.getele;
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
    <div class="flex w-full overflow-x-auto">
        <div class="w-[200px] h-[200px] bg-text-dark m-5 flex-none" v-for="card in cards" :key="card">
          {{ card }}
        </div>
    </div>
    <div class="flex justify-between">
      <button>prev</button>
      <button>next</button>
    </div>
  </div>
</template>
