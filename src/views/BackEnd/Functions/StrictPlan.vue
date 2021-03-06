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
    <el-table-column align="center" sortable prop="category" label="類別" />
    <el-table-column align="center" sortable prop="title" label="名稱" />
    <el-table-column align="center" sortable prop="content" label="說明" />
    <el-table-column align="center" sortable prop="origin_price" label="原價" />
    <el-table-column align="center" sortable prop="price" label="價格" />
    <el-table-column
      align="center"
      sortable
      prop="cn_is_enable"
      label="是否啟用"
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
              getModalData(scope.row);
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
      @sendModalData="sendModalData(productData)"
      :isOpenModal="isOpenModal"
      :isNew="isNew"
      :handleSubmit="handleSubmit"
    >
      <template v-slot:content>
        <Template
          :errors="errors"
          @getFormData="getFormData"
          :productData="productData"
        ></Template>
      </template>
    </CommonModal>
  </Form>

  <DelCommonModal
    :itemTitle="productData.title"
    @changeVisible="isOpenDelModal = false"
    :isOpenDelModal="isOpenDelModal"
    @sendModalData="delProduct(productData)"
  ></DelCommonModal>
</template>

<script>
import axios from "axios";
import { onMounted, ref, inject } from "vue";
import { useStore } from "vuex";
import Pagination from "@/components/Pagination.vue";
import CommonModal from "@/components/CommonModal.vue";
import DelCommonModal from "@/components/DelCommonModal.vue";
import Template from "./Template/StrictPlanTemplate.vue";
import { Form } from "vee-validate";

export default {
  name: "BStrictPlan",
  setup() {
    const isOpenModal = ref(false);
    const isOpenDelModal = ref(false);
    const isNew = ref(false);
    const $ElNotification = inject("$ElNotification");
    const store = useStore();
    const rows = ref([]);
    const paginationInfo = ref({});
    const productData = ref({});

    // 換頁
    const changePage = (current) => {
      getProducts(current);
    };
    // 取得 Modal 資料
    const getModalData = (val) => {
      if (isNew.value) {
        productData.value = {
          title: "",
          category: "北海道",
          origin_price: Number(0),
          price: Number(0),
          unit: "當天來回",
          description: "",
          content: "",
          is_enabled: 1,
          imageUrl: "",
          imagesUrl: [],
        };
      } else {
        productData.value = val;
      }
    };

    // 取得 Modal 輸入的資料，從元件內傳出
    const getFormData = (val) => {
      productData.value = val;
    };

    // 取得特定頁面商品
    const getProducts = (page) => {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/products?page=${page}`;

      store.commit("ISLOADING", true);
      axios
        .get(api)
        .then((res) => {
          if (res.data.success) {
            rows.value = res.data.products;
            rows.value.forEach((item) => {
              item.cn_is_enable = item.is_enabled ? "是" : "否";
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

    // 送出表單(新增、編輯商品)
    const sendModalData = (temp) => {
      let api = "";
      let httpMethods = "";
      if (isNew.value) {
        api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product`;
        httpMethods = "post";
      } else {
        api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product/${temp.id}`;
        httpMethods = "put";
      }

      store.commit("ISLOADING", true);
      axios[httpMethods](api, { data: temp })
        .then((res) => {
          if (res.data.success) {
            $ElNotification({
              title: "成功",
              message: `${res.data.message}`,
              type: "success",
            });
            getProducts(1);
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

    // 刪除商品
    const delProduct = (temp) => {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product/${temp.id}`;
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

            getProducts(1);
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
      getProducts(1);
    });

    return {
      rows,
      paginationInfo,
      isNew,
      productData,
      isOpenModal,
      isOpenDelModal,
      changePage,
      getFormData,
      sendModalData,
      getModalData,
      delProduct,
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
