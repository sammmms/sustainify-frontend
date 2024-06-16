<script setup>
  import { ref } from "vue";

  let images = [
    "https://images.pexels.com/photos/3735215/pexels-photo-3735215.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/20720316/pexels-photo-20720316/free-photo-of-flower-near-moss-on-tree.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/7512846/pexels-photo-7512846.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  let goals = [
    "Sustainable Cities and Communities",
    "Industry, Innovation, and Infrastructure",
    "Decent Work and Economic Growth",
    "Life Below Water",
    "Life on Land",
  ];

  let goalDesc = [
    "Reducing littering plays a crucial role in fostering sustainable cities and communities, aligning with the Sustainable Development Goals (SDGs). By properly disposing of waste, individuals help reduce pollution, which directly enhances the cleanliness and aesthetics of urban environments. This contributes to healthier living conditions, minimizing the spread of disease and promoting well-being among residents. Additionally, reducing litter helps protect local wildlife and ecosystems, ensuring biodiversity is maintained. Furthermore, the practice encourages responsible consumption and waste management, fostering a culture of sustainability. In turn, this supports the development of resilient infrastructure and resource-efficient urban planning, essential components for achieving sustainable cities and communities.",
    "Not littering, combined with the innovation of IoT-integrated trash cans, significantly contributes to the Sustainable Development Goal of Industry, Innovation, and Infrastructure. By maintaining cleaner environments, communities can focus on building robust infrastructure without the burden of excessive waste management issues. IoT-integrated trash cans enhance this effort by using smart technology to monitor and optimize waste collection processes, reducing operational costs and improving efficiency. These smart bins can notify waste management services when they need to be emptied, ensuring timely collection and preventing overflow. This innovative approach supports the development of cutting-edge technologies and fosters a culture of continuous improvement and sustainability in urban planning. Consequently, it promotes economic growth, enhances the quality of urban infrastructure, and drives technological advancements, all essential elements for achieving sustainable industry and resilient infrastructure.",
    "Not littering, coupled with the innovation of IoT-integrated trash cans, significantly contributes to the Sustainable Development Goal of Decent Work and Economic Growth. Clean environments enhance the appeal of urban and rural areas, attracting businesses and tourists, which in turn stimulates local economies. IoT-integrated trash cans further this by streamlining waste management processes through real-time monitoring and data collection. This technology reduces the need for manual labor in waste collection, lowering operational costs and allowing for the reallocation of resources towards more skilled, higher-paying jobs in the technology and service sectors. Additionally, the increased efficiency and reduced waste management costs provide more capital for investment in other areas of the economy. These advancements foster innovation, support sustainable business practices, and create a healthier, more attractive environment for businesses and employees alike, driving economic growth and creating decent work opportunities.",
    "Not littering and the innovation of IoT-integrated trash cans significantly contribute to the Sustainable Development Goal of Life Below Water. Proper waste disposal prevents litter from entering waterways, where it can cause severe harm to marine ecosystems and wildlife. By reducing pollution at the source, we protect aquatic habitats and ensure cleaner, healthier oceans and rivers. IoT-integrated trash cans enhance this effort by optimizing waste collection and preventing overflow, reducing the likelihood of litter being swept into water bodies. These smart trash cans can alert waste management services when they are full, ensuring timely disposal and minimizing environmental contamination. This innovative approach helps maintain the delicate balance of marine ecosystems, supports biodiversity, and safeguards the health of marine life, ultimately contributing to the sustainability and resilience of our oceans and waterways.",
    "Not littering and the innovation of IoT-integrated trash cans significantly contribute to the Sustainable Development Goal of Life on Land. Proper waste management ensures that terrestrial ecosystems remain clean and free from pollutants that can harm wildlife and degrade natural habitats. IoT-integrated trash cans play a pivotal role in this by using smart technology to monitor and manage waste more efficiently. These advanced trash cans can detect when they are full and signal for timely collection, preventing litter from accumulating and reducing the risk of it spreading into natural areas. This technology helps minimize human impact on land ecosystems, promoting cleaner and healthier environments for plants, animals, and humans. Additionally, reducing waste overflow and ensuring proper disposal contribute to soil health and reduce the presence of harmful substances in the environment. Collectively, these efforts support the preservation of biodiversity, enhance the resilience of terrestrial ecosystems, and foster sustainable land use practices.",
  ];

  let goalImages = [
    "https://images.pexels.com/photos/15667324/pexels-photo-15667324/free-photo-of-futuristic-skyscraper-under-clear-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/7656994/pexels-photo-7656994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/847393/pexels-photo-847393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/162140/duckling-birds-yellow-fluffy-162140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  const count = ref(0);

  setInterval(() => {
    if (count.value <= 2) {
      count.value++;
    } else {
      count.value = 0;
    }
  }, 5000);
</script>

<template>
  <div class="flex flex-col gap-12">
    <!-- The first section -->
    <div class="flex flex-col md:flex-row gap-4 h-[400px] md:h-[480px]">
      <div
        class="flex-1 bg-white shadow-md rounded-xl flex flex-col justify-start md:justify-evenly"
      >
        <div
          class="px-10 pt-5 sd:p-10 font-semibold sm:text-[60px] text-[30px]"
        >
          Let's Save the World Together
        </div>
        <div
          class="px-10 pb-5 sd:p-10 text-[18px] text-dark-tea-dark underline"
        >
          <RouterLink to="/about-us">More about us &gt;</RouterLink>
        </div>
      </div>
      <Transition
        mode="out-in"
        class="flex-1 bg-text-dark shadow-md rounded-xl w-full h-[100px] md:h-full md:w-[40vw]"
      >
        <img class="w-[40vw] object-cover" :key="count" :src="images[count]" />
      </Transition>
    </div>

    <!-- The second section -->
    <div
      class="flex flex-col md:flex-row w-full h-[480px] lg:p-6 bg-white/30 shadow-md rounded-3xl backdrop-blur-lg"
    >
      <div class="flex-1 p-5">
        <h1 class="text-black font-bold text-[20px] md:text-[40px]">
          <span class="text-dark-tea-dark">Concept:</span> IOT integrated Bins
          and Gamifying Trash
        </h1>
        <div class="text-[14px] md:text-[18px] pt-[10px]">
          Gain points by simply throwing your trash into any of our smart IOT
          bins in your area.
        </div>
        <div
          class="text-[14px] md:text-[18px] pt-5 text-dark-tea-dark underline"
        >
          <RouterLink to="/explore">Find IOT bins around me &gt;</RouterLink>
        </div>
      </div>
      <div
        class="bg-matcha-dark rounded-3xl flex-1 order-first max-h-[300px] md:max-h-none md:order-last"
      >
        <img
          class="rounded-3xl flex-1 object-cover order-first h-full w-full md:order-last"
          src="https://www.toxel.com/wp-content/uploads/2009/04/trashcans12.jpg"
        />
      </div>
    </div>

    <!-- The third section -->
    <div class="flex flex-col gap-8">
      <!-- The carousel -->
      <div
        class="relative h-[480px] w-full bg-text-dark rounded-3xl hidden md:block"
      >
        <div
          class="absolute h-6 w-6 rounded-full mx-4 bg-white right-0 top-1/2"
        />
        <div
          class="absolute h-6 w-6 rounded-full mx-4 bg-white left-0 top-1/2"
        />
      </div>

      <!-- The headings -->
      <span>
        <h1>Goals</h1>
        <p class="size-large text-text text-wrap text-justify">
          According to the Sustainable Development Goals that our products tries
          to achieve
        </p>
      </span>

      <!-- The cards -->
      <div
        class="justify-between h-[250px] gap-4 overflow-x-auto mb-6 hidden md:flex"
      >
        <div
          v-for="(item, index) in goalImages"
          class="flex flex-col min-w-[200px] w-[240px]"
        >
          <div class="w-full flex-1 bg-matcha-darkshadow-md rounded-xl">
            <img class="h-full object-cover shadow-md rounded-xl" :src="item" />
          </div>
          <div class="w-full h-[50px] bg-matcha-dark shadow-md rounded-lg mt-2">
            <div class="m-auto text-center font-semibold">
              {{ goals[index] }}
            </div>
          </div>
        </div>
      </div>

      <!-- The cards explanation -->
      <div
        v-for="(item, index) in goals"
        class="flex flex-col md:flex-row gap-4 md:max-h-[220px] overflow-clip"
      >
        <div class="flex flex-col w-full md:w-[210px] h-[300px] md:h-[200px]">
          <div class="flex-1 w-full bg-matcha-dark shadow-md rounded-xl">
            <div
              class="w-full flex-1 bg-matcha-darkshadow-md rounded-xl h-full"
            >
              <img
                class="h-full object-cover shadow-md rounded-xl"
                :src="goalImages[index]"
              />
            </div>
          </div>
          <div class="w-full h-[50px] bg-matcha-dark shadow-md rounded-lg mt-2">
            <div class="m-auto text-center font-semibold">{{ item }}</div>
          </div>
        </div>
        <p class="flex-1 text-wrap text-justify overflow-y-auto">
          {{ goalDesc[index] }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.5s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
</style>
