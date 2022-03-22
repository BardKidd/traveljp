import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "L-Main",
    component: () =>
      import(
        /* webpackChunkName: "L-Main" */ "@/views/FrontEnd/Layout/L-Main.vue"
      ),
  },
  {
    path: "/admin",
    name: "L-Admin",
    component: () =>
      import(
        /* webpackChunkName: "L-Admin" */ "@/views/BackEnd/Layout/L-Admin.vue"
      ),
    children: [
      {
        path: "bstrictplan",
        name: "BStrictPlan",
        component: () =>
          import(
            /* webpackChunkName: "BStrictPlan" */ "@/views/BackEnd/Functions/StrictPlan.vue"
          ),
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*", // vue-router4 將 * 號改為此寫法
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
