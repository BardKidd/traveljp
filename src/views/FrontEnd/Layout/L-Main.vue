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
        <h1
          class="leading-normal text-4xl primary-white tracking-widest after:content-[''] after:h-0.5 after:block after:bg-white mainTitle"
        >
          絢爛東方的海上國度
        </h1>
        <div class="mt-3 text-center">
          <button type="button" class="mainBtn">開始探索！</button>
        </div>
      </div>
    </section>
    <div class="image_overlay"></div>
  </section>

  <Orderbar></Orderbar>
  <CompanyProfile></CompanyProfile>
  <SplitPage></SplitPage>
</template>

<script>
import Topbar from "./L-Topbar.vue";
import Orderbar from "@/views/FrontEnd/Main/Orderbar.vue";
import SplitPage from "@/views/FrontEnd/Main/SplitPage.vue";
import CompanyProfile from "@/views/FrontEnd/Main/CompanyProfile.vue";
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
    SplitPage,
    CompanyProfile,
  },
};
</script>
