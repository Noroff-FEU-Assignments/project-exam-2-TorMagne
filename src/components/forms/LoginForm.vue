<template>
  <ValidationObserver v-slot="{ handleSubmit, invalid }">
    <form action="" @submit.prevent="handleSubmit(onSubmit)">
      <label for="email" class="label"
        ><span class="label-text-alt">Email</span></label
      >
      <ValidationProvider rules="required|email" v-slot="{ errors }">
        <input
          id="email"
          type="email"
          placeholder="Email"
          class="
            input input-bordered
            w-full
            max-w-xs
            border-primary
            mb-4
            font-raleway
          "
          v-model="loginData.identifier"
        />
        <span class="text-red-500">{{ errors[0] }}</span>
      </ValidationProvider>
      <label for="password" class="label"
        ><span class="label-text-alt">Password</span></label
      >
      <ValidationProvider rules="required|length:10" v-slot="{ errors }">
        <input
          id="password"
          type="password"
          placeholder="Password"
          class="
            input input-bordered
            w-full
            max-w-xs
            border-primary
            mb-4
            font-raleway
          "
          v-model="loginData.password"
        />
        <span class="text-red-500">{{ errors[0] }}</span>
      </ValidationProvider>

      <button
        type="submit"
        :disabled="invalid"
        class="btn btn-primary font-sora block"
      >
        Login
      </button>
    </form>
  </ValidationObserver>
</template>

<script>
// utillity
import axios from "axios";
// store
import { store } from "@/store/store";
export default {
  data() {
    return {
      loginData: {
        identifier: "",
        password: "",
      },
    };
  },
  methods: {
    async onSubmit() {
      try {
        this.isLoading = true;
        const response = await axios.post(
          process.env.VUE_APP_API_URL + "auth/local",
          this.loginData
        );
        const { jwt, user } = response.data;
        localStorage.setItem("jwt", jwt);
        this.isLoading = false;
        store.state.userData = user;
        this.checkUser();
      } catch (loginError) {
        console.log(loginError);
        this.isLoading = false;
        this.loginError = true;
      }
    },
    async checkUser() {
      let userId = store.state.userData.id;
      try {
        const response = await axios.get(
          process.env.VUE_APP_API_URL + "users/" + userId + "/?[populate]=*",
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("jwt"),
            },
          }
        );
        store.state.userData = response.data;
        store.state.isLoggedIn = true;
        store.commit("initialiseStore");
        this.$router.push("/guide");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
span {
  display: block;
}
</style>