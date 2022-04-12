<template>
  <section class="w-full max-w-5xl z-30 relative -mt-16 mx-auto mb-20">
    <div class="orderBar_Title">
      <ul class="flex flex-wrap">
        <li class="flex-1">
          <p
            @click="currentItem = 1"
            :class="currentItem === 1 ? 'orderBar_Title_Name--active' : ''"
            class="orderBar_Title_Name bg-primary-black primary-white py-3 text-center rounded-t-sm font-bold cursor-pointer"
          >
            搜索計畫
          </p>
        </li>
        <li class="flex-1">
          <p
            @click="currentItem = 2"
            :class="currentItem === 2 ? 'orderBar_Title_Name--active' : ''"
            class="orderBar_Title_Name bg-primary-black primary-white py-3 text-center rounded-t-sm font-bold cursor-pointer"
          >
            取得優惠或套票
          </p>
        </li>
      </ul>
    </div>
    <div
      class="shadow-xl orderBar_Content bg-primary-white p-4 flex flex-wrap justify-around items-center"
    >
      <template v-if="currentItem === 1">
        <input type="text" v-model="user.name" placeholder="稱呼" />
        <input type="text" v-model="user.tel" placeholder="聯絡電話" />
        <input type="text" v-model="user.email" placeholder="聯絡信箱" />
        <button type="button" @click="goShopList">搜索計畫</button>
      </template>
      <template v-else-if="currentItem === 2">
        <select class="flex-1 mr-5" v-model="selectCoupon">
          <option value="">-- 請選擇 --</option>
          <option value="earlyspring2022">早春大優惠, 79折</option>
          <option value="natsumatsuri2022">夏祭追憶之旅, 7折</option>
        </select>
        <p class="flex-1" v-if="selectCoupon">
          優惠碼：
          <span class="primary-red font-bold">{{ selectCoupon }}</span>
          <font-awesome-icon
            @click="copyText(selectCoupon, '優惠券複製成功')"
            class="pl-2 cursor-pointer primary-black"
            :icon="['fas', 'copy']"
          />
        </p>
      </template>
    </div>
  </section>
</template>

<script>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { copyText } from "@/commonFunction/common";
export default {
  name: "OrderBar",

  setup() {
    const router = useRouter();
    const currentItem = ref(1); // orderBar 目前被選取哪個
    const selectCoupon = ref(""); // 選擇的優惠券
    const user = reactive({
      name: "",
      email: "",
      tel: "",
    });

    const goShopList = () => {
      sessionStorage.setItem("user", JSON.stringify(user));
      router.push({ name: "ShopList" });
    };

    return {
      user,
      currentItem,
      selectCoupon,
      goShopList,
      copyText,
    };
  },
};
</script>
