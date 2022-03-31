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
    <el-table-column align="center" sortable prop="title" label="優惠券" />
    <el-table-column align="center" sortable prop="percent" label="折扣優惠" />
    <el-table-column
      align="center"
      sortable
      prop="due_date"
      label="優惠結束日期"
    />
    <el-table-column
      align="center"
      sortable
      prop="ch_is_enable"
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
    v-if="rows.length > 0"
    :total="paginationInfo.total_pages"
  ></Pagination>

  <Form v-slot="{ errors, handleSubmit }">
    <CommonModal
      @changeVisible="isOpenModal = false"
      @sendModalData="sendModalData(couponData)"
      :isOpenModal="isOpenModal"
      :isNew="isNew"
      :handleSubmit="handleSubmit"
    >
      <template v-slot:content>
        <Template
          :isOpenModal="isOpenModal"
          :errors="errors"
          @getFormData="getFormData"
          :couponData="couponData"
        ></Template>
      </template>
    </CommonModal>
  </Form>

  <DelCommonModal
    :itemTitle="couponData.title"
    @changeVisible="isOpenDelModal = false"
    :isOpenDelModal="isOpenDelModal"
    @sendModalData="delProduct(couponData)"
  ></DelCommonModal>
</template>

<script>
import axios from "axios";
import { onMounted, ref, inject } from "vue";
import { useStore } from "vuex";
import Pagination from "@/components/Pagination.vue";
import CommonModal from "@/components/CommonModal.vue";
import DelCommonModal from "@/components/DelCommonModal.vue";
import Template from "./Template/CouponTemplate.vue";
import { Form } from "vee-validate";

export default {
  name: "BCoupon",
  setup() {
    const isOpenModal = ref(false);
    const isOpenDelModal = ref(false);
    const isNew = ref(false);
    const $ElNotification = inject("$ElNotification");
    const store = useStore();
    const rows = ref([]);
    const paginationInfo = ref({});
    const couponData = ref({});

    // 換頁
    const changePage = (current) => {
      getCoupons(current);
    };
    // 取得 Modal 資料
    const getModalData = (val) => {
      if (isNew.value) {
        couponData.value = {
          title: "",
          is_enabled: 1,
          percent: 100,
          due_date: "",
          code: "",
        };
      } else {
        couponData.value = val;
      }
    };

    // 取得 Modal 輸入的資料，從元件內傳出
    const getFormData = (val) => {
      couponData.value = val;
    };

    // 取得特定頁面優惠券
    const getCoupons = (page) => {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupons?page=${page}`;

      store.commit("ISLOADING", true);
      axios
        .get(api)
        .then((res) => {
          rows.value = res.data.coupons;
          rows.value.forEach((item) => {
            item.ch_is_enable = item.is_enabled ? "是" : "否";
            const time = new Date(item.due_date);
            const year = time.getFullYear();
            const month = addZero(time.getMonth() + 1);
            const date = addZero(time.getDate());
            item.due_date = `${year}-${month}-${date}`;
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

    // 日期月份補上 0
    const addZero = (time) => {
      return time < 10 ? `0${time}` : time;
    };

    // 送出表單(新增、編輯優惠券)
    const sendModalData = (temp) => {
      let api = "";
      let httpMethods = "";
      if (isNew.value) {
        api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupon`;
        httpMethods = "post";
      } else {
        api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupon/${temp.id}`;
        httpMethods = "put";
      }
      temp = {
        ...temp,
        due_date: Math.floor(new Date(temp.due_date).getTime()),
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
            getCoupons(1);
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

    // 刪除優惠券
    const delProduct = (temp) => {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupon/${temp.id}`;
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

            getCoupons(1);
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
      getCoupons(1);
    });

    return {
      rows,
      paginationInfo,
      isNew,
      couponData,
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
