<script setup>
  import { ref } from "vue";
  import ThumbsUp from "../assets/thumb_up.svg?component";

  const props = defineProps({
    name: String,
    followers: Number,
    following: Number,
    cover: String,
    pronoun: String,
  });

  const currentView = ref(0);
</script>

<template>
  <div
    class="bg-white/20 backdrop-blur-md max-w-[1280px] min-h-[600px] shadow-md rounded-3xl m-4"
  >
    <!-- cover image -->
    <div class="bg-matcha-dark h-[125px] rounded-t-3xl"></div>

    <!-- profile details -->
    <div class="flex justify-between mx-10">
      <div class="relative top-[-75px] flex items-end">
        <div class="bg-[#D9D9D9] rounded-full w-[150px] h-[150px]"></div>
        <div class="px-5 pb-3">
          <p class="font-semibold text-[20px]">Test Test</p>
          <div class="flex gap-10 text-matcha">
            <p>he/him</p>
            <p><span class="font-semibold">1.1k</span> followers</p>
            <p><span class="font-semibold">500</span> following</p>
          </div>
        </div>
      </div>
      <div
        class="bg-matcha-dark h-full px-3 pt-1 mt-2 rounded-lg text-white flex gap-2"
      >
        <p class="font-semibold">Follow</p>
        <ThumbsUp />
      </div>
    </div>

    <div class="flex mb-10 mx-10 mt-[-30px] gap-7">
      <!-- right section -->
      <div class="h-svh w-[20vw] bg-[#D9D9D9] p-5 rounded-md font-semibold">
        <p class="text-[17px] py-2">Posts</p>
        <hr class="border-black" />
        <p class="text-[17px] py-2">Profile information</p>
        <hr class="border-black" />
        <p class="text-[17px] py-2">Brief Analytics</p>
      </div>

      <!-- left section -->
      <div class="h-svh w-full bg-[#D9D9D9] p-5 rounded-md overflow-y-scroll">
        <!-- posts -->
        <div class="flex gap-5 w-full h-full m-auto flex-col">
          <div
            class="grid grid-flow-col grid-cols-3 gap-5 w-full auto-cols-fr auto-rows-fr"
          >
            <div class="bg-black w-full aspect-square"></div>
            <div class="bg-black w-full aspect-square"></div>
            <div class="bg-black w-full aspect-square"></div>
          </div>
          <div
            class="grid grid-flow-col grid-cols-3 gap-5 w-full auto-cols-fr auto-rows-fr"
          >
            <div class="bg-black w-full aspect-square"></div>
            <div class="bg-black w-full aspect-square"></div>
            <div class="bg-black w-full aspect-square"></div>
          </div>
          <div
            class="grid grid-flow-col grid-cols-3 gap-5 w-full auto-cols-fr auto-rows-fr"
          >
            <div class="bg-black w-full aspect-square"></div>
            <div class="bg-black w-full aspect-square"></div>
            <div class="bg-black w-full aspect-square"></div>
          </div>
          <div
            class="grid grid-flow-col grid-cols-3 gap-5 w-full auto-cols-fr auto-rows-fr"
          >
            <div class="bg-black w-full aspect-square"></div>
            <div class="bg-black w-full aspect-square"></div>
            <div class="bg-black w-full aspect-square"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
