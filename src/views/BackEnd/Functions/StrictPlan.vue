<template>
  <el-table
    :data="rows.slice((newCurrent - 1) * newSize, newCurrent * newSize)"
    stripe
    style="width: 100%"
    border
  >
    <el-table-column
      align="center"
      sortable
      prop="date"
      label="Date"
      width="180"
    />
    <el-table-column
      align="center"
      sortable
      prop="name"
      label="Name"
      width="180"
    />
    <el-table-column align="center" sortable prop="address" label="Address" />
  </el-table>

  <Pagination
    @handleCurrentPage="getNewCurrent"
    @handlePageSize="getNewSize"
    v-if="rows.length > 0"
    :total="rows.length"
  ></Pagination>
</template>

<script>
import axios from "axios";
import { onMounted } from "vue";
import Pagination from "@/components/Pagination.vue";
import {
  getNewCurrent,
  getNewSize,
  newCurrent,
  newSize,
} from "@/components/Methods/ChangePage.js";
export default {
  name: "BStrictPlan",

  setup() {
    const rows = [
      {
        date: "2016-05-03",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        date: "2016-05-02",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        date: "2016-05-04",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        date: "2016-05-01",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        date: "2016-05-01",
        name: "Tom99",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        date: "2016-05-01",
        name: "Tom99",
        address: "N555555o. 189, Grove St, Los Angeles",
      },
    ];

    const getProducts = () => {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/products/all`;
      axios.get(api).then((res) => {
        console.log(res.data);
      });
    };

    onMounted(() => {
      getProducts();
    });

    return {
      rows,
      newCurrent,
      getNewCurrent,
      newSize,
      getNewSize,
    };
  },

  components: {
    Pagination,
  },
};
</script>
