<template>
  <el-dialog
    :close-on-press-escape="false"
    :show-close="false"
    :close-on-click-modal="false"
    title="刪除項目"
    v-model="props.isOpenDelModal"
  >
    <p class="text-lg text-justify">
      是否刪除<span class="primary-red font-bold">{{ props.itemTitle }}</span
      >?
    </p>
    <template #footer>
      <span class="dialog-footer">
        <button
          type="button"
          class="cancelBtn mr-2"
          @click="$emit('changeVisible')"
        >
          取消
        </button>
        <button type="button" class="dangerBtn" @click="$emit('sendModalData')">
          刪除
        </button>
      </span>
    </template>
  </el-dialog>
</template>

<script>
export default {
  name: "DelCommonModal",
  props: {
    isOpenDelModal: {
      type: Boolean,
      required: true,
    },
    itemTitle: {
      type: String,
      required: true,
      default: "",
    },
  },
  emits: ["changeVisible", "sendModalData"],
  setup(props) {
    return {
      props,
    };
  },
};
</script>
