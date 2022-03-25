<template>
  <Topbar></Topbar>
  <section class="mainBG">
    <img
      class="absolute top-0 left-0 right-0 bottom-0"
      :src="MainBG"
      alt="主視覺圖片"
    />
    <section class="absolute bottom-28 pl-12 z-20">
      <div class="z-30 pb-14 pl-6 w-full">
        <h1 class="leading-normal text-5xl primary-white tracking-widest">
          絢爛東方的海上國度
        </h1>
        <div
          class="rounded-md cursor-pointer primary-white shadow-lg border-2 mt-9 p-3 text-2xl hover:text-3xl mainBtn"
        >
          <span class="primary-white">開始探索！</span>
        </div>
      </div>
    </section>
    <div class="image_overlay"></div>
  </section>

  <Orderbar></Orderbar>
</template>

<script>
import Topbar from "./L-Topbar.vue";
import Orderbar from "./L-Orderbar.vue";
import MainBG from "@/assets/Image/mainBg.jpg";
export default {
  name: "L-Main",
  setup() {
    return {
      MainBG,
    };
  },
  components: {
    Topbar,
    Orderbar,
  },
};
</script>
