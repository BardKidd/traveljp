<template>
  <div>
    <button
      type="button"
      @click="
        commonModalVisible = true;
        isNew = true;
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
            @click="ts(scope.$index, scope.row)"
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
  <Form v-slot="{ errors }">
    <CommonModal
      @changeVisible="commonModalVisible = false"
      :commonModalVisible="commonModalVisible"
      :isNew="isNew"
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
</template>

<script>
// import axios from "axios";
import { onMounted, reactive, ref } from "vue";
// import { useStore } from "vuex";
import Pagination from "@/components/Pagination.vue";
import {
  getNewCurrent,
  getNewSize,
  newCurrent,
  newSize,
} from "@/components/Methods/ChangePage.js";
import CommonModal from "@/components/CommonModal.vue";
import Template from "./Template/StrictPlanTemplate.vue";
import { getProducts, rows } from "./Methods/Products/StrictPlan";
import { Form } from "vee-validate";

export default {
  name: "BStrictPlan",
  setup() {
    const commonModalVisible = ref(false);
    const isNew = ref(false);

    let productData = reactive({
      title: "",
      category: "北海道",
      origin_price: 0,
      price: 0,
      unit: "當天來回",
      description: "",
      content: "",
      is_enabled: 1,
      imageUrl: "",
      imagesUrl: [],
    });

    const getFormData = (val) => {
      productData = val;
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
      commonModalVisible,
      getFormData,
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
