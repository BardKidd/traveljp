<template>
  123
  <!-- <el-table
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
  ></Pagination> -->
</template>

<script>
import { ref } from "vue";
// import Pagination from "@/components/Pagination.vue";
export default {
  name: "BCoupon",

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

    let newCurrent = ref(1);
    function getNewCurrent(num) {
      newCurrent.value = num;
    }

    let newSize = ref(20);
    function getNewSize(num) {
      newSize.value = num;
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
    // Pagination,
  },
};
</script>
