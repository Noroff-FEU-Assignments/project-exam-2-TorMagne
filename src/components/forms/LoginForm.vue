<template>
  <form action="" @submit="login">
    <label for="email" class="label"
      ><span class="label-text-alt">Email</span></label
    >
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
    <label for="password" class="label"
      ><span class="label-text-alt">Password</span></label
    >
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

    <button class="btn btn-primary font-sora block">Login</button>
  </form>
</template>

<script>
// utillity
import axios from "axios";
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
    async login(e) {
      e.preventDefault();
      try {
        this.isLoading = true;
        const response = await axios.post(
          process.env.VUE_APP_API_URL + "auth/local",
          this.loginData
        );
        const { jwt, user } = response.data;
        localStorage.setItem("jwt", jwt);
        this.$store.state.userData = user;
        this.$store.state.isLoggedIn = true;
        this.$store.commit("initialiseStore");
        this.isLoading = false;
        this.$router.push("/guide");
      } catch (loginError) {
        console.log(loginError);
        this.isLoading = false;
        this.loginError = true;
      }
    },
  },
};
</script>