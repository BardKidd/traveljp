<template>
  <section class="container w-3/5 mx-auto pt-44 primary-black">
    <div class="flex items-center justify-between border-b-4 pb-10">
      <h1 class="text-5xl font-bold">購物明細</h1>
      <span class="text-2xl font-bold">共 3 項</span>
    </div>
    <table>
      <thead>
        <tr>
          <th></th>
          <th>商品</th>
          <th>人數</th>
          <!-- <th>孩童</th> -->
          <th>價格</th>
          <th>小計</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="w-1/5">
            <img src="../../../assets/Image/593727.jpg" alt="" />
          </td>
          <td class="pl-1">
            <h3 class="text-lg text-justify">商品名稱</h3>
            <p class="primary-red text-justify">地點</p>
          </td>
          <td class="text-center">
            <select class="border rounded">
              <option
                :value="key + 1"
                v-for="(adult, key) of 10"
                :key="`adult${key}`"
              >
                {{ adult }} 位
              </option>
            </select>
          </td>
          <!-- <td class="text-center">
            <select class="border rounded">
              <option
                :value="key + 1"
                v-for="(children, key) of 10"
                :key="`children${key}`"
              >
                {{ children }} 位孩童
              </option>
            </select>
          </td> -->
          <td class="text-center">0</td>
          <td class="text-center">0</td>
          <td>
            <font-awesome-icon
              class="text-gray-500 hover:primary-black cursor-pointer"
              :icon="['fas', 'trash-alt']"
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
      <button type="button" class="commonBtn">結帳</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "ShoppingCart",
};
</script>
