<script setup>
  import { RouterView } from "vue-router";
  import NavbarComponent from "./components/NavbarComponent.vue";
  import FooterComponent from "./components/FooterComponent.vue";
  import WatermarkSVG from "./assets/watermark.svg?component";
</script>

<template>
  <div class="relative h-auto overflow-hidden">
    <div
      class="flex flex-col gap-8 lg:max-w-[1280px] mx-auto px-10 overflow-hidden"
    >
      <NavbarComponent />
      <RouterView />
      <FooterComponent />
    </div>
    <WatermarkSVG class="absolute z-[-1] top-10 w-full opacity-60" />
  </div>
</template>
