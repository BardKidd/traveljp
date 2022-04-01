<template>
  <el-table :data="rows" stripe style="width: 100%" border>
    <el-table-column align="center" sortable prop="user.name" label="顧客" />
    <el-table-column align="center" sortable prop="user.tel" label="連絡電話" />
    <el-table-column align="center" sortable prop="total" label="總金額" />
    <el-table-column
      align="center"
      sortable
      prop="cn_is_paid"
      label="是否結帳"
    />
    <el-table-column
      align="center"
      sortable
      prop="paid_date"
      label="結帳日期"
    />
    <el-table-column
      align="center"
      sortable
      prop="payment_method"
      label="付款方式"
    />
    <el-table-column align="center" sortable prop="message" label="留言" />
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
    v-if="rows.length > 0"
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
          :isOpenModal="isOpenModal"
          :errors="errors"
          @getFormData="getFormData"
          @getFile="getFile"
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
  name: "BOrderList",
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
      getOrderList(current);
    };
    // 取得 Modal 資料
    const getModalData = (val) => {
      if (isNew.value) {
        productData.value = {};
      } else {
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

    // 取得特定頁面訂單
    const getOrderList = (page) => {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/orders?page=${page}`;

      store.commit("ISLOADING", true);
      axios
        .get(api)
        .then((res) => {
          rows.value = res.data.orders;
          rows.value.forEach((item) => {
            item.cn_is_paid = item.is_paid ? "是" : "否";
          });
          paginationInfo.value = res.data.pagination;
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
      let api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/order/${temp.id}`;
      store.commit("ISLOADING", true);
      axios
        .put(api, { data: temp })
        .then((res) => {
          if (res.data.success) {
            $ElNotification({
              title: "成功",
              message: `${res.data.message}`,
              type: "success",
            });
            getOrderList(1);
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
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/order/${temp.id}`;
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

            getOrderList(1);
            isOpenDelModal.value = false;
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

    onMounted(() => {
      getOrderList(1);
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
      getFile,
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
