<template>
  <section class="flex flex-wrap mb-32">
    <picture class="relative flex-1">
      <img
        src="~@/assets/Image/pexels-kyle-kroeger-1673978.jpg"
        class="max-w-3xl overflow-hidden border-8 border-white shadow-xl"
        alt=""
      />
      <img
        src="~@/assets/Image/airplane.jpg"
        class="max-w-sm absolute -right-10 -bottom-10 shadow-md border-8 border-white"
        alt="飛行窗外圖"
      />
    </picture>
    <div class="pt-40 pl-40 pr-20 flex-1 otherFont text-justify primary-black">
      <h3 class="text-4xl font-bold whitespace-nowrap">
        全台最優質的旅行安排公司
      </h3>
      <p class="mt-4 text-lg">
        別猶豫了，來一趟說走就走了旅行！日旅購是一家專注日本旅遊的規劃團隊！
      </p>
      <button type="button" class="mt-4 commonBtn">了解更多</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "CompanyProfile",
};
</script>
