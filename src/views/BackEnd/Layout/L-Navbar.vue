<template>
  <section class="bg-primary-retouch2 shadow-md text-right w-full p-2.5">
    <div class="cursor-pointer inline-flex justify-end">
      <span @click="logout">
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
            <path
              d="M17,8l-1.41,1.41L17.17,11H9v2h8.17l-1.58,1.58L17,16l4-4L17,8z M5,5h7V3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h7v-2H5V5z"
            />
          </g>
        </svg>
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

    const $ElNotification = inject("$ELNotification");
    const logout = () => {
      const api = `${process.env.VUE_APP_API}/logout`;
      store.commit("ISLOADING", true);
      axios
        .post(api)
        .then((res) => {
          $ElNotification({
            title: "成功",
            message: res.data.message,
            type: "success",
          });
          document.cookie = `TravelJapan=`;
          store.commit("ISLOADING", false);
          router.push({ name: "Login" });
        })
        .catch((error) => {
          if (error) {
            store.commit("ISLOADING", false);
          }
        });
    };

    return {
      logout,
    };
  },
};
</script>
