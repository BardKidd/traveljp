<template>
  <div class="container mx-auto relative w-4/5 h-[80vh]">
    <div
      class="CenterVertically absolute rounded-full bg-primary-red w-[300px] h-[300px]"
    ></div>
    <img
      class="CenterVertically absolute"
      src="~@/assets/Image/finish.png"
      alt="訂購完成"
    />
  </div>
  <div class="container w-1/2 h-[20vh] mx-auto flex justify-between">
    <router-link
      class="text-xl otherFont font-bold hover:underline"
      :to="{ name: 'ShopList' }"
    >
      <font-awesome-icon class="mr-2" :icon="['fas', 'chevron-left']" />繼續購物
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
export default {
  name: "OrderComplete",
};
</script>
