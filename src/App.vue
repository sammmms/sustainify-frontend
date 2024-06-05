<script setup>
  import { RouterView } from "vue-router";
  import NavbarComponent from "./components/NavbarComponent.vue";
</script>

<template>
  <div class="lg:max-w-[1280px] md:max-w-[720px] max-w-[480px] mx-auto px-10">
    <NavbarComponent />
    <RouterView />
  </div>
</template>
