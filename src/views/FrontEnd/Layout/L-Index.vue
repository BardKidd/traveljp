<template>
  <Topbar></Topbar>
  <router-view></router-view>
  <FooterBar></FooterBar>
</template>

<script>
import Topbar from "@/views/FrontEnd/Layout/L-Topbar.vue";
import FooterBar from "@/views/FrontEnd/Layout/L-Footer.vue";
export default {
  name: "L-Index",
  components: {
    Topbar,
    FooterBar,
  },
};
</script>
