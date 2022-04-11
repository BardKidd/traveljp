<template>
  <section class="bg-primary-retouch2 shadow-md text-right w-full p-2.5">
    <div class="cursor-pointer text-2xl inline-flex justify-end">
      <span class="mr-3" @click="goHome" title="回首頁">
        <font-awesome-icon :icon="['fas', 'home']" />
      </span>
      <span @click="logout" title="登出">
        <font-awesome-icon :icon="['fas', 'sign-out-alt']" />
      </span>
    </div>
  </section>
</template>

<script>
import { inject } from "vue";
import axios from "axios";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  name: "Back_Navbar",
  setup() {
    const store = useStore();
    const router = useRouter();

    const $ElNotification = inject("$ElNotification");

    // 登出
    const logout = () => {
      const api = `${process.env.VUE_APP_API}/logout`;
      store.commit("ISLOADING", true);
      axios
        .post(api)
        .then((res) => {
          if (res.data.success) {
            $ElNotification({
              title: "成功",
              message: res.data.message,
              type: "success",
            });
          }
          document.cookie = `TravelJapan=; expires=`;
          store.commit("ISLOADING", false);
          router.push({ name: "Login" });
        })
        .catch((error) => {
          if (error) {
            store.commit("ISLOADING", false);
          }
        });
    };

    // 回首頁
    const goHome = () => {
      router.push({ name: "HomePage" });
    };

    return {
      logout,
      goHome,
    };
  },
};
</script>
