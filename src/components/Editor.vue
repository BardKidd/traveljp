<template>
  <Editor :api-key="apiKey" :init="init" />
</template>

<script>
import { reactive, toRefs } from "vue";
import Editor from "@tinymce/tinymce-vue";
export default {
  name: "EditorComponent",
  setup() {
    const tiny = reactive({
      apiKey: "qagffr3pkuv17a8on1afax661irst1hbr4e6tbv888sz91jc",
      init: {
        skin: "fabric",
        language: "zh_TW",
        placeholder: "請輸入文章內容",
        resize: "both",
        branding: false,
        menubar: false,
        plugins:
          "paste importcss searchreplace autolink autosave directionality code visualblocks visualchars fullscreen image link media template codesample table  hr pagebreak nonbreaking anchor insertdatetime lists wordcount textpattern noneditable help",
        toolbar:
          "fullscreen | undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor removeformat | image media link",
      },
    });
    return {
      ...toRefs(tiny),
    };
  },
  components: {
    Editor,
  },
};
</script>
