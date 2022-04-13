# 日旅購！旅遊電商平台 | TraveJapan

---

> 使用 Vue3、tailwindcss 及 Element Plus 製作完成，可藉由後台來上架商品及撰寫文章，藉此豐富前台頁面。

![首頁](https://i.imgur.com/XhuHbcv.jpg)

- [前台網站連結](https://bardkidd.github.io/traveljp/#/homepage)
- [登入頁面連結](https://bardkidd.github.io/traveljp/#/login) **(登入後將直接跳離該頁)**
- [後台網站連結](https://bardkidd.github.io/traveljp/#/admin) **(須先行登入)**

## 目錄

- [前台網站](#前台功能)
  - [首頁](#首頁)
  - [精選計畫](#精選計畫)
  - [購物車](#購物車)
  - [旅遊札記](#旅遊札記)
  - [訂單查詢](#訂單查詢)
- [後台網站](#後台功能)
  - [通用](#通用)
  - [嚴選計畫](#嚴選計畫)
  - [旅遊札記](#旅遊札記)
- [登入頁面](#登入頁面)
- [使用技術](#使用技術)
- [使用插件](#使用插件)

## **前台功能：**

採用 landing page 風格來製作。

### **首頁**

1. 可透過中間的訂單列表(Orderbar)來輸入您的報名資訊，此訊息會存在 sessionStorage。有輸入的話會在購物車頁面直接帶入，省去重複填寫資料的問題。
2. 取得優惠券或套票能取得後台設定的優惠券(Coupon)等資料，並在旁邊添加複製功能。

### **精選計畫**

1. 將後台嚴選計畫功能的產品顯示於此。
2. 左側篩選器能夠從所有商品中篩選出相符合的地區及旅行天數產品。
3. 右側產品使用手刻卡片元件顯示，並以分頁元件來製作分頁。
4. 商品內頁能點選 list 符號來切換商品圖片，並在左側提供加入購物車功能。產品下方也顯示相關**地區**產品。

### **購物車**

1. 由前台加入的商品將顯示於此。
2. 可透過修改人數來更新訂單。
3. 產品列表提供單項產品刪除及整批刪除功能。
4. 優惠券輸入框能輸入由首頁訂單列表(Orderbar) "優惠券或套票" 區塊取得的優惠券來獲得折扣。
5. 必填訂購資訊使用 vee-validate 4 來判斷，以防止用戶在未輸入的情況下按下送出。

### **旅遊札記**

1. 將後台旅遊札記功能的文章顯示於此。
2. 以分頁元件來製作分頁。

### **訂單查詢**

1. 可將購物流程完成後取得的訂單編號輸入該藍未來取得訂單資訊。

## **後台功能：**

使用 Element Plus 來製作後台網站

### **通用**

- 產品、優惠券、文章的 CRUD。訂單的新增得由前台的購物流程才得以新增。

### **嚴選計畫**

- 可新增圖片，點擊兩下可刪除圖片。

### **旅遊札記**

- 可藉由富文本格式(RTF)來撰寫文章。

## **登入頁面**

登入資訊存在 cookie，以登入的話將直接進入後台，無須重複輸入帳密。

## **使用技術**

- Vue 3: 使用 composition api 才撰寫。
- Vue CLI: 快速架設開發環境。
- Vue Router: 建立整體網站路由。
- Axios: 串接 API 與後端進行串接、傳遞資訊等用途。
- JavaScript: 互動式網頁。
- RWD: 響應式網頁，可以手機、平板進行觀看。
- Scss: 建立網頁樣式。
- HTML: 網頁基本架構。

## **使用插件**

- [Element Plus](https://element-plus.org/zh-CN/)
- [VeeValidate4](https://vee-validate.logaretm.com/v4/)
- [tailwindcss](https://tailwindcss.com/)
- [vue-loading-overlay](https://www.npmjs.com/package/vue-loading-overlay)
- [tinymce](https://www.tiny.cloud/)
- [Font Awesome](https://fontawesome.com/)
