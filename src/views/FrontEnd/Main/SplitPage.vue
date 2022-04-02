<template>
  <div class="container relative w-full h-full overflow-hidden">
    <div class="absolute w-2/4 h-full overflow-hidden leftPage">
      <h3
        class="text-6xl absolute left-2/4 top-1/4 -translate-x-1/2 whitespace-nowrap"
      >
        東京
      </h3>
      <button
        class="block absolute left-2/4 top-1/4 text-center border font-bold"
        type="button"
      >
        閱讀更多
      </button>
    </div>
    <!-- <div class="split right">
      <h3 class="">京都</h3>
      <button class="pageButton" type="button">閱讀更多</button>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "SplitPage",
};
</script>

<style lang="scss" scoped>
.leftPage {
  background-image: url("~@/assets/Image/tokyotower.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
