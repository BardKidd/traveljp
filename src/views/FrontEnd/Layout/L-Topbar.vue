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
      class="flex flex-wrap flex-auto justify-around font-bold items-center"
      :class="isChangeStyle ? 'primary-black' : 'primary-white'"
    >
      <router-link
        class="hover:primary-red p-5 hover:bg-primary-white transition-all ease-in-out duration-150 rounded-t"
        :to="{ name: 'ShopList' }"
        >精選計畫</router-link
      >
      <router-link
        class="hover:primary-red p-5 hover:bg-primary-white transition-all ease-in-out duration-150 rounded-t"
        :to="{ name: 'ArticlesList' }"
        >旅遊札記</router-link
      >
      <router-link
        class="hover:primary-red p-5 hover:bg-primary-white transition-all ease-in-out duration-150 rounded-t"
        :to="{ name: 'AboutUs' }"
        >關於我們</router-link
      >
      <router-link
        class="hover:primary-red p-5 hover:bg-primary-white transition-all ease-in-out duration-150 rounded-t"
        to="#"
        >取得優惠</router-link
      >
      <router-link
        :to="{ name: 'ShoppingCart' }"
        class="hover:primary-red p-5 hover:bg-primary-white text-xl transition-all ease-in-out duration-150 rounded-t"
      >
        <font-awesome-icon :icon="['fas', 'shopping-cart']" />
      </router-link>
    </div>
  </section>
</template>

<script>
import Logo from "@/assets/Image/logo_red.png";
import { ref, watch, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";

export default {
  name: "L-TopBar",
  setup() {
    const router = useRouter();
    const route = useRoute();
    const isChangeStyle = ref(false);
    const handleScroll = (e) => {
      isChangeStyle.value =
        e.srcElement.scrollingElement.scrollTop > 0 ? true : false;
    };
    watch(
      () => route.name,
      (n) => {
        if (
          n === "ShopList" ||
          n === "HomePage" ||
          n === "ArticlesList" ||
          n === "AboutUs"
        ) {
          window.addEventListener("scroll", handleScroll);
        } else {
          window.removeEventListener("scroll", handleScroll);
          isChangeStyle.value = true;
        }
      }
    );

    onMounted(() => {
      if (
        route.name === "ShopList" ||
        route.name === "HomePage" ||
        route.name === "ArticlesList" ||
        route.name === "AboutUs"
      ) {
        window.addEventListener("scroll", handleScroll);
      } else {
        isChangeStyle.value = true;
      }
    });

    return {
      isChangeStyle,
      router,
      route,
      Logo,
    };
  },
};
</script>
