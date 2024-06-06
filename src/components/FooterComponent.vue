<script setup>
  import LongLogoSVG from "../assets/long_icon.svg?component";
</script>

<template>
  <div class="flex w-full pt-6 justify-center items-center border-t-2 border-text-2 bg-white pb-24">
     <div class="flex justify-between lg:w-[1280px] px-10">
      <div class="flex gap-10">
        <ul class="text-[15px] leading-7">
          <li><h1 class="text-[21px] text-dark-tea-dark font-semibold pb-2">Company</h1></li>
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Dashboard</a></li>
          <li><a href="#">Explore</a></li>
        </ul>
        <ul class="text-[15px] leading-7">
          <li><h1 class="text-[21px] text-dark-tea-dark font-semibold pb-2">Explore</h1></li>
          <li><a href="#">Redeem</a></li>
          <li><a href="#">Events</a></li>
          <li><a href="#">People</a></li>
        </ul>
        <ul  class="text-[15px] leading-7">
          <li><h1 class="text-[21px] text-dark-tea-dark font-semibold pb-2">Contact Us</h1></li>
          <li><a href="#">Email</a></li>
          <li><a href="#">Phone</a></li>
        </ul>
      </div>
      <div>
        <LongLogoSVG />
        <p></p>
      </div>
     </div>
  </div>
</template>
