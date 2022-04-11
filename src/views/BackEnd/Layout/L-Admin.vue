<template>
  <el-config-provider :locale="zhTW">
    <section class="flex flex-row container">
      <div class="w-1/6 min-h-screen bg-primary-retouch2 shadow-xl">
        <SideBar></SideBar>
      </div>
      <div class="w-5/6">
        <NavBar></NavBar>
        <LoadingOverlay v-model:active="isLoading">
          <template v-slot:after>
            <p class="block font-bold primary-black mt-3 text-lg">處理中...</p>
          </template>
        </LoadingOverlay>
        <!-- admin 頁圖示 開始 -->
        <div
          v-if="path === '/admin'"
          class="opacity-30 relative w-full h-screen"
        >
          <div
            class="CenterVertically absolute rounded-full bg-primary-red w-[300px] h-[300px]"
          ></div>
          <img
            class="CenterVertically absolute"
            src="~@/assets/Image/logo.png"
            alt="LOGO"
          />
        </div>
        <!-- admin 頁圖示 結束 -->

        <section class="p-14">
          <router-view></router-view>
        </section>
      </div>
    </section>
  </el-config-provider>
</template>

<script>
import SideBar from "./L-Sidebar.vue";
import NavBar from "./L-Navbar.vue";
import zhTW from "element-plus/lib/locale/lang/zh-tw";
import { computed, ref, watch } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

export default {
  name: "BackendAdmin",
  setup() {
    const store = useStore();
    const route = useRoute();
    const path = ref(route.path);
    const isLoading = computed(() => store.getters.isLoading);

    watch(
      () => route.path,
      (n) => {
        if (n) {
          path.value = n;
        }
      }
    );

    return {
      zhTW,
      isLoading,
      path,
    };
  },
  components: {
    SideBar,
    NavBar,
  },
};
</script>
