<template>
  <section class="flex flex-wrap mb-32">
    <picture class="relative flex-1">
      <img
        src="~@/assets/Image/pexels-kyle-kroeger-1673978.jpg"
        class="max-w-3xl overflow-hidden border-8 border-white shadow-xl"
        loading="lazy"
        alt=""
      />
      <img
        src="~@/assets/Image/airplane.jpg"
        class="max-w-sm absolute -right-10 -bottom-10 shadow-md border-8 border-white"
        loading="lazy"
        alt="飛行窗外圖"
      />
    </picture>
    <div class="pt-40 pl-40 pr-20 flex-1 companyProfileFont">
      <h3 class="text-4xl font-bold whitespace-nowrap">
        全台最優質的旅行安排公司
      </h3>
      <p class="mt-4 text-lg">
        別猶豫了，來一趟說走就走了旅行！日旅購是一家專注日本旅遊的規劃團隊！
      </p>
      <button type="button" class="mt-4 companyProfileBtn">了解更多</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "CompanyProfile",
};
</script>

<style lang="scss" scoped>
@import "~@/assets/Scss/_variable.scss";
.companyProfileBtn {
  background-color: $primary;
  color: $white;
  padding: 5px 10px;
  border: 2px solid $primary;
  border-radius: 5px;
  font-size: 1.125rem;
  transition: 0.25s all ease-in-out;
  &:hover {
    background-color: $white;
    color: $primary;
    border: 2px solid $primary;
    transition: 0.25s all ease-in-out;
  }
}
.companyProfileFont {
  font-family: "Microsoft JhengHei", PingFang, sans-serif, serif;
  text-align: justify;
}
</style>
