<script setup>
  import LongLogoSVG from "../assets/long_icon.svg?component";
</script>

<template>
  <div
    class="flex justify-between lg:w-[1280px] px-10 pt-10 pb-10 border-t-section-divider border-t bg-white"
  >
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
    <div class="mr-2">
      <LongLogoSVG />
    </div>
  </div>
</template>
