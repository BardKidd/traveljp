<template>
  <LoadingOverlay v-model:active="isLoading">
    <template v-slot:after>
      <p class="block font-bold primary-black mt-3 text-lg">處理中...</p>
    </template>
  </LoadingOverlay>
  <section class="loginBG relative container h-screen">
    <div
      class="bg-primary-white CenterVertically absolute flex flex-col justify-center items-center shadow-md p-5 rounded"
    >
      <div>
        <img :src="Logo" alt="" />
      </div>
      <div class="flex flex-wrap items-center w-full mb-3">
        <font-awesome-icon :icon="['fas', 'user']" />
        <input
          v-model="account"
          placeholder="請輸入您的帳號"
          class="ml-1 font-bold border rounded-md flex-1 p-3"
          type="text"
          @keyup.enter="login"
        />
      </div>
      <div class="flex flex-wrap items-center w-full mb-3">
        <font-awesome-icon :icon="['fas', 'key']" />
        <input
          @keyup.enter="login"
          v-model="password"
          placeholder="請輸入您的密碼"
          class="ml-1 font-bold border rounded-md flex-1 p-3"
          type="password"
        />
      </div>
      <div
        class="mb-3 w-full p-3 bg-primary-red rounded-2xl cursor-pointer primary-white"
      >
        <button
          type="button"
          @click="login"
          class="flex flex-wrap items-center w-full justify-center"
        >
          <span class="font-bold">登入</span>
          <font-awesome-icon :icon="['fas', 'sign-in-alt']" />
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, inject, computed, onMounted } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import axios from "axios";
import Logo from "@/assets/Image/logo.png";
export default {
  name: "Back_Login",
  setup() {
    const account = ref("");
    const password = ref("");
    const $ElNotification = inject("$ElNotification");
    const store = useStore();
    const isLoading = computed(() => store.getters.isLoading);
    const router = useRouter();

    // 登入函式
    const login = () => {
      const api = `${process.env.VUE_APP_API}/admin/signin`;
      const sendItem = {
        username: account.value,
        password: password.value,
      };
      if (!sendItem.username || !sendItem.password) {
        $ElNotification({
          title: "提示",
          message: "請輸入帳號密碼",
          type: "warning",
        });
        return false;
      }
      store.commit("ISLOADING", true);
      axios
        .post(api, sendItem)
        .then((res) => {
          const { message, success, expired, token } = res.data;
          if (success) {
            document.cookie = `TravelJapan=${token}; expires=${new Date(
              expired
            )}`;
            router.push({
              name: "L-Admin",
            });
          } else {
            $ElNotification({
              title: "錯誤",
              message: `${message}`,
              type: "error",
            });
          }
          store.commit("ISLOADING", false);
        })
        .catch((error) => {
          if (error) {
            store.commit("ISLOADING", false);
          }
        });
    };

    // 是否登入
    const isLogin = () => {
      const api = `${process.env.VUE_APP_API}/api/user/check`;
      store.commit("ISLOADING", true);
      axios
        .post(api)
        .then((res) => {
          if (res.data.success) {
            router.push({ name: "L-Admin" });
          }
          store.commit("ISLOADING", false);
        })
        .catch((error) => {
          if (error) {
            store.commit("ISLOADING", false);
          }
        });
    };

    onMounted(() => {
      isLogin();
    });

    return {
      account,
      password,
      login,
      isLogin,
      Logo,
      isLoading,
    };
  },
};
</script>
