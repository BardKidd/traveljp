<template>
  <el-pagination
    :page-sizes="[5, 10, 20, 50]"
    background
    layout="prev, pager, next, sizes"
    :total="total"
    v-model:page-size="pageSize"
    v-model:current-page="currentPage"
  />
</template>

<script>
import { ref, watch } from "vue";
export default {
  name: "PaginationComponent",
  props: {
    total: {
      type: Number,
      required: true,
    },
  },
  setup(props, { emit }) {
    let currentPage = ref(1);
    let pageSize = ref(20);

    watch(pageSize, (n) => {
      emit("handlePageSize", n);
    });
    watch(currentPage, (n) => {
      emit("handleCurrentPage", n);
    });

    return {
      currentPage,
      pageSize,
    };
  },
};
</script>
