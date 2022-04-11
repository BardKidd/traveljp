<template>
  <!-- 導覽列 開始 -->
  <section class="container text-center w-3/5 mx-auto pt-44 flex">
    <p class="py-2 flex-1 px-5 text-xl font-bold bg-primary-red rounded-t-md">
      1. 購物明細
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
  <!-- 導覽列 結束 -->

  <section class="container w-3/5 mx-auto pt-10 primary-black">
    <!-- 購物車列表 開始 -->
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
          <th>單價</th>
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
              @change="changeQty(item)"
            />
          </td>
          <td class="text-center font-bold">
            {{ item.product?.price }}
          </td>
          <td class="text-center font-bold">
            <span
              :class="item.total !== item.final_total ? 'line-through' : ''"
              class="primary-black block"
              >{{ item.total }}</span
            >
            <span v-if="item.total !== item.final_total" class="primary-red">{{
              item.final_total
            }}</span>
          </td>
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
    <button type="button" @click="delAllProduct" class="hover:primary-red my-5">
      整批刪除
    </button>
    <!-- 購物車列表 結束 -->

    <!-- 優惠券 開始 -->
    <section class="mb-4 border-t-4 pt-4">
      <button
        v-if="!isOpenCouponBox && !productsData[0]?.coupon"
        class="commonBtn"
        @click="isOpenCouponBox = true"
      >
        使用優惠券
      </button>
      <div
        v-if="isOpenCouponBox && !productsData[0]?.coupon"
        class="flex flex-col"
      >
        <label class="modalTitle"
          >優惠券
          <span
            @click="isOpenCouponBox = false"
            class="cursor-pointer text-sm text-slate-400 hover:primary-black"
            >取消</span
          >
          <span
            @click="sendCoupon"
            class="ml-2 cursor-pointer text-sm text-slate-400 hover:primary-red"
            >送出</span
          >
        </label>
        <input class="modalInput" type="text" v-model="code" />
      </div>
      <div class="primary-red font-bold" v-if="productsData[0]?.coupon">
        <span class="block">已套用：{{ productsData[0]?.coupon.title }}</span>
        <span>折扣：{{ productsData[0]?.coupon.percent }}%</span>
      </div>
    </section>
    <!-- 優惠券 結束 -->

    <!-- 訂購表單 開始 -->
    <Form class="border-t-4 pt-4" as="div" v-slot="{ errors, handleSubmit }">
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
          <router-link :to="{ name: 'ShopList' }">
            <font-awesome-icon
              class="pr-2"
              :icon="['fas', 'arrow-left']"
            />繼續購物
          </router-link>
          <div>
            <span class="mr-5 font-bold otherFont text-lg"
              >總金額: {{ computedTotal }}</span
            >
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
import { onMounted, reactive, inject, ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { Field, Form } from "vee-validate";

export default {
  name: "ShoppingCart",
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
    const code = ref("");
    const isOpenCouponBox = ref(false); // 是否顯示優惠券區塊

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
            productsData.value.forEach((item) => {
              item.final_total = Math.floor(item.final_total);
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

    // 刪除購物車所有資料
    const delAllProduct = () => {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/carts`;
      store.commit("ISLOADING", true);

      axios
        .delete(api)
        .then((res) => {
          if (!res.data.success) {
            $ElNotification({
              title: "錯誤",
              message: res.data.message,
              type: "error",
            });
          }
          getShoppingCart();
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

    // 更新購物車
    const changeQty = async (item) => {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
      // 先檢查是否為負數
      store.commit("ISLOADING", true);
      await minQty(item);
      const cart = {
        product_id: item.product_id,
        qty: item.qty,
      };
      await axios
        .put(api, { data: cart })
        .then((res) => {
          if (res.data.success) {
            getShoppingCart();
          } else {
            $ElNotification({
              title: "錯誤",
              message: res.data.message,
              type: "error",
            });
            store.commit("ISLOADING", false);
          }
        })
        .catch((error) => {
          if (error) {
            store.commit("ISLOADING", false);
          }
        });
    };

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
            router.push({
              name: "CheckOrder",
              params: { orderId: res.data.orderId },
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
        .catch(() => {
          store.commit("ISLOADING", false);
        });
    };

    // 送出優惠券
    const sendCoupon = () => {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/coupon`;
      const coupon = {
        code: code.value,
      };
      store.commit("ISLOADING", true);

      axios
        .post(api, { data: coupon })
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

    onMounted(() => {
      getShoppingCart();
    });

    // 計算總金額
    const computedTotal = computed(() => {
      let total = 0;
      productsData.value.forEach((product) => {
        total += product.final_total;
      });
      return total;
    });

    return {
      productsData,
      delShoppingCart,
      changeQty,
      delAllProduct,
      sendOrderInfo,
      sendCoupon,
      code,
      computedTotal,
      userData,
      isOpenCouponBox,
    };
  },
  components: {
    Field,
    Form,
  },
};
</script>
