import Vue from 'vue';
import VueRouter from 'vue-router';
import GuideView from '../views/GuideView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
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
