<script setup>
import DashboardLarge from "../Dashboard/DashboardLarge.vue";
import DashboardMed from "../Dashboard/DashboardMedium.vue";
</script>
<template>
  <DashboardLarge class="lg:block hidden" />
  <DashboardMed class="md:block hidden lg:hidden" />
</template>

<!-- <div class="flex flex-col gap-8 lg:max-w-[1280px] mx-auto px-10"> -->
