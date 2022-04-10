<template>
  <el-pagination
    background
    layout="prev, pager, next"
    :page-count="total"
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
      default: 1,
    },
  },
  setup(props, { emit }) {
    const currentPage = ref(1);
    watch(currentPage, (n) => {
      emit("handleCurrentPage", n);
    });

    return {
      currentPage,
    };
  },
};
</script>
