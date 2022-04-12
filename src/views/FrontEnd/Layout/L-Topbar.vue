<template>
  <section
    :class="isChangeStyle ? 'lg:bg-transparent' : 'lg:bg-primary-white'"
    class="bg-primary-white w-screen fixed z-50 flex flex-wrap items-center justify-between transition-all ease-in-out duration-150"
  >
    <div class="flex-auto">
      <img
        :src="Logo"
        alt="日旅購！的 Logo"
        class="w-[200px] h-[100px] mx-auto lg:m-0 cursor-pointer"
        @click="
          router.push({ name: 'HomePage' });
          isOpenAccordion = false;
        "
      />
    </div>
    <font-awesome-icon
      v-if="!isOpenAccordion"
      @click="isOpenAccordion = true"
      class="lg:hidden fixed cursor-pointer primary-red text-2xl top-10 right-10"
      :icon="['fas', 'bars']"
    />
    <font-awesome-icon
      v-else
      @click="isOpenAccordion = false"
      class="lg:hidden fixed cursor-pointer primary-red text-2xl top-10 right-10"
      :icon="['fas', 'times']"
    />
    <div
      class="lg:flex w-full lg:w-auto flex-wrap flex-auto justify-around font-bold items-center lg:h-full"
      :class="{
        'primary-black': !isChangeStyle,
        'lg:primary-white': isChangeStyle,
        hidden: !isOpenAccordion,
        'h-screen': isOpenAccordion,
      }"
    >
      <router-link
        class="block text-center hover:primary-red p-5 hover:bg-primary-white border-b lg:border-0 transition-all ease-in-out duration-150 rounded-t"
        :to="{ name: 'ShopList' }"
        @click="isOpenAccordion = false"
        >精選計畫</router-link
      >
      <router-link
        class="block text-center hover:primary-red p-5 hover:bg-primary-white border-b lg:border-0 transition-all ease-in-out duration-150 rounded-t"
        :to="{ name: 'ArticlesList' }"
        @click="isOpenAccordion = false"
        >旅遊札記</router-link
      >
      <router-link
        class="block text-center hover:primary-red p-5 hover:bg-primary-white border-b lg:border-0 transition-all ease-in-out duration-150 rounded-t"
        :to="{ name: 'AboutUs' }"
        @click="isOpenAccordion = false"
        >關於我們</router-link
      >
      <router-link
        class="block text-center hover:primary-red p-5 hover:bg-primary-white border-b lg:border-0 transition-all ease-in-out duration-150 rounded-t"
        :to="{ name: 'OrderSearch' }"
        @click="isOpenAccordion = false"
        >訂單查詢</router-link
      >
      <router-link
        :to="{ name: 'ShoppingCart' }"
        class="block text-center hover:primary-red p-5 hover:bg-primary-white border-b lg:border-0 text-xl transition-all ease-in-out duration-150 rounded-t"
        @click="isOpenAccordion = false"
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
    const isOpenAccordion = ref(false);
    const handleScroll = (e) => {
      isChangeStyle.value =
        e.srcElement.scrollingElement.scrollTop > 0 ? false : true;
    };
    watch(
      () => route.name,
      (n) => {
        if (
          n === "ShopList" ||
          n === "HomePage" ||
          n === "ArticlesList" ||
          n === "AboutUs" ||
          n === "OrderSearch"
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
        route.name === "AboutUs" ||
        route.name === "OrderSearch"
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
      isOpenAccordion,
    };
  },
};
</script>
