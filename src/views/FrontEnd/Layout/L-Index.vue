<template>
  <Topbar></Topbar>
  <LoadingOverlay v-model:active="isLoading">
    <template v-slot:after>
      <p class="block font-bold primary-black mt-3 text-lg">處理中...</p>
    </template>
  </LoadingOverlay>
  <router-view></router-view>
  <FooterBar></FooterBar>
</template>

<script>
import Topbar from "@/views/FrontEnd/Layout/L-Topbar.vue";
import FooterBar from "@/views/FrontEnd/Layout/L-Footer.vue";
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "L-Index",
  setup() {
    const store = useStore();
    const isLoading = computed(() => store.getters.isLoading);
    return {
      isLoading,
    };
  },
  components: {
    Topbar,
    FooterBar,
  },
};
</script>
