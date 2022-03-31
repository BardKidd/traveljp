<template>
  <section class="flex flex-wrap">
    <section class="flex-1">
      <div class="flex flex-col">
        <span class="modalTitle">產品圖片1</span>
        <input
          name="file-to-upload"
          type="file"
          ref="file1"
          accept="image/*"
          @change="getFile1($event)"
        />
      </div>
      <div class="flex flex-col">
        <span class="modalTitle">產品圖片2</span>
        <input
          name="file-to-upload"
          type="file"
          ref="file2"
          accept="image/*"
          @change="getFile2($event)"
        />
      </div>
      <div class="flex flex-col">
        <span class="modalTitle">產品圖片3</span>
        <input
          name="file-to-upload"
          type="file"
          ref="file3"
          accept="image/*"
          @change="getFile1($event)"
        />
      </div>
      <div class="flex flex-col">
        <span class="modalTitle">產品圖片4</span>
        <input
          name="file-to-upload"
          type="file"
          ref="file4"
          accept="image/*"
          @change="getFile1($event)"
        />
      </div>
      <div class="flex flex-col">
        <span class="modalTitle">產品圖片5</span>
        <input
          name="file-to-upload"
          type="file"
          ref="file5"
          accept="image/*"
          @change="getFile1($event)"
        />
      </div>
      <div class="flex flex-col mt-3 p-2">
        <span class="modalTitle border-t">圖片預覽</span>
        <img
          v-for="(img, key) of product.imagesUrl"
          :key="img"
          :src="img"
          :alt="`圖片預覽${key + 1}`"
        />
      </div>
    </section>
    <section class="flex-1">
      <div class="flex flex-col">
        <span class="modalTitle">類別</span>
        <select
          @change="handleForm"
          v-model="product.category"
          class="modalInput"
        >
          <option v-for="place of allPlace" :key="place" :value="place">
            {{ place }}
          </option>
        </select>
      </div>
      <div class="flex flex-col">
        <span class="modalTitle">名稱</span>
        <Field
          name="名稱"
          rules="required"
          @input="handleForm"
          v-model.trim="product.title"
          class="modalInput"
          placeholder="請輸入產品名稱"
          type="text"
        />
        <span class="primary-red font-bold">{{ errors.名稱 }}</span>
      </div>
      <div class="flex flex-col">
        <span class="modalTitle">旅程(天數)</span>
        <select @change="handleForm" v-model="product.unit" class="modalInput">
          <option v-for="unit of allUnit" :key="unit" :value="unit">
            {{ unit }}
          </option>
        </select>
      </div>
      <div class="flex flex-col">
        <span class="modalTitle">說明</span>
        <input
          @input="handleForm"
          v-model="product.content"
          class="modalInput"
          placeholder="請輸入產品說明"
          type="text"
        />
      </div>

      <div class="flex flex-col">
        <span class="modalTitle">原價</span>
        <Field
          name="原價"
          rules="required"
          @input="handleForm"
          v-model.number="product.origin_price"
          class="modalInput"
          placeholder="請輸入產品原價"
          type="number"
        />
        <span class="primary-red font-bold">{{ errors.原價 }}</span>
      </div>
      <div class="flex flex-col">
        <span class="modalTitle">價格</span>
        <Field
          name="價格"
          rules="required"
          @input="handleForm"
          v-model.number="product.price"
          class="modalInput"
          placeholder="請輸入產品價格"
          type="number"
        />
        <span class="primary-red font-bold">{{ errors.價格 }}</span>
      </div>
      <div class="flex flex-col">
        <span class="modalTitle">是否啟用</span>
        <select
          @change="handleForm"
          v-model="product.is_enabled"
          class="modalInput"
        >
          <option :value="1">是</option>
          <option :value="0">否</option>
        </select>
      </div>
      <div class="flex flex-col">
        <span class="modalTitle">詳細</span>
        <textarea
          @input="handleForm"
          v-model.trim="product.description"
          class="modalInput"
          placeholder="請輸入產品詳細描述"
        />
      </div>
    </section>
  </section>
</template>

<script>
import axios from "axios";
import { toRef, ref, inject /*watch*/ } from "vue";
import { useStore } from "vuex";
import { Field } from "vee-validate";

export default {
  name: "StrictPlanTemplate",
  props: {
    productData: {
      type: Object,
      required: true,
    },
    errors: {
      type: Object,
    },
    isOpenModal: {
      type: Boolean,
      required: true,
    },
  },
  emits: ["getFormData", "getFIle"],
  setup(props, { emit }) {
    const allPlace = [
      "北海道",
      "東北",
      "東京",
      "北陸",
      "中部",
      "關西",
      "山陽山陰",
      "四國",
      "九州",
      "沖繩",
    ];
    const allUnit = [
      "當天來回",
      "2天1夜",
      "3天2夜",
      "4天3夜",
      "5天4夜",
      "6天5夜",
      "7天6夜",
      "8天7夜",
      "9天8夜",
      "10天9夜",
    ];
    const store = useStore();
    const $ElNotification = inject("$ElNotification");
    const product = toRef(props, "productData");
    const file1 = ref(null);
    const file2 = ref(null);
    const file3 = ref(null);
    const file4 = ref(null);
    const file5 = ref(null);

    // 將 Modal 資料傳出去
    const handleForm = () => {
      emit("getFormData", product.value);
    };
    // 取得照片1功能
    const getFile1 = ($event) => {
      file1.value = $event.target.files[0];
      uploadFile(file1.value);
    };
    // 取得照片2功能
    const getFile2 = ($event) => {
      file2.value = $event.target.files[0];
      uploadFile(file2.value);
    };
    // 取得照片3功能
    const getFile3 = ($event) => {
      file3.value = $event.target.files[0];
      uploadFile(file3.value);
    };
    // 取得照片4功能
    const getFile4 = ($event) => {
      file4.value = $event.target.files[0];
      uploadFile(file4.value);
    };
    // 取得照片5功能
    const getFile5 = ($event) => {
      file5.value = $event.target.files[0];
      uploadFile(file5.value);
    };

    // 上傳照片功能
    const uploadFile = (file) => {
      if (!file) return;
      const formDate = new FormData();
      formDate.append("file-to-upload", file);
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/upload`;
      store.commit("ISLOADING", true);
      axios
        .post(api, formDate)
        .then((res) => {
          if (res.data.success) {
            // 將照片網址傳出去
            emit("getFile", res.data.imageUrl);
          } else {
            $ElNotification({
              title: "錯誤",
              message: `${res.data.message}`,
              type: "error",
            });
          }
          store.commit("ISLOADING", false);
        })
        .catch((error) => {
          if (error) {
            store.commit("ISLOADING", false);
          }
        });
    };

    // watch(
    //   () => props.isOpenModal,
    //   () => {
    //     file1.value = "";
    //     file2.value = "";
    //     file3.value = "";
    //     file4.value = "";
    //     file5.value = "";
    //   }
    // );

    return {
      props,
      allPlace,
      allUnit,
      product,
      handleForm,
      getFile1,
      getFile2,
      getFile3,
      getFile4,
      getFile5,
    };
  },
  components: {
    Field,
  },
};
</script>
