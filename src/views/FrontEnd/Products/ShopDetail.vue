<template>
  <div class="mx-auto w-4/5">
    <h1 class="pt-44 pb-5 text-4xl font-bold text-justify">
      {{ detail.title }}
    </h1>
    <p class="primary-black mb-5 otherFont font-bold">
      <font-awesome-icon
        class="primary-red pr-1"
        :icon="['fas', 'map-marker-alt']"
      />{{ detail.category }}
    </p>
    <!-- 產品區塊 開始 -->
    <section class="flex mb-32">
      <div class="flex-2">
        <!-- 幻燈片輪播 開始 -->
        <div class="overflow-hidden rounded-xl">
          <input
            class="hidden"
            v-for="(radio, index) of detail?.imagesUrl.length"
            :key="radio"
            :id="`radio${index}`"
            type="radio"
          />
          <transition-group
            :name="transitionName"
            tag="div"
            class="relative bg-primary-red bg-primary-red h-[500px] w-[800px]"
          >
            <div
              v-show="index === show"
              class="absolute overflow-hidden"
              v-for="(img, index) of detail?.imagesUrl"
              :key="img"
            >
              <img
                class="object-cover object-center w-[800px] h-[500px]"
                :src="img"
                :alt="`產品圖片${index}`"
              />
            </div>

            <div
              key="label"
              class="w-[800px] absolute top-[90%] flex justify-center"
            >
              <label
                @click="setShow(index)"
                :for="`radio${index}`"
                class="manual-btn border-2 p-1 rounded-xl border-[#fff] cursor-pointer mr-10 hover:bg-primary-red"
                :class="show === index ? 'bg-slate-100' : ''"
                v-for="(manual, index) of detail?.imagesUrl.length"
                :key="manual"
              ></label>
            </div>
          </transition-group>
        </div>
        <!-- 幻燈片輪播 結束 -->
        <!-- 地點文字 開始 -->
        <p class="otherFont mt-5 font-bold">{{ detail.content }}</p>
        <!-- 地點文字 結束 -->
      </div>
      <!-- 右側區塊 開始 -->
      <div
        class="flex-1 flex flex-col ml-10 h-fit p-5 shadow-[0_0_20px_rgba(0,0,0,0.2)]"
      >
        <p class="otherFont">旅行天數:{{ detail.unit }}</p>
        <div class="otherFont">
          <div class="mb-3">
            <p class="text-2xl">
              <font-awesome-icon :icon="['fas', 'dollar-sign']" />
              <span
                :class="
                  detail.price !== detail.origin_price ? 'line-through' : ''
                "
                >{{ detail.price }}</span
              >
              <span
                class="primary-red text-3xl font-bold"
                v-if="detail.price !== detail.origin_price"
                >{{ detail.origin_price }}</span
              >
            </p>
          </div>
        </div>
        <div class="flex justify-between mb-3">
          <select v-model="qty" class="border flex-1 mr-1 py-2 px-3 rounded">
            <option
              :value="key + 1"
              v-for="(adult, key) of 10"
              :key="`adult${key}`"
            >
              {{ adult }} 位
            </option>
          </select>
        </div>
        <button
          type="button"
          class="commonBtn mb-2"
          @click="joinTheShoppingCar(detail.id)"
        >
          我要這個
        </button>
        <span class="text-center mt-2 text-sm otherFont font-bold"
          >聯繫我們
          <span class="hover:primary-red cursor-pointer">0800-123456</span>
        </span>
      </div>
      <!-- 右側區塊 結束 -->
    </section>
    <!-- 產品區塊 結束 -->

    <!-- 相關產品 開始 -->
    <div class="lLine w-1/3 mb-10"></div>
    <section class="flex mb-32">
      <div
        class="pr-2 w-1/3 cursor-pointer"
        v-for="same of sameCategory.slice(0, 3)"
        :key="same.id"
        @click="goSameCategory(same.id)"
      >
        <div
          class="before:content-[''] relative before:absolute before:w-full before:h-full before:bg-primary-black before:opacity-0 hover:before:opacity-30 max-h-60 overflow-hidden"
        >
          <img
            class="h-64 w-full object-cover object-center"
            :src="same?.imagesUrl[0]"
            alt="相關產品圖片"
          />
        </div>
        <p class="">{{ same.title }}</p>
      </div>
    </section>
    <!-- 相關產品 結束 -->
  </div>
</template>

<script>
import axios from "axios";
import { onMounted, inject, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
export default {
  name: "ShopDetail",
  setup() {
    const route = useRoute();
    const router = useRouter();
    const store = useStore();
    const show = ref(0); // 當前要顯示的照片
    const transitionName = ref("left");
    const $ElNotification = inject("$ElNotification");
    const qty = ref(1); // 人數
    const allData = ref([]); // 全部產品
    const sameCategory = ref([]); // 相同的地區

    const detail = ref({
      category: "",
      content: "",
      description: "",
      id: "",
      imageUrl: "",
      imagesUrl: [],
      is_enabled: 1,
      num: 1,
      origin_price: 0,
      price: 0,
      title: "",
      unit: "",
    });

    // 取得產品詳細資料
    const getDetail = (id) => {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${id}`;
      store.commit("ISLOADING", true);
      axios
        .get(api)
        .then((res) => {
          if (res.data.success) {
            detail.value = res.data.product;
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

    // 取得所有資料
    const getAllData = () => {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`;
      sameCategory.value = [];
      store.commit("ISLOADING", true);
      axios
        .get(api)
        .then((res) => {
          if (res.data.success) {
            allData.value = res.data.products;

            allData.value.forEach((item) => {
              if (
                item.category === detail.value.category &&
                item.id !== detail.value.id
              ) {
                sameCategory.value.push(item);
              }
            });
          } else {
            $ElNotification({
              title: "錯誤",
              message: `${res.data.message}`,
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

    // 變更 show 值
    const setShow = (index) => {
      show.value = index;
    };

    // 加入購物車
    const joinTheShoppingCar = (id) => {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      const cart = {
        product_id: id,
        qty: qty.value,
      };
      store.commit("ISLOADING", true);
      axios
        .post(api, { data: cart })
        .then((res) => {
          if (res.data.success) {
            $ElNotification({
              title: "成功",
              message: res.data.message,
              type: "success",
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

    // 前往相似產品頁面
    const goSameCategory = async (id) => {
      router.push({ params: { id: id } });

      await getDetail(id);
      await getAllData();
    };

    // 監聽 slider 是否要朝左還朝右滑動
    watch(
      () => show.value,
      (n, o) => {
        transitionName.value = n > o ? "right" : "left";
      }
    );

    onMounted(() => {
      getAllData();
      getDetail(route.params.id);
    });

    return {
      detail,
      show,
      qty,
      transitionName,
      sameCategory,
      setShow,
      joinTheShoppingCar,
      goSameCategory,
    };
  },
};
</script>

<style lang="scss" scoped>
.right-enter-from {
  left: 100%;
}
.right-enter-active,
.right-leave-active {
  left: 100%;
  transition: left 1s;
}
.right-enter-to,
.right-leave-from {
  left: 0%;
}
.right-leave-to {
  left: -100%;
}
.left-enter-from {
  left: -100%;
}
.left-enter-active,
.left-leave-active {
  left: -100%;
  transition: left 1s;
}
.left-enter-to,
.left-leave-from {
  left: 0%;
}
.left-leave-to {
  left: 100%;
}
</style>
