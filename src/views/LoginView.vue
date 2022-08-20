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
    <div v-if="loginError">
      <LoginError />
    </div>
    <div v-if="isLoading">
      <Loader />
    </div>
    <div v-else>
      <LoginForm />
    </div>
  </div>
</template>

<script>
// components
import Loader from "../components/layout/Loader.vue";
import LoginError from "../components/layout/LoginError.vue";
import LoginForm from "../components/forms/LoginForm.vue";

export default {
  components: {
    Loader,
    LoginError,
    LoginForm,
  },
  data() {
    return {
      isLoading: false,
      loginError: false,
    };
  },
};
</script>