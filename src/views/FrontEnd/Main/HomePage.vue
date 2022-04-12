<template>
  <section class="mainBG">
    <section class="absolute bottom-28 pl-12 z-20">
      <div class="z-30 pb-14 pl-6 w-full">
        <h1
          class="leading-normal text-4xl primary-white tracking-widest after:content-[''] after:h-0.5 after:block after:bg-white mainTitle"
        >
          絢爛東方的海上國度
        </h1>
        <div class="mt-3 text-center">
          <router-link
            :to="{ name: 'ShopList' }"
            class="mainBtn transition-all duration-200 ease-in-out"
          >
            開始探索！
          </router-link>
        </div>
      </div>
    </section>
  </section>
  <Orderbar></Orderbar>
  <CompanyProfile></CompanyProfile>
  <SplitPage></SplitPage>
</template>

<script>
import Orderbar from "@/views/FrontEnd/Main/Orderbar.vue";
import SplitPage from "@/views/FrontEnd/Main/SplitPage.vue";
import CompanyProfile from "@/views/FrontEnd/Main/CompanyProfile.vue";

export default {
  name: "HomePage",
  setup() {
    return {};
  },
  components: {
    Orderbar,
    SplitPage,
    CompanyProfile,
  },
};
</script>
