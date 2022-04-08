<template>
  <section class="container w-3/5 mx-auto pt-44 primary-black">
    <div class="flex items-center justify-between border-b-4 pb-10">
      <h1 class="text-5xl font-bold">購物明細</h1>
      <span class="text-2xl font-bold">共 {{ productsData.length }} 項</span>
    </div>
    <table>
      <thead>
        <tr>
          <th></th>
          <th>商品</th>
          <th>人數</th>
          <th>價格</th>
          <th>小計</th>
          <th></th>
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
          <td class="text-center">{{ item.product?.price * item.qty }}</td>
          <td>
            <font-awesome-icon
              class="text-gray-500 hover:primary-black cursor-pointer"
              :icon="['fas', 'trash-alt']"
              @click="delShoppingCart(item.id)"
            />
          </td>
        </tr>
      </tbody>
    </table>
    <div
      class="mt-5 mb-10 bg-primary-retouch rounded p-5 flex justify-between items-center"
    >
      <router-link :to="{ name: 'ShopList' }">
        <font-awesome-icon class="pr-2" :icon="['fas', 'arrow-left']" />繼續購物
      </router-link>
      <div>
        <span class="mr-5 font-bold otherFont text-lg"
          >總金額: {{ computedTotal }}</span
        >
        <button type="button" class="commonBtn">結帳</button>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import { onMounted, inject, ref, computed, onBeforeUnmount } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
export default {
  name: "ShoppingCart",
  setup() {
    const router = useRouter();
    const productsData = ref([]);
    const store = useStore();
    const $ElNotification = inject("$ElNotification");

    // 取得購物車資料
    const getShoppingCart = () => {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      store.commit("ISLOADING", true);
      axios
        .get(api)
        .then((res) => {
          if (res.data.success) {
            if (res.data.data.carts.length === 0) {
              alert("購物車暫無商品，將返回商品列表");
              router.push({ name: "ShopList" });
            }
            productsData.value = res.data.data.carts;
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

    // 刪除購物車資料
    const delShoppingCart = (id) => {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${id}`;
      store.commit("ISLOADING", true);
      axios
        .delete(api)
        .then((res) => {
          if (res.data.success) {
            $ElNotification({
              title: "成功",
              message: res.data.message,
              type: "success",
            });
            getShoppingCart();
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

    // 防止用戶直接輸入負數
    const minQty = (item) => {
      if (item.qty < 1) {
        $ElNotification({
          title: "提示",
          message: "數量不得小於 1",
          type: "warning",
        });
        item.qty = 1;
      }
    };

    // 更新購物車，離開此頁面才會呼叫
    const changeQty = (item) => {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
      const cart = {
        product_id: item.product_id,
        qty: item.qty,
      };
      axios
        .put(api, { data: cart })
        .then((res) => {
          if (!res.data.success) {
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
      getShoppingCart();
    });

    onBeforeUnmount(() => {
      productsData.value.forEach((item) => {
        changeQty(item);
      });
    });

    // 計算總金額
    const computedTotal = computed(() => {
      let total = 0;
      productsData.value.forEach((product) => {
        total += product.qty * product.product.price;
      });
      return total;
    });

    return {
      productsData,
      delShoppingCart,
      minQty,
      computedTotal,
    };
  },
};
</script>
