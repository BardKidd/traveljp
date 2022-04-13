<template>
  <section class="lg:flex flex-wrap mb-32">
    <picture class="relative lg:flex-1">
      <img
        src="~@/assets/Image/pexels-kyle-kroeger-1673978.jpg"
        class="w-screen lg:w-full overflow-hidden shadow-xl lg:border-8 lg:border-white"
        alt=""
      />
      <img
        src="~@/assets/Image/airplane.jpg"
        class="hidden xl:block max-w-sm absolute -right-24 -bottom-20 shadow-md border-8 border-white"
        alt="飛行窗外圖"
      />
    </picture>
    <div
      class="pt-10 pl-10 pr-10 lg:pt-20 lg:pl-20 lg:flex-1 xl:pt-40 xl:pl-40 otherFont text-justify primary-black"
    >
      <h3 class="text-xl sm:text-2xl md:text-4xl font-bold whitespace-nowrap">
        全台最優質的旅行安排公司
      </h3>
      <p class="mt-4 text-md sm:text-lg">
        別猶豫了，來一趟說走就走了旅行！日旅購是一家專注日本旅遊的規劃團隊！
      </p>
      <button
        type="button"
        @click="router.push({ name: 'AboutUs' })"
        class="mt-4 commonBtn"
      >
        了解更多
      </button>
    </div>
  </section>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  name: "CompanyProfile",
  setup() {
    const router = useRouter();
    return {
      router,
    };
  },
};
</script>
