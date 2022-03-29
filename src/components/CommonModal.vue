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
          @click="$emit('changeVisible')"
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
    commonModalVisible: {
      type: Boolean,
      required: true,
    },
    isNew: {
      type: Boolean,
      required: true,
    },
  },
  emits: ["changeVisible"],

  setup(props) {
    const isVisible = toRef(props, "commonModalVisible");

    return {
      isVisible,
    };
  },
};
</script>
