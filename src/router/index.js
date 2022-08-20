import Vue from 'vue';
import VueRouter from 'vue-router';
import GuideView from '../views/GuideView.vue';
import LoginView from '../views/LoginView.vue';
// store
import { store } from '@/store/store';

Vue.use(VueRouter);

const routerGuard = (to, from, next) => {
  let auth = store.state.isLoggedIn;

  if (auth) {
    next();
  } else {
    next('/');
  }
};

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
    beforeEnter: routerGuard,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
