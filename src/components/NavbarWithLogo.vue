<script setup>
  import { useRouter } from "vue-router";
  import { defineAsyncComponent } from "vue";
  const props = defineProps(["title", "iconsPath", "path"]);
  const NavbarWithLogo = defineAsyncComponent(() =>
    import(`../assets/${props.iconsPath}.svg?component`)
  );

  const router = useRouter();
</script>
<template>
  <div
    v-if="router.currentRoute.value.fullPath == props.path"
    class="hidden lg:flex gap-2 px-4 py-2 rounded-full bg-dark-tea-dark"
  >
    <div class="w-7 h-7 rounded-full bg-white flex justify-center items-center">
      <NavbarWithLogo />
    </div>
    <p class="text-white size-small font-semibold">{{ title }}</p>
  </div>
  <div
    v-if="router.currentRoute.value.fullPath != props.path"
    class="hidden lg:flex gap-2 px-4 py-2 rounded-full bg-matcha-dark"
  >
    <div class="w-7 h-7 rounded-full bg-white flex justify-center items-center">
      <NavbarWithLogo />
    </div>
    <p class="text-white size-small font-semibold">{{ title }}</p>
  </div>
</template>
