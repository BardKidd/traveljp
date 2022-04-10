<template>
  <section class="container pt-44 w-4/5 mx-auto">
    <h1 class="text-5xl font-bold leading-loose">{{ detail.title }}</h1>
    <section class="w-full">
      <img
        class="object-cover object-center w-full"
        :src="detail.image"
        alt="文章大圖"
      />
    </section>

    <div class="primary-red text-sm leading-loose">
      <font-awesome-icon :icon="['fas', 'tag']" />
      <span v-for="tag of detail.tag" :key="tag" class="pl-2">#{{ tag }}</span>
    </div>
    <div class="lLine w-1/3 mb-10"></div>
    <div v-html="detail.content"></div>
    <div class="my-20">
      <p class="text-sm">責任編輯：{{ detail.author }}</p>
      <p class="text-sm">更新日期：{{ detail.create_at }}</p>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import { inject, onMounted, ref } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
export default {
  name: "ArticleDetail",
  setup() {
    const route = useRoute();
    const store = useStore();
    const $ElNotification = inject("$ElNotification");
    const detail = ref({});
    // 取得文章詳細資料
    const getArticleDetail = (id) => {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/article/${id}`;
      store.commit("ISLOADING", true);
      axios
        .get(api)
        .then((res) => {
          if (res.data.success) {
            detail.value = res.data.article;
            const time = new Date(detail.value.create_at);
            const year = time.getFullYear();
            const month = addZero(time.getMonth() + 1);
            const day = addZero(time.getDate());
            detail.value.create_at = `${year}-${month}-${day}`;
          } else {
            $ElNotification({
              title: "錯誤",
              message: res.data.message,
              type: "error",
            });
          }
          store.commit("ISLOADING", false);
        })
        .catch(() => {
          store.commit("ISLOADING", false);
        });
    };

    // 日期月份補上 0
    const addZero = (time) => {
      return time < 10 ? `0${time}` : time;
    };

    onMounted(() => {
      getArticleDetail(route.params.id);
    });

    return {
      detail,
    };
  },
};
</script>
