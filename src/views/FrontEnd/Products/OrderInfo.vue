<template>
  <section class="container text-center w-3/5 mx-auto pt-44 flex">
    <p class="py-2 flex-1 px-5 text-xl font-bold bg-primary-red rounded-t-md">
      1. 訂購資訊
    </p>
    <p
      class="py-2 flex-1 px-5 text-xl font-bold bg-primary-retouch2 rounded-t-md"
    >
      2. 確認訂單
    </p>
    <p
      class="py-2 flex-1 px-5 text-xl font-bold bg-primary-retouch2 rounded-t-md"
    >
      3. 完成訂購
    </p>
  </section>
  <section class="container w-3/5 mx-auto pt-10 primary-black">
    <div class="border-b-4 pb-10">
      <h1 class="text-5xl font-bold">訂購資訊</h1>
    </div>
    <!-- 訂購表單 開始 -->
    <Form as="div" v-slot="{ errors, handleSubmit }">
      <form @submit.stop.prevent="handleSubmit(sendOrderInfo)">
        <div class="flex flex-col">
          <label class="modalTitle">訂購人名稱</label>
          <Field
            name="訂購人"
            rules="required"
            placeholder="請輸入訂購人名稱"
            class="modalInput"
            type="text"
            v-model="userData.name"
          />
          <span class="primary-red font-bold">{{ errors.訂購人 }}</span>
        </div>
        <div class="flex flex-col">
          <label class="modalTitle">聯絡信箱</label>
          <Field
            name="聯絡信箱"
            rules="required|email"
            placeholder="請輸入聯絡信箱"
            class="modalInput"
            type="text"
            v-model="userData.email"
          />
          <span class="primary-red font-bold">{{ errors.聯絡信箱 }}</span>
        </div>
        <div class="flex flex-col">
          <label class="modalTitle">連絡電話</label>
          <Field
            name="連絡電話"
            rules="required"
            placeholder="請輸入連絡電話"
            class="modalInput"
            type="text"
            v-model="userData.tel"
          />
          <span class="primary-red font-bold">{{ errors.連絡電話 }}</span>
        </div>
        <div class="flex flex-col">
          <label class="modalTitle">訂購地址</label>
          <Field
            name="訂購地址"
            rules="required"
            placeholder="請輸入訂購地址"
            class="modalInput"
            type="text"
            v-model="userData.address"
          />
          <span class="primary-red font-bold">{{ errors.訂購地址 }}</span>
        </div>
        <div class="flex flex-col">
          <label class="modalTitle">備註</label>
          <textarea
            class="modalInput"
            placeholder="給我們的留言"
            v-model="userData.message"
          ></textarea>
        </div>
        <div
          class="mt-5 mb-10 bg-primary-retouch rounded p-5 flex justify-between items-center"
        >
          <router-link :to="{ name: 'ShoppingCart' }">
            <font-awesome-icon
              class="pr-2"
              :icon="['fas', 'arrow-left']"
            />返回上頁
          </router-link>
          <div>
            <button type="submit" class="commonBtn">確認訂單</button>
          </div>
        </div>
      </form>
    </Form>
    <!-- 訂購表單 結束 -->
  </section>
</template>

<script>
import axios from "axios";
import { inject, ref, reactive } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { Field, Form } from "vee-validate";

export default {
  name: "OrderInfo",
  setup() {
    const router = useRouter();
    const productsData = ref([]);
    const store = useStore();
    const $ElNotification = inject("$ElNotification");
    const userData = reactive({
      name: "",
      email: "",
      tel: "",
      address: "",
      message: "",
    });

    // 送出訂購資訊
    const sendOrderInfo = () => {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order`;
      const user = {
        name: userData.name,
        email: userData.email,
        tel: userData.tel,
        address: userData.address,
      };
      const message = userData.message;
      store.commit("ISLOADING", true);
      axios
        .post(api, { data: { user, message } })
        .then((res) => {
          if (res.data.success) {
            router.push({ name: "CheckOrder" });
          } else {
            $ElNotification({
              title: "錯誤",
              message: res.data.message,
              type: "error",
            });
          }
          store.commit("ISLOADING", false);
        })
        .catch(() => {
          store.commit("ISLOADING", false);
        });
    };

    return {
      productsData,
      userData,
      sendOrderInfo,
    };
  },
  components: {
    Field,
    Form,
  },
};
</script>
