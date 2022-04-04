import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store";
// import axios from "axios";
import api from "./interceptors/axiosConfig--Notification";
import VueAxios from "vue-axios";
import "@/assets/tailwind.css";
import "@/assets/Scss/all.scss";

/* Element plus，其他元件都用自動引入的方式 */
import { ElNotification } from "element-plus";
import "element-plus/dist/index.css";

// Loading-Overlay
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

// Vee-Validate4
import { defineRule, configure } from "vee-validate";
import { required } from "@vee-validate/rules";
import { localize, setLocale } from "@vee-validate/i18n";
import zh_TW from "@vee-validate/i18n/dist/locale/zh_TW.json";
configure({
  generateMessage: localize({
    zh_TW,
  }),
});
setLocale("zh_TW");
defineRule("required", required);

// font awesome 5
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
// import { faFacebookF } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faFacebookF);

const app = createApp(App);
app.provide("$ElNotification", ElNotification);
app.component("LoadingOverlay", Loading);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(store).use(router).use(VueAxios, api).mount("#app");
