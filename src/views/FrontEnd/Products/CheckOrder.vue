<template>
  <!-- 導覽列 開始 -->
  <section class="text-center w-5/6 md:w-4/5 lg:w-3/5 mx-auto pt-44 flex">
    <p
      class="py-2 flex-1 px-5 text-md sm:text-lg md:text-xl font-bold bg-primary-retouch2 rounded-t-md"
    >
      1. 購物明細
    </p>
    <p
      class="py-2 flex-1 px-5 text-lg md:text-xl font-bold bg-primary-red rounded-t-md"
    >
      2. 確認訂單
    </p>
    <p
      class="py-2 flex-1 px-5 text-lg md:text-xl font-bold bg-primary-retouch2 rounded-t-md"
    >
      3. 完成訂購
    </p>
  </section>
  <!-- 導覽列 結束 -->

  <section class="w-5/6 md:w-4/5 lg:w-3/5 mx-auto pt-10 primary-black">
    <!-- 購物車列表 開始 -->
    <div class="flex items-center justify-between border-b-4 pb-10">
      <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold">確認訂單</h1>
    </div>
    <table>
      <thead>
        <tr class="leading-loose">
          <th></th>
          <th>商品</th>
          <th>人數</th>
          <th>單價</th>
          <th>小計</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="border-b-2"
          v-for="order of orderInfo.products"
          :key="order.id"
        >
          <td class="w-1/5">
            <img :src="order.product?.imagesUrl[0]" alt="" />
          </td>
          <td class="pl-1">
            <h3 class="text-sm sm:text-md md:text-lg text-justify">
              {{ order.product?.title }}
            </h3>
            <p class="primary-red text-justify">
              {{ order.product?.category }}
            </p>
          </td>
          <td class="text-sm sm:text-md text-center w-1/5">
            {{ order.qty }}
          </td>
          <td class="text-sm sm:text-md text-center font-bold">
            {{ order.product?.price }}
          </td>
          <td class="text-sm sm:text-md text-center font-bold primary-red">
            {{ order.final_total }}
          </td>
        </tr>
      </tbody>
    </table>
    <!-- 購物車列表 結束 -->

    <!-- 訂購表單 開始 -->
    <section class="border-t-4 pt-4">
      <div class="flex flex-col">
        <label class="modalTitle">訂購人名稱</label>
        <p class="modalInput">{{ orderInfo.user?.name }}</p>
      </div>
      <div class="flex flex-col">
        <label class="modalTitle">聯絡信箱</label>
        <p class="modalInput">{{ orderInfo.user?.email }}</p>
      </div>
      <div class="flex flex-col">
        <label class="modalTitle">連絡電話</label>
        <p class="modalInput">{{ orderInfo.user?.tel }}</p>
      </div>
      <div class="flex flex-col">
        <label class="modalTitle">訂購地址</label>
        <p class="modalInput">{{ orderInfo.user?.address }}</p>
      </div>
      <div class="flex flex-col">
        <label class="modalTitle">備註</label>
        <textarea
          class="modalInput"
          placeholder="給我們的留言"
          v-model="orderInfo.message"
          readonly
        ></textarea>
      </div>
      <div
        class="mt-5 mb-10 bg-primary-retouch rounded p-5 flex justify-end items-center"
      >
        <div class="text-right">
          <span class="mr-5 font-bold otherFont text-lg"
            >總金額: {{ orderInfo.total }}</span
          >
          <button type="button" @click="checkOrder" class="commonBtn">
            確認訂單
          </button>
        </div>
      </div>
    </section>
    <!-- 訂購表單 結束 -->
  </section>
</template>

<script>
import axios from "axios";
import { onMounted, inject, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";

export default {
  name: "CheckOrder",
  setup() {
    const router = useRouter();
    const route = useRoute();
    const store = useStore();
    const $ElNotification = inject("$ElNotification");
    const orderInfo = ref({});

    // 取得訂單資料
    const getOrderInfo = (order_id) => {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order/${order_id}`;
      store.commit("ISLOADING", true);
      axios
        .get(api)
        .then((res) => {
          if (res.data.success) {
            orderInfo.value = res.data.order;
          } else {
            $ElNotification({
              title: "錯誤",
              message: res.data.message,
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

    // 確認訂購
    const checkOrder = () => {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/pay/${route.params.orderId}`;
      store.commit("ISLOADING", true);
      axios
        .post(api)
        .then((res) => {
          if (res.data.success) {
            router.push({
              name: "OrderComplete",
              params: { order_id: route.params.orderId },
            });
          } else {
            $ElNotification({
              title: "錯誤",
              message: res.data.message,
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

    onMounted(() => {
      getOrderInfo(route.params.orderId);
    });

    return {
      orderInfo,
      checkOrder,
    };
  },
};
</script>
