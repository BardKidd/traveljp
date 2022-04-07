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
                class="manual-btn border-2 border- p-1 rounded-xl border-[#2a211f] cursor-pointer mr-10 hover:bg-primary-black"
                :class="show === index ? 'bg-primary-black' : ''"
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
          <select class="border flex-1 mr-1 py-2 px-3 rounded">
            <option
              :value="key + 1"
              v-for="(adult, key) of 10"
              :key="`adult${key}`"
            >
              {{ adult }} 位成人
            </option>
          </select>
          <select class="border flex-1 ml-1 py-2 px-3 rounded">
            <option
              :value="key + 1"
              v-for="(children, key) of 10"
              :key="`children${key}`"
            >
              {{ children }} 位孩童
            </option>
          </select>
        </div>
        <button type="button" class="commonBtn mb-2">我要這個</button>
        <button type="button" class="text-sm">加入購物車</button>
        <span class="text-center mt-2 text-sm otherFont font-bold"
          >聯繫我們
          <span class="hover:primary-red cursor-pointer">0800-123456</span>
        </span>
      </div>
    </section>
  </div>
</template>

<script>
import { onMounted, inject, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import axios from "axios";
export default {
  name: "ShopDetail",
  setup() {
    const route = useRoute();
    const store = useStore();
    const show = ref(0); // 當前要顯示的照片
    const transitionName = ref("left");
    const $ElNotification = inject("$ElNotification");
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

    // 變更 show 值
    const setShow = (index) => {
      show.value = index;
    };

    watch(
      () => show.value,
      (n, o) => {
        transitionName.value = n > o ? "right" : "left";
      }
    );

    onMounted(() => {
      getDetail(route.params.id);
    });

    return {
      detail,
      show,
      transitionName,
      setShow,
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
  //   left: 100%;
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
  //   left: -100%;
  left: 100%;
}
</style>
