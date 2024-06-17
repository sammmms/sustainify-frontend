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
  <div class="flex flex-col">
    <div class="flex flex-row flex-1 gap-16 w-full h-10">
      <button
        class="w-full h-full bg-sage-dark text-white text-lg font-semibold hover:bg-sage rounded-3xl shadow-md"
        :class="{ 'bg-sage': activeTab === 'points' }"
        @click="activeTab = 'points'"
      >
        Points
      </button>
      <button
        class="w-full h-full bg-sage-dark text-white text-lg font-semibold hover:bg-sage rounded-3xl shadow-md"
        :class="{ 'bg-sage': activeTab === 'analytics' }"
        @click="activeTab = 'analytics'"
      >
        Analytics
      </button>
      <button
        class="w-full h-full bg-sage-dark text-white text-lg font-semibold hover:bg-sage rounded-3xl shadow-md"
        :class="{ 'bg-sage': activeTab === 'history' }"
        @click="activeTab = 'history'"
      >
        History
      </button>
    </div>

    <div class="flex flex-col mt-8 gap-12" v-show="activeTab === 'points'">
      <div
        class="flex flex-col h-[480px] bg-text-dark shadow-md rounded-3xl backdrop-blur-lg"
      ></div>
      <div
        class="flex flex-col h-[480px] bg-text-dark shadow-md rounded-3xl backdrop-blur-lg"
      ></div>
      <div class="flex flex-col gap-12 flex-1">
        <div class="flex flex-row gap-6 flex-1">
          <div class="flex-1 bg-text-dark shadow-md rounded-xl h-[360px]"></div>
          <div class="flex-1 bg-text-dark shadow-md rounded-xl h-[360px]"></div>
        </div>
        <div class="flex flex-row gap-6 flex-1">
          <div class="flex-1 bg-text-dark shadow-md rounded-xl h-[360px]"></div>
          <div class="flex-1 bg-text-dark shadow-md rounded-xl h-[360px]"></div>
        </div>
      </div>
    </div>
    <div class="flex flex-col mt-8 gap-12" v-show="activeTab === 'analytics'">
      <div
        class="flex flex-col h-[480px] bg-text-dark shadow-md rounded-3xl backdrop-blur-lg"
      ></div>
      <div
        class="flex flex-col h-[480px] bg-text-dark shadow-md rounded-3xl backdrop-blur-lg"
      ></div>
      <div class="flex flex-col gap-12 flex-1">
        <div class="flex flex-row gap-6 flex-1">
          <div class="flex-1 bg-text-dark shadow-md rounded-xl h-[360px]"></div>
          <div class="flex-1 bg-text-dark shadow-md rounded-xl h-[360px]"></div>
        </div>
        <div class="flex flex-row gap-6 flex-1">
          <div class="flex-1 bg-text-dark shadow-md rounded-xl h-[360px]"></div>
          <div class="flex-1 bg-text-dark shadow-md rounded-xl h-[360px]"></div>
        </div>
      </div>
    </div>
    <div class="flex flex-col mt-8 gap-12" v-show="activeTab === 'history'">
      <div
        class="flex flex-col h-[480px] bg-text-dark shadow-md rounded-3xl backdrop-blur-lg"
      ></div>
      <div
        class="flex flex-col h-[480px] bg-text-dark shadow-md rounded-3xl backdrop-blur-lg"
      ></div>
      <div class="flex flex-col gap-12 flex-1">
        <div class="flex flex-row gap-6 flex-1">
          <div class="flex-1 bg-text-dark shadow-md rounded-xl h-[360px]"></div>
          <div class="flex-1 bg-text-dark shadow-md rounded-xl h-[360px]"></div>
        </div>
        <div class="flex flex-row gap-6 flex-1">
          <div class="flex-1 bg-text-dark shadow-md rounded-xl h-[360px]"></div>
          <div class="flex-1 bg-text-dark shadow-md rounded-xl h-[360px]"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<!-- <div v-show="activeTab === 'analytics'" class="flex flex-col gap-6 flex-1">
      <div class="flex-1 bg-text-dark shadow-md rounded-xl h-[25%]"></div>
      <div class="flex-1 bg-text-dark shadow-md rounded-xl h-[25%]"></div>
      <div class="flex flex-row gap-6 flex-1 h-25%">
        <div class="flex-1 bg-text-dark shadow-md rounded-xl"></div>
        <div class="flex-1 bg-text-dark shadow-md rounded-xl"></div>
      </div>
      <div class="flex flex-row gap-6 flex-1 h-25%">
        <div class="flex-1 bg-text-dark shadow-md rounded-xl"></div>
        <div class="flex-1 bg-text-dark shadow-md rounded-xl"></div>
      </div>
    </div>
    <div v-show="activeTab === 'history'" class="flex flex-col gap-6 flex-1">
      <div class="flex-1 bg-text-dark shadow-md rounded-xl h-[25%]"></div>
      <div class="flex-1 bg-text-dark shadow-md rounded-xl h-[25%]"></div>
      <div class="flex flex-row gap-6 flex-1 h-25%">
        <div class="flex-1 bg-text-dark shadow-md rounded-xl"></div>
        <div class="flex-1 bg-text-dark shadow-md rounded-xl"></div>
      </div>
      <div class="flex flex-row gap-6 flex-1 h-25%">
        <div class="flex-1 bg-text-dark shadow-md rounded-xl"></div>
        <div class="flex-1 bg-text-dark shadow-md rounded-xl"></div>
      </div>
    </div> 
  </div>
</template> -->
