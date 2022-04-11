<template>
  <section class="flex flex-wrap">
    <section class="flex-1 p-2">
      <div class="flex flex-col">
        <span class="modalTitle">文章標題</span>
        <Field
          name="標題"
          rules="required"
          @input="handleForm"
          v-model.trim="article.title"
          class="modalInput"
          placeholder="請輸入標題"
          type="text"
        />
        <span class="primary-red font-bold">{{ errors.標題 }}</span>
      </div>
      <div class="flex flex-col">
        <span class="modalTitle">作者</span>
        <Field
          name="作者"
          rules="required"
          @input="handleForm"
          v-model.trim="article.author"
          class="modalInput"
          placeholder="請輸入作者"
          type="text"
        />
        <span class="primary-red font-bold">{{ errors.作者 }}</span>
      </div>
      <div class="flex flex-col">
        <span class="modalTitle"
          >文章摘要
          <span class="primary-retouch align-top pl-1 text-sm">(*非必填)</span>
        </span>
        <input
          @input="handleForm"
          v-model="article.description"
          class="modalInput"
          placeholder="請輸入摘要"
          type="text"
        />
      </div>
    </section>
    <section class="flex-1 p-2">
      <div class="flex flex-col">
        <p class="modalTitle">
          Tag<span class="primary-retouch align-top pl-1 text-sm"
            >(*非必填)</span
          >
        </p>
        <div class="flex flex-wrap items-center">
          <el-tag
            v-for="tag in article.tag"
            :key="tag"
            class="mb-3"
            closable
            :disable-transitions="false"
            @close="handleClose(tag)"
          >
            {{ tag }}
          </el-tag>
        </div>

        <input
          v-if="inputVisible"
          ref="InputRef"
          v-model.trim="inputValue"
          class="modalInput"
          type="text"
          @keyup.enter="handleInputConfirm"
          @blur="handleInputConfirm"
          placeholder="新增一些標籤..."
        />
        <button
          type="button"
          v-else
          class="button-new-tag otherBtn"
          @click="inputVisible = true"
        >
          + 新增 Tag
        </button>
      </div>
      <div class="flex flex-col">
        <span class="modalTitle">是否發布</span>
        <select
          @change="handleForm"
          v-model="article.isPublic"
          class="modalInput"
        >
          <option :value="true">是</option>
          <option :value="false">否</option>
        </select>
      </div>
    </section>
  </section>
  <section>
    <div class="flex flex-col">
      <span class="modalTitle"
        >文章圖片
        <span class="primary-retouch align-top pl-1 text-sm"
          >(*非必需)</span
        ></span
      >
      <input
        name="file-to-upload"
        type="file"
        ref="file1"
        accept="image/*"
        @change="getFile1($event)"
      />
    </div>
    <div class="flex flex-col mt-3" v-if="article.image">
      <span class="modalTitle border-t">圖片預覽</span>
      <img :src="article.image" alt="文章圖片" />
    </div>
    <div class="flex flex-col mt-3">
      <span class="modalTitle"
        >文章內容
        <span class="primary-retouch">(*建議開啟全螢幕編輯)</span>
      </span>
      <Editor v-model="article.content"></Editor>
      <span v-if="!article.content" class="primary-red font-bold"
        >文章內容 為必填</span
      >
    </div>
  </section>
</template>

<script>
import axios from "axios";
import { useStore } from "vuex";
import { toRef, ref, inject } from "vue";
import { Field } from "vee-validate";
import Editor from "@/components/Editor.vue";

export default {
  name: "ArticleTemplate",
  props: {
    articleData: {
      type: Object,
      required: true,
    },
    errors: {
      type: Object,
    },
  },
  emits: ["getFormData"],
  setup(props, { emit }) {
    const article = toRef(props, "articleData");
    const inputValue = ref("");
    const inputVisible = ref(false);
    const file1 = ref(null);
    const store = useStore();
    const $ElNotification = inject("$ElNotification");

    // 取得照片1功能
    const getFile1 = ($event) => {
      file1.value = $event.target.files[0];
      uploadFile(file1.value);
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
            article.value.image = res.data.imageUrl;
            handleForm();
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

    // 將 Tag 刪除
    const handleClose = (tag) => {
      article.value.tag.splice(article.value.tag.indexOf(tag), 1);
    };

    // Tag 輸入時觸發
    const handleInputConfirm = () => {
      if (inputValue.value) {
        article.value.tag.push(inputValue.value);
      }
      inputVisible.value = false;
      inputValue.value = "";
      handleForm();
    };

    // 將 Modal 資料傳出去
    const handleForm = () => {
      emit("getFormData", article.value);
    };

    return {
      props,
      article,
      inputValue,
      inputVisible,
      handleForm,
      handleClose,
      handleInputConfirm,
      getFile1,
    };
  },
  components: {
    Field,
    Editor,
  },
};
</script>
