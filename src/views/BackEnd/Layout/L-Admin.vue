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
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "BackendAdmin",
  setup() {
    const store = useStore();
    const isLoading = computed(() => store.getters.isLoading);

    return {
      zhTW,
      isLoading,
    };
  },
  components: {
    SideBar,
    NavBar,
  },
};
</script>
