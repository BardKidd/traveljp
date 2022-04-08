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
    <form>
      <div class="flex flex-col">
        <label class="modalTitle">訂購人名稱</label>
        <input class="modalInput" type="text" />
      </div>
      <div class="flex flex-col">
        <label class="modalTitle">聯絡信箱</label>
        <input class="modalInput" type="text" />
      </div>
      <div class="flex flex-col">
        <label class="modalTitle">連絡電話</label>
        <input class="modalInput" type="text" />
      </div>
      <div class="flex flex-col">
        <label class="modalTitle">訂購地址</label>
        <input class="modalInput" type="text" />
      </div>
      <div class="flex flex-col">
        <label class="modalTitle">備註</label>
        <textarea class="modalInput"></textarea>
      </div>
    </form>
    <div
      class="mt-5 mb-10 bg-primary-retouch rounded p-5 flex justify-between items-center"
    >
      <router-link :to="{ name: 'ShoppingCart' }">
        <font-awesome-icon class="pr-2" :icon="['fas', 'arrow-left']" />返回上頁
      </router-link>
      <!-- <div>
        <span class="mr-5 font-bold otherFont text-lg"
          >總金額: {{ computedTotal }}</span
        >
        <button type="button" class="commonBtn">確認訂單</button>
      </div> -->
    </div>
  </section>
</template>

<script>
import axios from "axios";
import { onMounted, inject, ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
export default {
  name: "OrderInfo",
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

    onMounted(() => {
      getShoppingCart();
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
