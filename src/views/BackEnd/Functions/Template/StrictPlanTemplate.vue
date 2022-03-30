<template>
  <section class="flex flex-wrap">
    <section class="flex-1">
      <div class="flex flex-col">
        <span class="modalTitle">產品圖片1</span>
        <input type="file" />
      </div>
      <div class="flex flex-col">
        <span class="modalTitle">產品圖片2</span>
        <input type="file" />
      </div>
      <div class="flex flex-col">
        <span class="modalTitle">產品圖片3</span>
        <input type="file" />
      </div>
      <div class="flex flex-col">
        <span class="modalTitle">產品圖片4</span>
        <input type="file" />
      </div>
      <div class="flex flex-col">
        <span class="modalTitle">產品圖片5</span>
        <input type="file" />
      </div>
    </section>
    <section class="flex-1">
      <div class="flex flex-col">
        <span class="modalTitle">類別</span>
        <select
          @change="handleForm"
          v-model="product.category.value"
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
          v-model="product.title.value"
          class="modalInput"
          placeholder="請輸入產品名稱"
          type="text"
        />
        <span class="primary-red font-bold">{{ errors.名稱 }}</span>
      </div>
      <div class="flex flex-col">
        <span class="modalTitle">單位</span>
        <select
          @change="handleForm"
          v-model="product.unit.value"
          class="modalInput"
        >
          <option v-for="unit of allUnit" :key="unit" :value="unit">
            {{ unit }}
          </option>
        </select>
      </div>
      <div class="flex flex-col">
        <span class="modalTitle">說明</span>
        <input
          @input="handleForm"
          v-model="product.content.value"
          class="modalInput"
          placeholder="請輸入產品說明"
          type="number"
        />
      </div>

      <div class="flex flex-col">
        <span class="modalTitle">原價</span>
        <Field
          name="原價"
          rules="required"
          @input="handleForm"
          v-model.number="product.origin_price.value"
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
          v-model.number="product.price.value"
          class="modalInput"
          placeholder="請輸入產品價格"
          type="text"
        />
        <span class="primary-red font-bold">{{ errors.價格 }}</span>
      </div>
      <div class="flex flex-col">
        <span class="modalTitle">是否啟用</span>
        <select
          @change="handleForm"
          v-model="product.is_enabled.value"
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
          v-model="product.description.value"
          class="modalInput"
          placeholder="請輸入產品詳細描述"
        />
      </div>
    </section>
  </section>
</template>

<script>
import { toRefs } from "vue";
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
  },
  emits: ["getFormData"],
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

    const product = toRefs(props.productData);

    const handleForm = () => {
      emit("getFormData", product);
    };

    return {
      props,
      allPlace,
      allUnit,
      product,
      handleForm,
    };
  },
  components: {
    Field,
  },
};
</script>
