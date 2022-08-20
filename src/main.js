import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { store } from './store/store';
import './assets/tailwind.css';
import Vuelidate from 'vuelidate';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  // beforeCreate() {
  //   this.$store.commit('initialiseStore');
  // },
  render: (h) => h(App),
}).$mount('#app');
