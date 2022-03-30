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
  <el-table
    :data="rows.slice((newCurrent - 1) * newSize, newCurrent * newSize)"
    stripe
    style="width: 100%"
    border
  >
    <el-table-column align="center" sortable prop="category" label="類別" />
    <el-table-column align="center" sortable prop="title" label="名稱" />
    <el-table-column align="center" sortable prop="content" label="說明" />
    <el-table-column align="center" sortable prop="origin_price" label="原價" />
    <el-table-column align="center" sortable prop="price" label="價格" />
    <el-table-column
      align="center"
      sortable
      prop="is_enabled"
      label="是否啟用"
    />
    <el-table-column>
      <template #default="scope">
        <div class="flex flex-wrap">
          <button
            type="button"
            class="primaryBtn mr-2"
            @click="getModalData(scope.row)"
          >
            編輯
          </button>
          <button class="dangerBtn" type="button">刪除</button>
        </div>
      </template>
    </el-table-column>
  </el-table>

  <Pagination
    @handleCurrentPage="getNewCurrent"
    @handlePageSize="getNewSize"
    v-if="rows.length > 0"
    :total="rows.length"
  ></Pagination>
  <Form v-slot="{ errors, handleSubmit }">
    <CommonModal
      @changeVisible="isOpenModal = false"
      @sendModalData="addProducts(productData)"
      :isOpenModal="isOpenModal"
      :isNew="isNew"
      :handleSubmit="handleSubmit"
    >
      <template v-slot:content>
        <Template
          :isOpenModal="isOpenModal"
          :errors="errors"
          @getFormData="getFormData"
          @getFile="getFile"
          :productData="productData"
        ></Template>
      </template>
    </CommonModal>
  </Form>
</template>

<script>
import axios from "axios";
import { onMounted, ref, inject } from "vue";
import { useStore } from "vuex";
import Pagination from "@/components/Pagination.vue";
import {
  getNewCurrent,
  getNewSize,
  newCurrent,
  newSize,
} from "@/components/Methods/ChangePage.js";
import CommonModal from "@/components/CommonModal.vue";
import Template from "./Template/StrictPlanTemplate.vue";
import { Form } from "vee-validate";

export default {
  name: "BStrictPlan",
  setup() {
    const isOpenModal = ref(false);
    const isNew = ref(false);
    const $ElNotification = inject("$ElNotification");
    const store = useStore();
    const rows = ref([]);
    const paginationInfo = ref({});
    const productData = ref({});

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
        console.log("傳入的資料", val);
        productData.value = val;
      }
    };
    // 取得 Modal 輸入的資料，從元件內傳出
    const getFormData = (val) => {
      productData.value = val;
    };
    // 取得照片 URL
    const getFile = (val) => {
      productData.value.imagesUrl.push(val);
    };

    // 取得特定頁面商品
    const getProducts = (page) => {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/products?page=${page}`;

      store.commit("ISLOADING", true);
      axios
        .get(api)
        .then((res) => {
          rows.value = res.data.products;
          paginationInfo.value = res.data.pagination;
          store.commit("ISLOADING", false);
        })
        .catch((error) => {
          if (error) {
            store.commit("ISLOADING", false);
          }
        });
    };

    // 新增商品
    const addProducts = (temp) => {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product`;
      store.commit("ISLOADING", true);
      axios
        .post(api, { data: temp })
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

    onMounted(() => {
      getProducts(1);
    });

    return {
      rows,
      isNew,
      newCurrent,
      getNewCurrent,
      newSize,
      getNewSize,
      productData,
      isOpenModal,
      getFormData,
      addProducts,
      getFile,
      getModalData,
    };
  },

  components: {
    Pagination,
    CommonModal,
    Template,
    Form,
  },
};
</script>
