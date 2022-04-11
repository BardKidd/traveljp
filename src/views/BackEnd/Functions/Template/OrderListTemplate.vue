<template>
  <section class="container primary-black">
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
          v-for="productInfo of itemData.products"
          :key="productInfo.id"
        >
          <td class="w-1/5">
            <img :src="productInfo.product?.imagesUrl[0]" alt="" />
          </td>
          <td class="pl-1">
            <h3 class="text-lg text-justify">
              {{ productInfo.product?.title }}
            </h3>
            <p class="primary-red text-justify">
              {{ productInfo.product?.category }}
            </p>
          </td>
          <td class="text-center">
            {{ productInfo.qty }}
          </td>
          <td class="text-center font-bold">
            {{ productInfo.product?.price }}
          </td>
          <td class="font-bold">
            <div v-if="productInfo?.coupon">
              <span class="block">{{ productInfo?.coupon.title }}</span>
              <span>{{ productInfo?.coupon.percent }}%</span>
            </div>
          </td>
          <td class="text-center font-bold">
            <span
              class="primary-black block"
              :class="
                productInfo.total !== productInfo.final_total
                  ? 'line-through'
                  : ''
              "
              >{{ productInfo.total }}</span
            >
            <span
              v-if="productInfo.total !== productInfo.final_total"
              class="primary-red"
              >{{ productInfo.final_total }}</span
            >
          </td>
        </tr>
      </tbody>
    </table>

    <p class="text-right font-bold text-lg">總金額：{{ itemData.total }}</p>
    <!-- 購物車列表 結束 -->

    <!-- 訂購表單 開始 -->
    <section class="border-t-4 pt-4">
      <div class="flex flex-col">
        <label class="modalTitle">訂購人名稱</label>
        <input type="text" v-model="itemData.user.name" class="modalInput" />
      </div>
      <div class="flex flex-col">
        <label class="modalTitle">聯絡信箱</label>
        <input type="text" v-model="itemData.user.email" class="modalInput" />
      </div>
      <div class="flex flex-col">
        <label class="modalTitle">連絡電話</label>
        <input type="text" v-model="itemData.user.tel" class="modalInput" />
      </div>
      <div class="flex flex-col">
        <label class="modalTitle">訂購地址</label>
        <input type="text" v-model="itemData.user.address" class="modalInput" />
      </div>
      <div class="flex flex-col">
        <label class="modalTitle">備註</label>
        <textarea v-model="itemData.message" class="modalInput"></textarea>
      </div>
    </section>
    <!-- 訂購表單 結束 -->
  </section>
</template>

<script>
import { toRef } from "vue";
export default {
  name: "OrderListTemplate",
  props: {
    orderData: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const itemData = toRef(props, "orderData");
    return {
      itemData,
    };
  },
};
</script>
