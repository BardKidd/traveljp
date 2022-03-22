<template>
  <!-- <el-pagination
    :page-sizes="[5, 10, 20, 50]"
    :page-size="pageSize"
    background
    :current-page="currentPage"
    layout="prev, pager, next, sizes"
    :total="total"
  >
  </el-pagination> -->
  <div>123</div>
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
    console.log(props.total);
    let currentPage = ref(1);
    let pageSize = ref(20);

    watch(currentPage, (n) => {
      emit("page", n);
    });
    watch(pageSize, (n) => {
      emit("size", n);
    });
    return {
      currentPage,
      pageSize,
    };
  },
  // data() {
  //   return {
  //     // 這裡的資料才是主要操作的資料
  //     currentPage: 1,
  //     pageSize: 20,
  //   };
  // },
  // methods: {},
  // watch: {
  //   currentPage(n) {
  //     const vm = this;
  //     vm.$emit("page", n);
  //   },
  //   pageSize(n) {
  //     const vm = this;
  //     vm.$emit("size", n);
  //   },
  // },
};
</script>
