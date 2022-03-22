<template>
  <div>456</div>
  <!-- <el-table :data="rows" stripe style="width: 100%">
    <el-table-column prop="date" label="Date" width="180" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="address" label="Address" />
  </el-table> -->

  <!-- <Pagination
    @size="(val) => (pageSize = val)"
    @page="(val) => (currentPage = val)"
    v-if="rows.length > 0"
    :total="rows.length"
  ></Pagination> -->
</template>

<script>
import { ref } from "vue";
// import Pagination from "@/components/Pagination.vue";
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
    ];
    let pageSize = ref(20);
    let currentPage = ref(1);
    return {
      rows,
      pageSize,
      currentPage,
    };
  },

  components: {
    // Pagination,
  },
};
</script>
