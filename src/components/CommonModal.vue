<template>
  <el-dialog
    :show-close="false"
    :close-on-click-modal="false"
    :title="isNew ? '新增' : '編輯'"
    v-model="isVisible"
  >
    <slot name="content"></slot>
    <template #footer>
      <span class="dialog-footer">
        <button
          type="button"
          class="cancelBtn mr-2"
          @click="$emit('changeVisible')"
        >
          取消
        </button>
        <button
          type="button"
          class="primaryBtn"
          @click="
            handleSubmit(() => {
              $emit('sendModalData');
              $emit('changeVisible');
            })
          "
        >
          送出
        </button>
      </span>
    </template>
  </el-dialog>
</template>

<script>
import { toRef } from "vue";
export default {
  name: "CommonModal",
  props: {
    isOpenModal: {
      type: Boolean,
      required: true,
    },
    isNew: {
      type: Boolean,
      required: true,
    },
    handleSubmit: {
      type: Function,
    },
  },
  emits: ["changeVisible", "sendModalData"],

  setup(props) {
    const isVisible = toRef(props, "isOpenModal");

    return {
      isVisible,
    };
  },
};
</script>
