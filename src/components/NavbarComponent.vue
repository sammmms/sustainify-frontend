<script setup>
  import { RouterLink } from "vue-router";
  import LongLogoSVG from "../assets/long_icon.svg?component";
  import DashboardSVG from "../assets/dashboard_icon.svg?component";
  import ExploreSVG from "../assets/explore_icon.svg?component";
  import HomepageSVG from "../assets/homepage_icon.svg?component";

  import LogoSVG from "../assets/logo_icon.svg?component";
  import ProfileSVG from "../assets/profile_icon.svg?component";
</script>

<template>
  <nav class="flex h-[100px] justify-between items-center">
    <div class="flex gap-8 items-center">
      <RouterLink to="/">
        <LogoSVG class="lg:hidden" />
        <LongLogoSVG class="hidden lg:block" />
      </RouterLink>
      <RouterLink to="/">
        <p class="hidden lg:block text-dark-tea-dark">Homepage</p>
        <HomepageSVG class="block lg:hidden" />
      </RouterLink>
      <RouterLink to="/dashboard">
        <p class="hidden lg:block text-dark-tea-dark">Dashboard</p>
        <DashboardSVG class="lg:hidden" />
      </RouterLink>
      <RouterLink to="/explore">
        <p class="hidden lg:block text-dark-tea-dark">Explore</p>
        <ExploreSVG class="lg:hidden" />
      </RouterLink>
    </div>
    <div>
      <RouterLink to="/profile">
        <p class="hidden lg:block text-dark-tea-dark">Profile</p>
        <ProfileSVG class="lg:hidden" />
      </RouterLink>
    </div>
  </nav>
</template>
