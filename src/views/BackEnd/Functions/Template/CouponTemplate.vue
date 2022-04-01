<template>
  <section class="flex flex-col">
    <div class="flex flex-col">
      <span class="modalTitle">優惠券名稱</span>
      <Field
        name="優惠券名稱"
        rules="required"
        @input="handleForm"
        v-model.trim="coupon.title"
        class="modalInput"
        placeholder="請輸入優惠券名稱"
        type="text"
      />
      <span class="primary-red font-bold">{{ errors.優惠券名稱 }}</span>
    </div>
    <div class="flex flex-col">
      <span class="modalTitle">優惠碼</span>
      <Field
        name="優惠碼"
        rules="required"
        @input="handleForm"
        v-model.trim="coupon.code"
        class="modalInput"
        placeholder="請輸入優惠碼"
        type="text"
      />
      <span class="primary-red font-bold">{{ errors.優惠碼 }}</span>
    </div>
    <div class="flex flex-col">
      <span class="modalTitle">折扣優惠(百分比)</span>
      <Field
        name="折扣優惠"
        rules="required"
        @input="handleForm"
        v-model.number="coupon.percent"
        class="modalInput"
        placeholder="請輸入折扣優惠"
        type="number"
      />
      <span class="primary-red font-bold">{{ errors.折扣優惠 }}</span>
    </div>
    <div class="flex flex-col">
      <span class="modalTitle">優惠結束日期</span>
      <Field
        name="優惠結束日期"
        rules="required"
        @input="handleForm"
        v-model="coupon.due_date"
        class="modalInput"
        placeholder="請選擇優惠結束日期"
        type="date"
      />
      <span class="primary-red font-bold">{{ errors.優惠結束日期 }}</span>
    </div>
    <div class="flex flex-col">
      <span class="modalTitle">是否啟用</span>
      <select
        @change="handleForm"
        v-model="coupon.is_enabled"
        class="modalInput"
      >
        <option :value="1">是</option>
        <option :value="0">否</option>
      </select>
    </div>
  </section>
</template>

<script>
import { toRef } from "vue";
import { Field } from "vee-validate";

export default {
  name: "CouponTemplate",
  props: {
    couponData: {
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
    const coupon = toRef(props, "couponData");

    // 將 Modal 資料傳出去
    const handleForm = () => {
      emit("getFormData", coupon.value);
    };

    return {
      props,
      coupon,
      handleForm,
    };
  },
  components: {
    Field,
  },
};
</script>
