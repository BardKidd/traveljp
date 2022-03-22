import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store";
import "./assets/tailwind.css";
import "@/assets/Scss/all.scss";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faRightToBracket,
  faLocationDot,
  faList,
  faStar,
  faBook,
  faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";
library.add([
  faRightToBracket,
  faLocationDot,
  faList,
  faStar,
  faBook,
  faAngleLeft,
]);

createApp(App)
  .use(store)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
