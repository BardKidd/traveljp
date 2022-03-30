import { ref } from "vue";
// import { useStore } from "vuex";
import axios from "axios";
import { ElNotification } from "element-plus";
import store from "@/store";

// const store = useStore();
export let rows = ref([]);
export let paginationInfo = ref({});

// 取得特定頁面商品
export const getProducts = (page) => {
  const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/products?page=${page}`;

  store.commit("ISLOADING", true);
  axios
    .get(api)
    .then((res) => {
      rows.value = res.data.products;
      paginationInfo.value = res.data.pagination;
      store.commit("ISLOADING", false);
    })
    .catch((error) => {
      if (error) {
        store.commit("ISLOADING", false);
      }
    });
};

// 新增商品
export const addProducts = (temp) => {
  const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product`;
  store.commit("ISLOADING", true);
  axios
    .post(api, { data: temp })
    .then((res) => {
      if (res.data.success) {
        ElNotification({
          title: "成功",
          message: `${res.data.message}`,
          type: "success",
        });
        getProducts(1);
      } else {
        ElNotification({
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
