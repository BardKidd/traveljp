<template>
  <el-dialog v-model="isVisible.value" title="modalTitle">
    <el-form :model="form">
      <el-form-item :label="itemLabel" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <button
          type="button"
          class="cancelBtn"
          @click="isVisible.value = false"
        >
          取消
        </button>
        <button
          type="button"
          class="primaryBtn"
          @click="isVisible.value = false"
        >
          新增
        </button>
      </span>
    </template>
  </el-dialog>
</template>

<script>
import { ref } from "vue";
export default {
  name: "CommonModal",
  props: {
    commonModalVisible: {
      type: Boolean,
      required: true,
    },
  },
  setup(props) {
    const isVisible = ref(props.commonModalVisible);
    console.log("isVisible", isVisible);
    return {
      isVisible,
    };
  },
};
</script>
