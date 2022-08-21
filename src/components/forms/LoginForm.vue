<template>
  <div>
    <template v-if="loginError">
      <LoginError />
    </template>
    <template v-if="isLoading">
      <Loader />
    </template>
    <template v-else>
      <ValidationObserver v-slot="{ handleSubmit, invalid }">
        <form action="" @submit.prevent="handleSubmit(onSubmit)">
          <label for="email" class="label font-raleway"
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
            ><span class="label-text-alt font-raleway">Password</span></label
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
  </div>
</template>

<script>
import { mapActions } from "vuex";
// components
import Loader from "@/components/layout/Loader.vue";
import LoginError from "@/components/utillity/LoginError.vue";
export default {
  components: {
    Loader,
    LoginError,
  },
  data() {
    return {
      loginData: {
        identifier: "",
        password: "",
      },
      isLoading: false,
      loginError: false,
    };
  },
  methods: {
    ...mapActions({
      sigIn: "auth/signIn",
    }),
    onSubmit() {
      this.isLoading = true;
      this.sigIn(this.loginData)
        .then(() => {
          this.$router.push("/guide");
          this.isLoading = false;
        })
        .catch((error) => {
          console.log(error);
          this.loginError = true;
          this.isLoading = false;
        });
    },
  },
};
</script>

<style scoped>
span {
  display: block;
}
</style>