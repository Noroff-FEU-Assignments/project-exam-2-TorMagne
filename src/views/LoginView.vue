<template>
  <div
    class="
      container
      mx-auto
      px-4
      flex flex-col
      items-center
      h-screen
      justify-center
    "
  >
    <div v-if="isLoading">
      <Loader />
    </div>
    <div v-else>
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
        <pre>{{ loginData }}</pre>
      </form>
    </div>
  </div>
</template>

<script>
// components
import Loader from "../components/Loader.vue";
// utillity
import axios from "axios";
export default {
  components: {
    Loader,
  },
  data() {
    return {
      isLoading: false,
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
        const { jwt } = response.data;
        localStorage.setItem("jwt", jwt);
        this.$store.state.userData = this.loginData;
        this.$store.commit("initialiseStore");
        // console.log(this.$store.state.username);
        this.isLoading = false;
        this.$router.push("/guide");
      } catch (error) {
        this.error = error;
      }
    },
  },
};
</script>