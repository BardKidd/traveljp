<template>
  <section
    class="container fixed z-50 flex flex-wrap items-center justify-between"
  >
    <div class="flex-auto">
      <img :src="Logo" alt="日旅購！的 Logo" />
    </div>
    <div
      class="flex flex-wrap flex-auto justify-around primary-white font-bold"
    >
      <router-link to="#">精選計畫</router-link>
      <router-link to="#">風俗文化</router-link>
      <router-link to="#">關於我們</router-link>
      <router-link to="#">常見問題</router-link>
      <button>X</button>
    </div>
  </section>
</template>

<script>
import Logo from "@/assets/Image/logo.png";
export default {
  name: "L-TopBar",
  setup() {
    return {
      Logo,
    };
  },
};
</script>
