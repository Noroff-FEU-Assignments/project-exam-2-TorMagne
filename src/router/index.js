import Vue from 'vue';
import VueRouter from 'vue-router';
import GuideView from '../views/GuideView.vue';
import LoginView from '../views/LoginView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/guide',
    name: 'guide',
    component: GuideView,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
