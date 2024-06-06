<script setup>
  import { RouterView } from "vue-router";
  import NavbarComponent from "./components/NavbarComponent.vue";
  import FooterComponent from "./components/FooterComponent.vue";
  import WatermarkSVG from "./assets/watermark.svg?component";
</script>

<template>
  <div class="flex flex-col gap-8 lg:max-w-[1280px] mx-auto py-10 px-10 overflow-hidden relative">
    <NavbarComponent />
    <RouterView />
    <WatermarkSVG class="absolute z-[-1] top-10 w-full opacity-60 h-auto" />
    </div>
  <FooterComponent />
</template>