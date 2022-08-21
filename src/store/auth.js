import axios from 'axios';
export default {
  namespaced: true,
  state: {
    token: null,
    user: null,
  },
  getters: {
    authenticaded(state) {
      return state.token && state.user;
    },
    user(state) {
      return state.user;
    },
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token;
    },
    SET_USER(state, data) {
      state.user = data;
    },
  },
  actions: {
    // sign in
    async signIn({ dispatch }, credentials) {
      let response = await axios.post('auth/local', credentials);
      return dispatch('attempt', response.data.jwt);
    },

    // check user
    async attempt({ commit, state }, token) {
      if (token) {
        commit('SET_TOKEN', token);
      }
      if (!state.token) {
        return;
      }

      try {
        let response = await axios.get('users/me');
        commit('SET_USER', response.data);
      } catch (error) {
        commit('SET_TOKEN', null);
        commit('SET_USER', null);
      }
    },
    signOut({ commit }) {
      commit('SET_TOKEN', null);
      commit('SET_USER', null);
    },
  },
};
