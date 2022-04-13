<template>
  <div class="orderSearchBG mb-32"></div>
  <div class="container w-5/6 lg:w-4/5 mx-auto mb-16">
    <!-- 本頁標題 開始 -->
    <div class="flex items-center mb-12 sm:mb-24 md:mb-32">
      <div class="hidden lg:block lrLine flex-1"></div>
      <h1
        class="text-center flex-1 font-bold text-4xl md:text-5xl lg:text-6xl otherFont"
      >
        訂單搜尋
      </h1>
      <div class="hidden lg:block lrLine flex-1"></div>
    </div>
    <!-- 本頁標題 結束 -->
    <!-- 訂單搜尋框 開始 -->
    <div class="md:flex rounded hover:md:shadow-md md:shadow p-10">
      <input
        type="text"
        class="w-full md:w-auto md:flex-2 border rounded-lg md:mr-5 p-5 text-lg"
        placeholder="訂單編號"
        v-model.trim="inputValue"
        @keyup.enter="getOrder"
      />
      <button
        type="button"
        @click="getOrder"
        class="w-full md:w-auto mt-3 md:mt-0 commonBtn"
      >
        送出
      </button>
    </div>
    <!-- 訂單搜尋框 結束 -->
    <!-- 搜尋結果 開始 -->
    <section
      v-if="orderData.id"
      class="container w-3/5 mx-auto pt-10 primary-black"
    >
      <!-- 購物車列表 開始 -->
      <table>
        <thead>
          <tr class="leading-loose">
            <th></th>
            <th>商品</th>
            <th>人數</th>
            <th>單價</th>
            <th>優惠</th>
            <th>小計</th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="border-b-2"
            v-for="order of orderData?.products"
            :key="order.id"
          >
            <td class="w-1/5">
              <img :src="order.product?.imagesUrl[0]" alt="" />
            </td>
            <td class="pl-1">
              <h3 class="text-lg text-justify">
                {{ order.product?.title }}
              </h3>
              <p class="primary-red text-justify">
                {{ order.product?.category }}
              </p>
            </td>
            <td class="text-center">
              {{ order.qty }}
            </td>
            <td class="text-center font-bold">
              {{ order.product?.price }}
            </td>
            <td class="font-bold">
              <div v-if="order?.coupon">
                <span class="block">{{ order?.coupon.title }}</span>
                <span>{{ order?.coupon.percent }}%</span>
              </div>
            </td>
            <td class="text-center font-bold primary-red">
              {{ order.final_total }}
            </td>
          </tr>
        </tbody>
      </table>
      <p class="text-right font-bold text-lg">總金額：{{ orderData?.total }}</p>
      <!-- 購物車列表 結束 -->

      <!-- 訂購表單 開始 -->
      <section class="border-t-4 pt-4">
        <div class="flex flex-col">
          <label class="modalTitle">訂購人名稱</label>
          <p class="modalInput">{{ orderData?.user?.name }}</p>
        </div>
        <div class="flex flex-col">
          <label class="modalTitle">聯絡信箱</label>
          <p class="modalInput">{{ orderData?.user?.email }}</p>
        </div>
        <div class="flex flex-col">
          <label class="modalTitle">連絡電話</label>
          <p class="modalInput">{{ orderData?.user?.tel }}</p>
        </div>
        <div class="flex flex-col">
          <label class="modalTitle">訂購地址</label>
          <p class="modalInput">{{ orderData?.user?.address }}</p>
        </div>
        <div class="flex flex-col">
          <label class="modalTitle">備註</label>
          <textarea
            class="modalInput"
            placeholder="給我們的留言"
            v-model="orderData.message"
            readonly
          ></textarea>
        </div>
      </section>
      <!-- 訂購表單 結束 -->
    </section>
    <!-- 搜尋結果 結束 -->
  </div>
</template>

<script>
import axios from "axios";
import { useStore } from "vuex";
import { inject, ref } from "vue";
export default {
  name: "OrderSearch",
  setup() {
    const $ElNotification = inject("$ElNotification");
    const store = useStore();
    const orderData = ref({});
    const inputValue = ref();
    const getOrder = () => {
      if (!inputValue.value) return;
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order/${inputValue.value}`;
      store.commit("ISLOADING", true);
      axios
        .get(api)
        .then((res) => {
          if (res.data.success) {
            orderData.value = res.data.order;
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
      getOrder,
      orderData,
      inputValue,
    };
  },
};
</script>
