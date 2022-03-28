import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";
import "@/assets/tailwind.css";
import "@/assets/Scss/all.scss";

/* Element plus，其他元件都用自動引入的方式 */
import { ElNotification } from "element-plus";
import "element-plus/dist/index.css";

import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

const app = createApp(App);
app.provide("$ELNotification", ElNotification);
app.component("LoadingOverlay", Loading);
app.use(store).use(router).use(VueAxios, axios).mount("#app");
