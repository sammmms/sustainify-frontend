<script setup>
  import { RouterView } from "vue-router";
  import NavbarComponent from "./components/NavbarComponent.vue";
  import FooterComponent from "./components/FooterComponent.vue";
</script>

<template>
  <div class="flex flex-col gap-8 lg:max-w-[1280px] mx-auto px-10">
    <NavbarComponent />
    <RouterView />
    <FooterComponent />
  </div>
</template>
