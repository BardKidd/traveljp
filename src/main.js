import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store";
import "@/assets/tailwind.css";
import "@/assets/Scss/all.scss";

createApp(App).use(store).use(router).mount("#app");
