import VueRouter from 'vue-router';
import VueA from '../pages/a.vue';
import VueB from '../pages/b.vue';

//  route 配置
const routes = [
  {
    path: '/a',  // url 匹配地址
    name: 'pageA', // route name
    component: VueA // 渲染的组价
  },
  {
    path: '/b',
    name: 'pageB',
    component: VueB
  }
];

// 创建router实例
const router = new VueRouter({
  mode: 'hash', // hash路由
  base: process.env.BASE_URL,
  routes
});

export default router;
