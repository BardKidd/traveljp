<template>
  <section class="container pt-44 w-5/6 md:w-4/5 lg:w-3/5 mx-auto">
    <h1
      class="text-3xl md:text-4xl lg:text:5xl md:mb-3 font-bold leading-loose"
    >
      {{ detail.title }}
    </h1>
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
    <div class="leading-loose text-justify" v-html="detail.content"></div>
    <div class="my-20">
      <p class="text-sm">責任編輯：{{ detail.author }}</p>
      <p class="text-sm">更新日期：{{ detail.create_at_form }}</p>
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

    onMounted(() => {
      getArticleDetail(route.params.id);
    });

    return {
      detail,
    };
  },
};
</script>

<style lang="scss" scoped>
::v-deep h2 {
  font-size: 1.5rem;
}
::v-deep h3 {
  font-size: 1.25rem;
}
::v-deep p {
  display: flex;
  flex-wrap: wrap;
  > img {
    flex: 1;
  }
}
</style>
