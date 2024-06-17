<script setup>
import DashboardLarge from "../Dashboard/DashboardLarge.vue";
import DashboardMed from "../Dashboard/DashboardMedium.vue";
import DashboardSmall from "../Dashboard/DashboardSmall.vue";
</script>
<template>
  <DashboardLarge class="lg:block hidden" />
  <DashboardMed class="md:block hidden lg:hidden" />
  <DashboardSmall class="sm:block md:hidden lg:hidden" />
</template>
