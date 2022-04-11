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
import { required, email } from "@vee-validate/rules";
import { localize, setLocale } from "@vee-validate/i18n";
import zh_TW from "@vee-validate/i18n/dist/locale/zh_TW.json";
configure({
  generateMessage: localize({
    zh_TW,
  }),
});
setLocale("zh_TW");
defineRule("required", required);
defineRule("email", email);

// font awesome 5
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhoneAlt,
  faMinus,
  faPlus,
  faDollarSign,
  faMapMarkedAlt,
  faInfoCircle,
  faMapMarkerAlt,
  faShoppingCart,
  faTrashAlt,
  faArrowLeft,
  faCheckSquare,
  faChevronLeft,
  faChevronRight,
  faTag,
  faSignOutAlt,
  faGlobeAsia,
  faListAlt,
  faStar,
  faNewspaper,
  faUser,
  faKey,
  faSignInAlt,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(
  faFacebookF,
  faTwitter,
  faInstagram,
  faGithub,
  faPhoneAlt,
  faMinus,
  faPlus,
  faDollarSign,
  faMapMarkedAlt,
  faInfoCircle,
  faMapMarkerAlt,
  faShoppingCart,
  faTrashAlt,
  faArrowLeft,
  faCheckSquare,
  faChevronLeft,
  faChevronRight,
  faTag,
  faSignOutAlt,
  faGlobeAsia,
  faListAlt,
  faStar,
  faNewspaper,
  faUser,
  faKey,
  faSignInAlt,
  faHome
);

const app = createApp(App);
app.provide("$ElNotification", ElNotification);
app.component("LoadingOverlay", Loading);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(store).use(router).use(VueAxios, api).mount("#app");
