<template>
  <router-view />
</template>
<script>
import { useRouter } from "vue-router";
export default {
  name: "App",
  setup() {
    const router = useRouter();
    router.afterEach(() => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    });
  },
};
</script>
