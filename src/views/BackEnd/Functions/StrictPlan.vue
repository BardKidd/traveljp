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
import { useStore } from "vuex";
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
    let rows = [
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
    const store = useStore();

    const getProducts = () => {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/products/all`;
      store.commit("ISLOADING", true);
      axios.get(api).then((res) => {
        if (res.data.success) {
          rows = res.data.products;
        }

        store.commit("ISLOADING", false);
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
