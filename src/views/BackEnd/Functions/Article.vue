<template>
  <div>
    <button
      type="button"
      @click="
        isNew = true;
        isOpenModal = true;
        getModalData();
      "
      class="primaryBtn mb-3"
    >
      新增
    </button>
  </div>
  <el-table :data="rows" stripe style="width: 100%" border>
    <el-table-column align="center" sortable prop="title" label="標題" />
    <el-table-column align="center" sortable prop="description" label="摘要" />
    <el-table-column align="center" sortable prop="author" label="作者" />
    <el-table-column align="center" sortable prop="tag" label="Tag" />
    <el-table-column
      align="center"
      sortable
      prop="create_at_form"
      label="更新日期"
    />
    <el-table-column
      align="center"
      sortable
      prop="cn_isPublic"
      label="是否公開"
    />
    <el-table-column>
      <template #default="scope">
        <div class="flex flex-wrap">
          <button
            type="button"
            class="primaryBtn mr-2"
            @click="
              isNew = false;
              isOpenModal = true;
              getModalData(scope.row);
            "
          >
            編輯
          </button>
          <button
            class="dangerBtn"
            type="button"
            @click="
              isNew = false;
              isOpenDelModal = true;
              getModalData(scope.row, 'del');
            "
          >
            刪除
          </button>
        </div>
      </template>
    </el-table-column>
  </el-table>

  <Pagination
    @handleCurrentPage="changePage"
    v-if="rows?.length > 0"
    :total="paginationInfo.total_pages"
  ></Pagination>

  <Form v-slot="{ errors, handleSubmit }">
    <CommonModal
      @changeVisible="isOpenModal = false"
      @sendModalData="sendModalData(articleData)"
      :isOpenModal="isOpenModal"
      :isNew="isNew"
      :handleSubmit="handleSubmit"
    >
      <template v-slot:content>
        <Template
          :errors="errors"
          @getFormData="getFormData"
          :articleData="articleData"
        ></Template>
      </template>
    </CommonModal>
  </Form>

  <DelCommonModal
    :itemTitle="articleData.title"
    @changeVisible="isOpenDelModal = false"
    :isOpenDelModal="isOpenDelModal"
    @sendModalData="delArticle(articleData)"
  ></DelCommonModal>
</template>

<script>
import axios from "axios";
import { onMounted, ref, inject } from "vue";
import { useStore } from "vuex";
import Pagination from "@/components/Pagination.vue";
import CommonModal from "@/components/CommonModal.vue";
import DelCommonModal from "@/components/DelCommonModal.vue";
import Template from "./Template/ArticleTemplate.vue";
import { Form } from "vee-validate";
import { addZero } from "@/commonFunction/common";

export default {
  name: "BArticle",
  setup() {
    const isOpenModal = ref(false);
    const isOpenDelModal = ref(false);
    const isNew = ref(false);
    const $ElNotification = inject("$ElNotification");
    const store = useStore();
    const rows = ref([]);
    const paginationInfo = ref({});
    const articleData = ref({});

    // 換頁
    const changePage = (current) => {
      getArticles(current);
    };
    // 取得 Modal 資料
    const getModalData = (val, type) => {
      if (isNew.value) {
        articleData.value = {
          title: "",
          description: "",
          image: "",
          tag: [],
          author: "",
          isPublic: false,
          content: "",
        };
      } else {
        articleData.value = val;
        if (type !== "del") getArticleDetail(val.id);
      }
    };

    // 取得 Modal 輸入的資料，從元件內傳出
    const getFormData = (val) => {
      articleData.value = val;
    };

    // 取得特定頁面文章
    const getArticles = (page) => {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/articles?page=${page}`;

      store.commit("ISLOADING", true);
      axios
        .get(api)
        .then((res) => {
          if (res.data.success) {
            rows.value = res.data.articles;
            rows.value.forEach((item) => {
              item.cn_isPublic = item.isPublic ? "是" : "否";
            });
            paginationInfo.value = res.data.pagination;
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

    // 取得單筆文章內容
    const getArticleDetail = (id) => {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/article/${id}`;
      store.commit("ISLOADING", true);
      axios
        .get(api)
        .then((res) => {
          if (res.data.success) {
            articleData.value.content = res.data.article.content;
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

    // 送出表單(新增、編輯文章)
    const sendModalData = (temp) => {
      let api = "";
      let httpMethods = "";
      if (isNew.value) {
        api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/article`;
        httpMethods = "post";
      } else {
        api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/article/${temp.id}`;
        httpMethods = "put";
      }
      const time = new Date();
      const year = time.getFullYear();
      const month = addZero(time.getMonth() + 1);
      const day = addZero(time.getDate());
      temp = {
        ...temp,
        create_at: new Date().getTime(),
        create_at_form: `${year}-${month}-${day}`,
      };

      store.commit("ISLOADING", true);
      axios[httpMethods](api, { data: temp })
        .then((res) => {
          if (res.data.success) {
            $ElNotification({
              title: "成功",
              message: `${res.data.message}`,
              type: "success",
            });
            getArticles(1);
          } else {
            $ElNotification({
              title: "錯誤",
              message: `${res.data.message}`,
              type: "error",
            });
            store.commit("ISLOADING", false);
          }
        })
        .catch((error) => {
          if (error) {
            store.commit("ISLOADING", false);
          }
        });
    };

    // 刪除文章
    const delArticle = (temp) => {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/article/${temp.id}`;
      store.commit("ISLOADING", true);
      axios
        .delete(api)
        .then((res) => {
          if (res.data.success) {
            $ElNotification({
              title: "成功",
              message: `${res.data.message}`,
              type: "success",
            });

            getArticles(1);
            isOpenDelModal.value = false;
          } else {
            store.commit("ISLOADING", false);
            $ElNotification({
              title: "錯誤",
              message: `${res.data.message}`,
              type: "error",
            });
          }
        })
        .catch((error) => {
          if (error) {
            store.commit("ISLOADING", false);
          }
        });
    };

    onMounted(() => {
      getArticles(1);
    });

    return {
      rows,
      paginationInfo,
      isNew,
      articleData,
      isOpenModal,
      isOpenDelModal,
      changePage,
      getFormData,
      sendModalData,
      getModalData,
      delArticle,
      getArticleDetail,
    };
  },

  components: {
    Pagination,
    CommonModal,
    DelCommonModal,
    Template,
    Form,
  },
};
</script>
