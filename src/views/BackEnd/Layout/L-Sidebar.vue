<template>
  <section class="min-h-screen flex flex-col">
    <div class="shadow-md rounded">
      <img :src="Logo" alt="日旅購！的 Logo" />
    </div>
    <div
      class="flex-1 flex flex-col text-xl primary-red font-bold leading-10 p-5"
    >
      <router-link
        class="inline-block opacity-60 hover:opacity-100 align-middle"
        :to="{ name: 'BStrictPlan' }"
      >
        <!-- <font-awesome-icon
          class="pr-2"
          :icon="['fas', 'location-dot']"
        /> -->
        嚴選計畫
      </router-link>
      <router-link
        class="inline-block opacity-60 hover:opacity-100 align-middle"
        to="#"
      >
        <!-- <font-awesome-icon class="pr-2" :icon="['fas', 'list']" /> -->
        訂單列表
      </router-link>
      <router-link
        class="inline-block opacity-60 hover:opacity-100 align-middle"
        to="#"
      >
        <!-- <font-awesome-icon class="pr-2" :icon="['fas', 'star']" /> -->
        優惠券
      </router-link>
      <router-link
        class="inline-block opacity-60 hover:opacity-100 align-middle"
        to="#"
      >
        <!-- <font-awesome-icon class="pr-2" :icon="['fas', 'book']" /> -->
        旅遊札記
      </router-link>
    </div>
    <div class="shadow-inner text-right">
      <span
        class="rounded bg-primary-retouch w-10 h-10 inline-block text-center text-xl cursor-pointer"
        title="縮放側邊欄按鈕"
      >
        <!-- <font-awesome-icon class="align-middle" :icon="['fas', 'angle-left']" /> -->
      </span>
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
