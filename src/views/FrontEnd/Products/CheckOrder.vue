<template>
  <section class="container w-3/5 mx-auto pt-44 primary-black">
    <div class="flex items-center justify-between border-b-4 pb-10">
      <h1 class="text-5xl font-bold">購物明細</h1>
      <span class="text-2xl font-bold">共 {{ productsData.length }} 項</span>
    </div>
    <table>
      <thead>
        <tr class="leading-loose">
          <th></th>
          <th>商品</th>
          <th>人數</th>
          <th>價格</th>
          <th>小計</th>
        </tr>
      </thead>
      <tbody>
        <tr class="border-b-2" v-for="item of productsData" :key="item.id">
          <td class="w-1/5">
            <img :src="item.product?.imagesUrl[0]" alt="" />
          </td>
          <td class="pl-1">
            <h3 class="text-lg text-justify">
              {{ item.product?.title }}
            </h3>
            <p class="primary-red text-justify">
              {{ item.product?.category }}
            </p>
          </td>
          <td class="text-center">
            <input
              class="modalInput w-2/5"
              min="1"
              type="number"
              v-model="item.qty"
              @change="minQty(item)"
            />
          </td>
          <td class="text-center">
            {{ item.product?.price }}
          </td>
          <td class="text-center"></td>
        </tr>
      </tbody>
    </table>

    <div
      class="mt-5 mb-10 bg-primary-retouch rounded p-5 flex justify-between items-center"
    >
      <div>
        <span class="mr-5 font-bold otherFont text-lg">總金額: </span>
        <router-link :to="{ name: 'OrderInfo' }" type="button" class="commonBtn"
          >結帳</router-link
        >
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import { onMounted, inject, ref } from "vue";
import { /*useRouter,*/ useRoute } from "vue-router";
import { useStore } from "vuex";
export default {
  name: "CheckOrder",
  setup() {
    // const router = useRouter();
    const route = useRoute();
    const productsData = ref([]);
    const store = useStore();
    const $ElNotification = inject("$ElNotification");
    const orderData = ref({});

    const getOrderData = (id) => {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order/${id}`;
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

    onMounted(() => {
      getOrderData(route.params.orderId);
    });

    return {
      productsData,
    };
  },
};
</script>
