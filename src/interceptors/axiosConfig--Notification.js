import axios from "axios";
import { ElNotification } from "element-plus";

const api = axios;

// 攔截器---------------------------------------------------------------------------
api.defaults.timeout = 20000;
api.interceptors.request.use(
  (config) => {
    // 篩選出 token
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)TravelJapan\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    config.headers.Authorization = token;
    config.headers["Content-Type"] = "application/json; charset=utf-8";
    config.withCredentials = true;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
api.interceptors.response.use(
  (config) => {
    switch (config.data.Status) {
      case 400:
        ElNotification({
          title: "錯誤",
          message: config.data.ErrorMessage,
          type: "error",
          duration: 5000,
        });
        break;
    }
    return config;
  },
  // 跑 catch
  (error) => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          break;
        case 403:
          ElNotification({
            title: "錯誤",
            message: "403-伺服器連線錯誤，請聯絡IT人員",
            type: "error",
            duration: 5000,
          });
          break;
        case 404:
          ElNotification({
            title: "錯誤",
            message: "404-無法找到此網址，請聯絡IT人員",
            type: "error",
            duration: 5000,
          });
          break;
        case 405:
          ElNotification({
            title: "錯誤",
            message: "405 Error",
            type: "error",
            duration: 5000,
          });
          break;
        case 415:
          ElNotification({
            title: "錯誤",
            message: "415 Error",
            type: "error",
            duration: 5000,
          });

          break;
        case 500:
          ElNotification({
            title: "錯誤",
            message: "500-系統程式發生錯誤，請聯絡程式人員",
            type: "error",
            duration: 5000,
          });
          break;
      }
    } else {
      ElNotification({
        title: "錯誤",
        message: "CORS-系統連不上，請確認網路狀況與環境問題",
        type: "error",
        duration: 5000,
      });
    }
    return Promise.reject(error);
  }
);

export default api;
