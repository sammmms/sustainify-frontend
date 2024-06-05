<script setup>
  import { RouterLink } from "vue-router";
  import LogoSVG from "../assets/long_icon.svg?component";
</script>

<template>
  <nav class="flex justify-between items-center">
    <div class="flex gap-8 items-center">
      <RouterLink to="/">
        <LogoSVG />
      </RouterLink>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/dashboard">Dashboard</RouterLink>
      <RouterLink to="/explore">Explore</RouterLink>
    </div>
    <div>
      <RouterLink to="/profile">Profile</RouterLink>
    </div>
  </nav>
</template>
