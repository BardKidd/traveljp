<template>
  <el-table :data="rows" stripe style="width: 100%">
    <el-table-column prop="date" label="Date" width="180" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="address" label="Address" />
  </el-table>

  <Pagination
    @handleCurrentPage="getNewCurrent"
    @handlePageSize="getNewSize"
    v-if="rows.length > 0"
    :total="rows.length"
  ></Pagination>
</template>

<script>
// import { ref } from "vue";
import Pagination from "@/components/Pagination.vue";
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

    let newCurrent = 1;
    function getNewCurrent(num) {
      console.log("getNewCurrent", num);
      newCurrent = num;
      rows = rows.slice((newCurrent - 1) * newSize, newCurrent * newSize);
    }

    let newSize = 20;
    function getNewSize(num) {
      console.log("getNewSize", num);
      newSize = num;
      rows = rows.slice((newCurrent - 1) * newSize, newCurrent * newSize);
    }

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
