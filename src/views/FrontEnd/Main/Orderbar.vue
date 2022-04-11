<template>
  <section class="w-full max-w-5xl z-30 relative -mt-16 mx-auto mb-20">
    <div class="orderBar_Title">
      <ul class="flex flex-wrap">
        <li class="flex-1">
          <p
            class="orderBar_Title_Name orderBar_Title_Name--active bg-primary-black primary-white py-3 text-center rounded-t-sm font-bold cursor-pointer"
          >
            搜索計畫
          </p>
        </li>
        <li class="flex-1">
          <p
            class="orderBar_Title_Name bg-primary-black primary-white py-3 text-center rounded-t-sm font-bold cursor-pointer"
          >
            取得優惠或套票
          </p>
        </li>
      </ul>
    </div>
    <div
      class="shadow-xl orderBar_Content bg-primary-white p-4 flex flex-wrap justify-around"
    >
      <input type="text" v-model="user.name" placeholder="稱呼" />
      <input type="text" v-model="user.tel" placeholder="聯絡電話" />
      <input type="text" v-model="user.email" placeholder="聯絡信箱" />
      <button type="button" @click="goShopList">搜索計畫</button>
    </div>
  </section>
</template>

<script>
import { reactive } from "vue";
import { useRouter } from "vue-router";
export default {
  name: "OrderBar",

  setup() {
    const router = useRouter();
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
      goShopList,
    };
  },
};
</script>
