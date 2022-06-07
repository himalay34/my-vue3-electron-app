import { createRouter, createWebHashHistory } from "vue-router";
import Router from "vue-router";
import { useAuthStore } from "../stores/use-auth";

let routes = [
  {
    path: "/dashboard",
    name: "dashboard-page",
    meta: {
      title: "Dashboard",
      requiresAuth: true,
    },
    component: () => import("../views/Dashboard.vue"),
  },
  {
    path: "/",
    name: "welcome-page",
    meta: {
      title: "Welcome",
    },
    component: () => import("../views/Welcome.vue"),
  },
  {
    path: "/auth",
    name: "Auth",
    component: () => import(/* webpackChunkName: "home" */ "../views/Auth.vue"),
  },
  {
    path: "/:catchAll(.*)",
    component: () =>
      import(/* webpackChunkName: "notfound" */ "../views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

//router.beforeHooks.unshift((to, from, next) => {})
router.beforeEach((to, from, next) => {
  const { loggedIn } = useAuthStore();

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (loggedIn) {
      next();
    } else {
      next("/auth");
    }
  } else {
    //let routeName = to.meta.title || to.name;
    //window.document.title = (routeName ? routeName + ' - ' : '') + 'Daktar Khana';
    next();
  }
});

export default router;
