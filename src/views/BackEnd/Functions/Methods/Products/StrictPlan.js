import { ref } from "vue";
import { useStore } from "vuex";
import axios from "axios";

export let rows = ref([]);
export let paginationInfo = ref({});
// 取得特定頁面商品
export const getProducts = (page) => {
  const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/products?page=${page}`;
  const store = useStore();
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
export const addProducts = () => {};
