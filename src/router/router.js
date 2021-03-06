import { createRouter, createWebHashHistory } from "vue-router";
import axios from "axios";

const routes = [
  {
    path: "/",
    name: "L-Index",
    component: () =>
      import(
        /* webpackChunkName: "L-Index" */ "@/views/FrontEnd/Layout/L-Index.vue"
      ),
    children: [
      {
        path: "homepage",
        name: "HomePage",
        component: () =>
          import(
            /* webpackChunkName: "HomePage" */ "@/views/FrontEnd/Main/HomePage.vue"
          ),
      },
      // 商品及商品訂購流程 開始
      {
        path: "shoplist",
        name: "ShopList",
        component: () =>
          import(
            /* webpackChunkName: "ShopList" */ "@/views/FrontEnd/Products/ShopList.vue"
          ),
      },
      {
        path: "shopdetail/:id",
        name: "ShopDetail",
        component: () =>
          import(
            /* webpackChunkName: "ShopDetail" */ "@/views/FrontEnd/Products/ShopDetail.vue"
          ),
      },
      {
        path: "shoppingcart",
        name: "ShoppingCart",
        component: () =>
          import(
            /* webpackChunkName: "ShoppingCart" */ "@/views/FrontEnd/Products/ShoppingCart.vue"
          ),
      },
      {
        path: "checkorder/:orderId",
        name: "CheckOrder",
        component: () =>
          import(
            /* webpackChunkName: "CheckOrder" */ "@/views/FrontEnd/Products/CheckOrder.vue"
          ),
      },
      {
        path: "ordercomplete",
        name: "OrderComplete",
        component: () =>
          import(
            /* webpackChunkName: "OrderComplete" */ "@/views/FrontEnd/Products/OrderComplete.vue"
          ),
      },
      // 商品及商品訂購流程 結束
      // 文章 開始
      {
        path: "articleslist",
        name: "ArticlesList",
        component: () =>
          import(
            /* webpackChunkName: "ArticlesList" */ "@/views/FrontEnd/Articles/ArticlesList.vue"
          ),
      },
      {
        path: "articledetail/:id",
        name: "ArticleDetail",
        component: () =>
          import(
            /* webpackChunkName: "ArticleDetail" */ "@/views/FrontEnd/Articles/ArticleDetail.vue"
          ),
      },
      // 文章 結束
      // 關於我們 開始
      {
        path: "aboutus",
        name: "AboutUs",
        component: () =>
          import(
            /* webpackChunkName: "AboutUs" */ "@/views/FrontEnd/AboutUs/AboutUs.vue"
          ),
      },
      // 關於我們 結束
      // 訂單搜尋 開始
      {
        path: "ordersearch",
        name: "OrderSearch",
        component: () =>
          import(
            /* webpackChunkName: "OrderSearch" */ "@/views/FrontEnd/OrderSearch/OrderSearch.vue"
          ),
      },
      // 訂單搜尋 結束
    ],
    redirect: "/homepage",
  },
  {
    path: "/admin",
    name: "L-Admin",
    component: () =>
      import(
        /* webpackChunkName: "L-Admin" */ "@/views/BackEnd/Layout/L-Admin.vue"
      ),
    meta: { requiresAuth: true },
    children: [
      {
        path: "bstrictplan",
        name: "BStrictPlan",
        component: () =>
          import(
            /* webpackChunkName: "BStrictPlan" */ "@/views/BackEnd/Functions/StrictPlan.vue"
          ),
        meta: { requiresAuth: true },
      },
      {
        path: "borderlist",
        name: "BOrderList",
        component: () =>
          import(
            /* webpackChunkName: "BOrderList" */ "@/views/BackEnd/Functions/OrderList.vue"
          ),
        meta: { requiresAuth: true },
      },
      {
        path: "bcoupon",
        name: "BCoupon",
        component: () =>
          import(
            /* webpackChunkName: "BCoupon" */ "@/views/BackEnd/Functions/Coupon.vue"
          ),
        meta: { requiresAuth: true },
      },
      {
        path: "barticle",
        name: "BArticles",
        component: () =>
          import(
            /* webpackChunkName: "BArticles" */ "@/views/BackEnd/Functions/Article.vue"
          ),
        meta: { requiresAuth: true },
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "Login" */ "@/views/BackEnd/Login/Login.vue"),
  },
  {
    path: "/:pathMatch(.*)*", // vue-router4 將 * 號改為此寫法
    redirect: "/homepage",
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to) => {
  if (to.meta.requiresAuth) {
    const api = `${process.env.VUE_APP_API}/api/user/check`;
    axios.post(api).then((res) => {
      if (res.data.success) {
        return true;
      } else {
        router.push({ name: "Login" });
      }
    });
  } else {
    return true;
  }
});

export default router;
