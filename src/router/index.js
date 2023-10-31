import { createRouter, createWebHashHistory } from "vue-router";

const routes = [];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
  // 修改页面标题
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  // 放行登录页面
  if (to.path === "/login") return next();

  // 获取token
  const token = sessionStorage.getItem("token");
  if (!token) {
    return next("/login");
  } else {
    next();
  }

  return next();
});

export default router;
