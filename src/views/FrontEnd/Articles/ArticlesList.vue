<template>
  <div class="articlesListBG mb-32"></div>
  <div class="container w-5/6 lg:w-4/5 mx-auto mb-16">
    <!-- 本頁標題 開始 -->
    <div class="flex items-center mb-32">
      <div class="hidden lg:block lrLine flex-1"></div>
      <h1
        class="text-center flex-1 font-bold text-4xl md:text-5xl lg:text-6xl otherFont"
      >
        旅遊札記
      </h1>
      <div class="hidden lg:block lrLine flex-1"></div>
    </div>
    <!-- 本頁標題 結束 -->

    <section class="flex flex-wrap">
      <!-- 右側卡片區塊 開始 -->
      <div class="flex-1 ml-10 flex flex-wrap">
        <Card
          @readMore="getProductDetail(card)"
          v-for="card of rows"
          :key="card.num"
          :cardData="card"
        ></Card>
      </div>
      <!-- 右側卡片區塊 結束 -->
    </section>

    <Pagination
      @handleCurrentPage="changePage"
      v-if="rows.length > 0"
      :total="paginationInfo.total_pages"
      class="justify-end"
    ></Pagination>
  </div>
</template>

<script>
import axios from "axios";
import { inject, onMounted, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import Card from "@/components/CommonLargeCard.vue";
import Pagination from "@/components/Pagination.vue";

export default {
  name: "ArticlesList",
  setup() {
    const rows = ref([]); // 顯示在畫面上的資料
    const $ElNotification = inject("$ElNotification");
    const store = useStore();
    const router = useRouter();
    const paginationInfo = ref({});

    // 換頁
    const changePage = (current) => {
      getOnePageData(current);
    };

    // 取得特定頁面資料
    const getOnePageData = (page = 1) => {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/articles?page=${page}`;
      store.commit("ISLOADING", true);
      axios
        .get(api)
        .then((res) => {
          if (res.data.success) {
            rows.value = res.data.articles;
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
    // 取得文章詳細資料
    const getProductDetail = (item) => {
      router.push({ name: "ArticleDetail", params: { id: item.id } });
    };

    onMounted(() => {
      getOnePageData();
    });

    return {
      rows,
      paginationInfo,
      changePage,
      getOnePageData,
      getProductDetail,
    };
  },
  components: {
    Pagination,
    Card,
  },
};
</script>
