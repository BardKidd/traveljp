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
      <input type="text" />
      <input type="text" />
      <select>
        <option
          :value="key + 1"
          v-for="(adult, key) of 10"
          :key="`adult${key}`"
        >
          {{ adult }} 位
        </option>
      </select>
      <button type="button">搜索計畫</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "OrderBar",
};
</script>
