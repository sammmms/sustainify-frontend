<script setup>
  import ExploreCarousel from "../components/ExploreCarousel.vue";
  import { useRouter } from "vue-router";

  const route = useRouter();
  console.log(route.currentRoute.value);

  let cards1 = [
    "https://m.media-amazon.com/images/I/31r03j-5WcL.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIuMGU1COKZuYODREqW0BGn4rPgV6wHd3FiA&s",
    "https://livekortti.fi/pl/starbucks-gift-card-5-usd-us-68789.jpg",
    "https://play-lh.googleusercontent.com/vAycVoO8oR-1r4ioT-gqNAENjzvCTcnR1Gb9Y1PJaNU2UQnSps-K6K-KvUglc33LROg",
    "https://cdn.icon-icons.com/icons2/2845/PNG/512/zara_logo_icon_181327.png",
    "https://i.pinimg.com/564x/49/41/d4/4941d4c5c9c194fa533f50984042f667.jpg",
    "https://i0.wp.com/glutenfreesleuth.com/wp-content/uploads/2023/04/panda.webp?fit=800%2C416&ssl=1",
    "https://img.cryptorefills.com/logos_v2/hm.webp",
  ];
  let cards2 = [
    "https://images.pexels.com/photos/9034660/pexels-photo-9034660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/5487071/pexels-photo-5487071.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/7656742/pexels-photo-7656742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/7656719/pexels-photo-7656719.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/9543414/pexels-photo-9543414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/8543606/pexels-photo-8543606.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/12568264/pexels-photo-12568264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/9475434/pexels-photo-9475434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];
  let cards3 = [
    "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/4927361/pexels-photo-4927361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];
</script>

<template>
  <!-- navbar -->
  <div>
    <h1 class="text-4xl font-semibold mb-4 ease-out duration-300">Explore</h1>
    <iframe
      src="https://www.google.com/maps/d/embed?mid=1ykhGXbqdErBVO8UXSL9puxTvj--YSQM&ehbc=2E312F&noprof=1"
      height="400"
      frameBorder="0"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
      class="rounded-3xl w-full z-50 pointer-events-none"
    ></iframe>
  </div>
  <ExploreCarousel
    class="show-scrollbar"
    title="Redeem"
    :cards="cards1"
    round="[10px]"
  />
  <ExploreCarousel
    class="show-scrollbar"
    title="Events"
    :cards="cards2"
    round="[10px]"
  />
  <ExploreCarousel
    class="show-scrollbar"
    title="People"
    :cards="cards3"
    round="full"
  />
</template>
