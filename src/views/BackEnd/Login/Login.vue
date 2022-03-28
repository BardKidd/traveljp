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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
          />
        </svg>
        <input
          v-model="account"
          placeholder="請輸入您的帳號"
          class="ml-1 font-bold border rounded-md flex-1 p-3"
          type="text"
          @keyup.enter="login"
        />
      </div>
      <div class="flex flex-wrap items-center w-full mb-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          enable-background="new 0 0 24 24"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <g><path d="M0,0h24v24H0V0z" fill="none" /></g>
          <g>
            <g>
              <path
                d="M2,17h20v2H2V17z M3.15,12.95L4,11.47l0.85,1.48l1.3-0.75L5.3,10.72H7v-1.5H5.3l0.85-1.47L4.85,7L4,8.47L3.15,7l-1.3,0.75 L2.7,9.22H1v1.5h1.7L1.85,12.2L3.15,12.95z M9.85,12.2l1.3,0.75L12,11.47l0.85,1.48l1.3-0.75l-0.85-1.48H15v-1.5h-1.7l0.85-1.47 L12.85,7L12,8.47L11.15,7l-1.3,0.75l0.85,1.47H9v1.5h1.7L9.85,12.2z M23,9.22h-1.7l0.85-1.47L20.85,7L20,8.47L19.15,7l-1.3,0.75 l0.85,1.47H17v1.5h1.7l-0.85,1.48l1.3,0.75L20,11.47l0.85,1.48l1.3-0.75l-0.85-1.48H23V9.22z"
              />
            </g>
          </g>
        </svg>
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
          class="flex flex-wrap w-full justify-center"
        >
          <span class="font-bold">登入</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 24 24"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
            class="fill-[#fff]"
          >
            <g><rect fill="none" height="24" width="24" /></g>
            <g>
              <path
                d="M11,7L9.6,8.4l2.6,2.6H2v2h10.2l-2.6,2.6L11,17l5-5L11,7z M20,19h-8v2h8c1.1,0,2-0.9,2-2V5c0-1.1-0.9-2-2-2h-8v2h8V19z"
              />
            </g>
          </svg>
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
