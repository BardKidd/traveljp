import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";
import "@/assets/tailwind.css";
import "@/assets/Scss/all.scss";

const app = createApp(App).use(store).use(router);

app
  .use(VueAxios, axios)
  //   .provide("axios", app.config.globalProperties.axios)

  .mount("#app");
