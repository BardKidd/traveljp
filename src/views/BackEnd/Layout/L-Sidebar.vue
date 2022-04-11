<template>
  <section class="h-full flex flex-col">
    <div class="shadow-md rounded">
      <img :src="Logo" alt="日旅購！的 Logo" />
    </div>
    <div
      class="flex-1 flex flex-col text-xl primary-red font-bold leading-10 p-5"
    >
      <router-link
        class="flex flex-wrap opacity-60 hover:opacity-100 items-center"
        :to="{ name: 'BStrictPlan' }"
      >
        <font-awesome-icon class="mr-3" :icon="['fas', 'globe-asia']" />
        嚴選計畫
      </router-link>
      <router-link
        class="flex flex-wrap opacity-60 hover:opacity-100 items-center"
        :to="{ name: 'BOrderList' }"
      >
        <font-awesome-icon class="mr-3" :icon="['fas', 'list-alt']" />
        訂單列表
      </router-link>
      <router-link
        class="flex flex-wrap opacity-60 hover:opacity-100 items-center"
        :to="{ name: 'BCoupon' }"
      >
        <font-awesome-icon class="mr-3" :icon="['fas', 'star']" />
        優惠券
      </router-link>
      <router-link
        class="flex flex-wrap opacity-60 hover:opacity-100 items-center"
        :to="{ name: 'BArticles' }"
      >
        <font-awesome-icon class="mr-3" :icon="['fas', 'newspaper']" />
        旅遊札記
      </router-link>
    </div>
  </section>
</template>

<script>
import Logo from "@/assets/Image/logo.png";
export default {
  name: "Back_SideBar",
  setup() {
    return {
      Logo,
    };
  },
};
</script>

<style lang="scss">
.router-link-exact-active {
  opacity: 1 !important;
}
</style>
