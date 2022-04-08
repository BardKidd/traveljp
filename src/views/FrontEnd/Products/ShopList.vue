<template>
  <div class="container shopListBG mb-32"></div>
  <div class="container w-4/5 mx-auto mb-16">
    <div class="flex items-center mb-32">
      <div class="lrLine flex-1"></div>
      <h1 class="text-center flex-1 font-bold text-6xl otherFont">精選計畫</h1>
      <div class="lrLine flex-1"></div>
    </div>

    <p v-if="hasCalledAll" class="text-right font-bold mb-5 otherFont">
      篩選結果為 {{ rows.length }}，全部共 {{ allData.length }} 筆
    </p>
    <section class="flex flex-wrap">
      <aside class="w-1/5 shadow-[0_0_20px_rgba(0,0,0,0.2)] p-5">
        <p class="font-bold text-lg otherFont">篩選器</p>
        <div
          class="flex justify-between mb-3 border-b-2 cursor-pointer hover:primary-red"
          @click="openArea = !openArea"
        >
          <h3 class="leading-loose font-bold otherFont">地區</h3>
          <span>
            <font-awesome-icon v-if="openArea" :icon="['fas', 'minus']" />
            <font-awesome-icon v-else :icon="['fas', 'plus']" />
          </span>
        </div>
        <div class="mb-3" v-if="openArea">
          <ul>
            <li v-for="place of allPlace" :key="place">
              <label class="cursor-pointer">
                <input
                  v-model="selectCriteria"
                  type="checkbox"
                  class="mr-2"
                  :value="place"
                />
                {{ place }}
              </label>
            </li>
          </ul>
        </div>
        <div
          class="flex justify-between mb-3 border-b-2 cursor-pointer hover:primary-red"
          @click="openDays = !openDays"
        >
          <h3 class="leading-loose font-bold otherFont">旅程(天數)</h3>
          <span>
            <font-awesome-icon v-if="openDays" :icon="['fas', 'minus']" />
            <font-awesome-icon v-else :icon="['fas', 'plus']" />
          </span>
        </div>
        <div class="mb-3" v-if="openDays">
          <ul>
            <li v-for="unit of allUnit" :key="unit">
              <label class="cursor-pointer">
                <input
                  v-model="selectCriteria"
                  type="checkbox"
                  class="mr-2"
                  :value="unit"
                />{{ unit }}
              </label>
            </li>
          </ul>
        </div>
      </aside>
      <div class="flex-1 ml-10 flex flex-wrap">
        <Card
          @click="getProductDetail(item)"
          @joinTheShoppingCar="joinTheShoppingCar(item)"
          :productData="item"
          v-for="item of rows"
          :key="item.id"
        ></Card>
      </div>
    </section>
    <Pagination
      @handleCurrentPage="changePage"
      v-if="!hasCalledAll && rows.length > 0"
      :total="paginationInfo.total_pages"
      class="justify-end"
    ></Pagination>
  </div>
</template>

<script>
import axios from "axios";
import { inject, onMounted, ref, watch } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import Pagination from "@/components/Pagination.vue";
import Card from "@/components/CommonCard.vue";

export default {
  name: "ShopList",
  setup() {
    const allPlace = [
      "北海道",
      "東北",
      "東京",
      "北陸",
      "中部",
      "關西",
      "山陽山陰",
      "四國",
      "九州",
      "沖繩",
    ];
    const allUnit = [
      "當天來回",
      "2天1夜",
      "3天2夜",
      "4天3夜",
      "5天4夜",
      "6天5夜",
      "7天6夜",
      "8天7夜",
      "9天8夜",
      "10天9夜",
    ];
    const rows = ref([]); // 顯示在畫面上的資料
    const allData = ref([]); // 全部產品暫存區
    const selectCriteria = ref([]);
    const $ElNotification = inject("$ElNotification");
    const store = useStore();
    const router = useRouter();
    const hasCalledAll = ref(false);
    const openArea = ref(true);
    const openDays = ref(true);
    const paginationInfo = ref({});

    // 換頁
    const changePage = (current) => {
      getOnePageData(current);
    };

    // 取得特定頁面資料
    const getOnePageData = (page = 1) => {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products?page=${page}`;
      store.commit("ISLOADING", true);
      axios
        .get(api)
        .then((res) => {
          if (res.data.success) {
            rows.value = res.data.products;
            paginationInfo.value = res.data.pagination;
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
    // 取得所有資料
    const getAllData = () => {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`;
      store.commit("ISLOADING", true);
      axios
        .get(api)
        .then((res) => {
          if (res.data.success) {
            allData.value = res.data.products;
            rows.value = allData.value.filter((item) => {
              let flag = false;
              selectCriteria.value.some((selected) => {
                if (item.category === selected || item.unit === selected) {
                  flag = true;
                  return true;
                }
              });
              if (flag) {
                return item;
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
    // 取得產品詳細資料
    const getProductDetail = (item) => {
      router.push({ name: "ShopDetail", params: { id: item.id } });
    };
    // 加入購物車
    const joinTheShoppingCar = (product) => {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      const cart = {
        product_id: product.id,
        qty: 1,
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
    watch(
      () => selectCriteria.value,
      (n) => {
        // 切換取出全部資料還是單頁資料
        if (n.length >= 1 && hasCalledAll.value) {
          rows.value = allData.value.filter((item) => {
            let flag = false;
            selectCriteria.value.some((selected) => {
              if (item.category === selected || item.unit === selected) {
                flag = true;
                return true;
              }
            });
            if (flag) {
              return item;
            }
          });
        }
        if (n.length === 0) {
          getOnePageData();
          hasCalledAll.value = false;
        } else if (n.length === 1 && !hasCalledAll.value) {
          getAllData();
          hasCalledAll.value = true;
        }
      }
    );

    onMounted(() => {
      getOnePageData();
    });

    return {
      rows,
      paginationInfo,
      allPlace,
      allUnit,
      allData,
      hasCalledAll,
      openArea,
      openDays,
      selectCriteria,
      changePage,
      getOnePageData,
      getProductDetail,
      joinTheShoppingCar,
    };
  },
  components: {
    Pagination,
    Card,
  },
};
</script>
