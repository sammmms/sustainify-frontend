<script setup>
 import ExploreCarousel from "../components/ExploreCarousel.vue";

 let cards1 = [1, 2, 3, 4, 5, 6, 7, 8];
 let cards2 = [1, 2, 3, 4, 5, 6, 7, 8];
 let cards3 = [
  "https://images.pexels.com/photos/4927361/pexels-photo-4927361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/3619947/pexels-photo-3619947.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=600",
 ];
</script>

<template>
  <!-- navbar -->
  <div>
    <h1 class="text-4xl font-semibold mb-4 ease-out duration-300">Explore</h1>
    <iframe src="https://www.google.com/maps/d/embed?mid=1ykhGXbqdErBVO8UXSL9puxTvj--YSQM&ehbc=2E312F&noprof=1"
      height="400" frameBorder="0" style="border: 0;" allowfullscreen="" loading="lazy"
      referrerpolicy="no-referrer-when-downgrade" class="rounded-3xl w-full z-50 pointer-events-none"></iframe>
  </div>
  <ExploreCarousel title="Redeem" :cards=cards1 round="[10px]" />
  <ExploreCarousel title="Events" :cards=cards2 round="[10px]" />
  <ExploreCarousel title="People" :cards=cards3 round="full" />
</template>
