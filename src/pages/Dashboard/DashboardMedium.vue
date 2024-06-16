<script>
export default {
  data() {
    return {
      activeTab: "points",
    };
  },
};
</script>

<template>
  <div>
    <div
      class="flex flex-col gap-6 h-[640px] shadow-xl p-4 rounded-xl bg-white/30 backdrop:blur"
    >
      <div class="flex flex-row gap-6 w-[48.5%] h-[5%]">
        <button
          class="w-full h-full bg-sage-dark text-white text-lg hover:bg-sage rounded-xl"
          :class="{ 'bg-sage': activeTab === 'points' }"
          @click="activeTab = 'points'"
        >
          Points
        </button>
        <button
          class="w-full h-full bg-sage-dark text-white text-lg hover:bg-sage rounded-xl"
          :class="{ 'bg-sage': activeTab === 'analytics' }"
          @click="activeTab = 'analytics'"
        >
          Analytics
        </button>
        <button
          class="w-full h-full bg-sage-dark text-white text-lg hover:bg-sage rounded-xl"
          :class="{ 'bg-sage': activeTab === 'history' }"
          @click="activeTab = 'history'"
        >
          History
        </button>
      </div>
      <div v-show="activeTab === 'points'" class="flex flex-row gap-6 flex-1">
        <div class="flex flex-col gap-6 w-[50%] h-full">
          <div class="flex flex-row gap-12 h-[35%]">
            <div class="flex-1 bg-text-dark shadow-md rounded-xl">
              <p class="text-white text-lg">Points</p>
            </div>
            <div class="flex-1 bg-text-dark shadow-md rounded-xl"></div>
          </div>
          <div class="flex-1 bg-text-dark shadow-md rounded-xl"></div>
        </div>
        <!-- Right Column -->
        <div class="flex flex-col gap-6 w-[50%] h-full">
          <div class="flex-1 bg-text-dark shadow-md rounded-xl"></div>
          <div class="flex flex-row gap-12 h-[35%]">
            <div class="flex-1 bg-text-dark shadow-md rounded-xl"></div>
            <div class="flex-1 bg-text-dark shadow-md rounded-xl"></div>
          </div>
        </div>
      </div>
      <!-- Left Column -->

      <div
        v-show="activeTab === 'analytics'"
        class="flex flex-row gap-6 flex-1"
      >
        <div class="flex flex-col gap-6 w-[50%] h-full">
          <div class="flex flex-row gap-12 h-[35%]">
            <div class="flex-1 bg-text-dark shadow-md rounded-xl">
              <p class="text-white text-lg">Analytics</p>
            </div>
            <div class="flex-1 bg-text-dark shadow-md rounded-xl"></div>
          </div>
          <div class="flex-1 bg-text-dark shadow-md rounded-xl"></div>
        </div>
        <!-- Right Column -->
        <div class="flex flex-col gap-6 w-[50%] h-full">
          <div class="flex-1 bg-text-dark shadow-md rounded-xl"></div>
          <div class="flex flex-row gap-12 h-[35%]">
            <div class="flex-1 bg-text-dark shadow-md rounded-xl"></div>
            <div class="flex-1 bg-text-dark shadow-md rounded-xl"></div>
          </div>
        </div>
      </div>

      <div v-show="activeTab === 'history'" class="flex flex-row gap-6 flex-1">
        <div class="flex flex-col gap-6 w-[50%] h-full">
          <div class="flex flex-row gap-12 h-[35%]">
            <div class="flex-1 bg-text-dark shadow-md rounded-xl">
              <p class="text-white text-lg">History</p>
            </div>
            <div class="flex-1 bg-text-dark shadow-md rounded-xl"></div>
          </div>
          <div class="flex-1 bg-text-dark shadow-md rounded-xl"></div>
        </div>
        <!-- Right Column -->
        <div class="flex flex-col gap-6 w-[50%] h-full">
          <div class="flex-1 bg-text-dark shadow-md rounded-xl"></div>
          <div class="flex flex-row gap-12 h-[35%]">
            <div class="flex-1 bg-text-dark shadow-md rounded-xl"></div>
            <div class="flex-1 bg-text-dark shadow-md rounded-xl"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<!-- <template>
    <div class="mt-4">
      <div v-show="activeTab === 'analytics'">
      </div>
      <div v-show="activeTab === 'history'">
      </div>
      <div v-show="activeTab === 'points'">
      </div>
    </div>
  </div>
</template> -->
