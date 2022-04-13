<template>
  <div class="container mx-auto relative w-4/5 h-[90vh]">
    <div
      class="CenterVertically absolute rounded-full bg-primary-red w-[300px] h-[300px]"
    ></div>
    <img
      class="CenterVertically absolute"
      src="~@/assets/Image/finish.png"
      alt="訂購完成"
    />
    <p
      class="font-bold text-lg top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute"
    >
      訂單編號：
      <span class="inline-block">{{ orderId }}</span>
      <font-awesome-icon
        @click="copyText(orderId, '訂單編號複製成功')"
        class="hidden md:inline-block pl-2 cursor-pointer"
        :icon="['fas', 'copy']"
      />
    </p>
  </div>

  <div
    class="container w-full md:w-1/2 md:flex text-center h-[10vh] mx-auto justify-between"
  >
    <router-link
      class="text-xl otherFont font-bold hover:underline"
      :to="{ name: 'ShopList' }"
    >
      <font-awesome-icon class="mr-2" :icon="['fas', 'chevron-left']" />繼續購物
    </router-link>
    <router-link
      class="text-xl otherFont font-bold hover:underline"
      :to="{ name: 'OrderSearch' }"
    >
      訂單查詢
    </router-link>
    <router-link
      class="text-xl otherFont font-bold hover:underline"
      :to="{ name: 'HomePage' }"
    >
      返回首頁<font-awesome-icon
        class="ml-2"
        :icon="['fas', 'chevron-right']"
      />
    </router-link>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import { copyText } from "@/commonFunction/common";

export default {
  name: "OrderComplete",
  setup() {
    const route = useRoute();
    const orderId = ref("");
    // const $ElNotification = inject("$ElNotification");

    // const copyOrderId = () => {
    //   const cb = navigator.clipboard.writeText(orderId.value);
    //   cb.then(() => {
    //     $ElNotification({
    //       title: "成功",
    //       message: "訂單編號複製成功",
    //       type: "success",
    //     });
    //   }).catch(() => {
    //     $ElNotification({
    //       title: "錯誤",
    //       message: "該瀏覽器不支援複製功能",
    //       type: "error",
    //     });
    //   });
    // };

    onMounted(() => {
      orderId.value = route.params.order_id;
    });
    return {
      orderId,
      copyText,
    };
  },
};
</script>
