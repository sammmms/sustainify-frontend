<script setup>
  import LongLogoSVG from "../assets/long_icon.svg?component";
</script>

<template>
  <div
    class="flex w-full pt-12 justify-center items-center border-t-2 border-text-2 bg-white pb-32"
  >
    <div class="flex justify-between lg:w-[1280px] px-10">
      <div class="flex gap-10">
        <ul class="text-[15px] leading-7">
          <li>
            <h1 class="text-[21px] text-dark-tea-dark font-semibold pb-2">
              Company
            </h1>
          </li>
          <li><RouterLink to="/">Homepage</RouterLink></li>
          <li><RouterLink to="/dashboard">Dashboard</RouterLink></li>
          <li><RouterLink to="/explore">Explore</RouterLink></li>
          <li><RouterLink to="/about-us">About Us</RouterLink></li>
        </ul>
        <ul class="text-[15px] leading-7">
          <li>
            <h1 class="text-[21px] text-dark-tea-dark font-semibold pb-2">
              Explore
            </h1>
          </li>
          <li><RouterLink to="/explore/redeem">Redeem</RouterLink></li>
          <li><RouterLink to="/explore/events">Events</RouterLink></li>
          <li><RouterLink to="/explore/people">People</RouterLink></li>
        </ul>
        <ul class="text-[15px] leading-7">
          <li>
            <h1 class="text-[21px] text-dark-tea-dark font-semibold pb-2">
              Contact Us
            </h1>
          </li>
          <li><RouterLink to="/contact-us/email">Email</RouterLink></li>
          <li><RouterLink to="/contact-us/phone">Phone</RouterLink></li>
        </ul>
      </div>
      <div>
        <LongLogoSVG />
        <p></p>
      </div>
    </div>
  </div>
</template>
