<template>
  <section
    :class="isChangeStyle ? 'bg-primary-white' : ''"
    class="container fixed z-50 flex flex-wrap items-center justify-between transition-all ease-in-out duration-150"
  >
    <div class="flex-auto">
      <img
        :src="Logo"
        alt="日旅購！的 Logo"
        class="cursor-pointer"
        @click="router.push({ name: 'HomePage' })"
      />
    </div>
    <div
      class="flex flex-wrap flex-auto justify-around font-bold"
      :class="isChangeStyle ? 'primary-black' : 'primary-white'"
    >
      <router-link
        class="hover:primary-red p-5 hover:bg-primary-white transition-all ease-in-out duration-150 rounded-t"
        :to="{ name: 'ShopList' }"
        >精選計畫</router-link
      >
      <router-link
        class="hover:primary-red p-5 hover:bg-primary-white transition-all ease-in-out duration-150 rounded-t"
        to="#"
        >旅遊札記</router-link
      >
      <router-link
        class="hover:primary-red p-5 hover:bg-primary-white transition-all ease-in-out duration-150 rounded-t"
        to="#"
        >關於我們</router-link
      >
      <router-link
        class="hover:primary-red p-5 hover:bg-primary-white transition-all ease-in-out duration-150 rounded-t"
        to="#"
        >常見問題</router-link
      >
      <button>X</button>
    </div>
  </section>
</template>

<script>
import Logo from "@/assets/Image/logo_red.png";
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "L-TopBar",
  setup() {
    const router = useRouter();
    const isChangeStyle = ref(false);
    const handleScroll = (e) => {
      isChangeStyle.value =
        e.srcElement.scrollingElement.scrollTop > 0 ? true : false;
    };
    window.addEventListener("scroll", handleScroll);
    return {
      isChangeStyle,
      router,
      Logo,
    };
  },
};
</script>
