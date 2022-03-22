<template>
  <Topbar></Topbar>
  <section class="mainBG container"></section>
  <section class="container flex z-20 h-screen">
    <div class="flex-1 relative font-black">
      <div class="absolute CenterVertically w-full">
        <h1 class="leading-normal text-5xl primary-white tracking-widest">
          絢爛東方的海上國度
        </h1>
        <!-- <h1 class="leading-normal text-9xl primary-white">日本</h1> -->
        <div
          class="rounded-md cursor-pointer primary-white shadow-lg border-2 mt-9 p-3 text-2xl hover:text-3xl mainBtn"
        >
          <span class="primary-white">開始探索！</span>
        </div>
      </div>
    </div>
    <div class="flex-1"></div>
  </section>
</template>

<script>
import Topbar from "./L-Topbar.vue";
export default {
  name: "L-Main",
  components: {
    Topbar,
  },
};
</script>
