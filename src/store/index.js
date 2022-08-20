import Vue from 'vue';
import Vuex from 'vuex';
import auth from './auth';
// import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
  },
});

// state: {
//   userData: {},
//   isLoggedIn: false,
// },
// getters: {
//   getIsLog: (state) => state.isLoggedIn,
// },
// mutations: {
//   initialiseStore(state) {
//     // Check if the ID exists
//     if (localStorage.getItem('vuex')) {
//       // Replace the state object with the stored item
//       this.replaceState(Object.assign(state, JSON.parse(localStorage.getItem('vuex'))));
//     }
//   },
//   setIsLoggedIn: ({ state }, isLoggedIn) => {
//     state.isLoggedIn = isLoggedIn;
//   },
// },

// plugins: [createPersistedState()],

// store.subscribe((mutation, state) => {
//   // Store the state object as a JSON string
//   localStorage.setItem('vuex', JSON.stringify(state));
// });
